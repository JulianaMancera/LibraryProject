import React, { ReactNode, useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User, OAuthCredential } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

interface AuthContextType {
    googleSignIn: () => void;
    logout: () => void;
    user: User | null;
    errorMessage: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const ALLOWED_DOMAIN = "@neu.edu.ph";

    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            if (user.email && user.email.endsWith(ALLOWED_DOMAIN)) {
                const usersRef = collection(db, "users");
                const userQuery = query(usersRef, where("email", "==", user.email));
                const querySnapshot = await getDocs(userQuery);

                const fullName: string = user.displayName || "";
                const nameParts: string[] = fullName.split(",").map(part => part.trim());
                const firstName: string = nameParts.length > 1 ? nameParts[1] : (nameParts[0] || "").split(" ")[0];
                const lastName: string = nameParts.length > 1 ? nameParts[0] : nameParts[0].split(" ").slice(1).join(" ");

                if (querySnapshot.empty) {
                    try {
                        await addDoc(usersRef, {
                            OAuthID: user.uid,
                            dateCreated: new Date(),
                            email: user.email,
                            firstName: firstName,
                            lastName: lastName,
                            roleID: "/roles/role2",
                            userID: user.uid,
                            userName: fullName || ""
                        });
                        console.log("New user added to database:", user.email);
                    } catch (dbError) {
                        console.error("Error adding new user:", dbError);
                        await signOut(auth);
                        alert("Error signing up. Please try again.");
                        throw dbError;
                    }
                } else {
                    console.log("User already exists:", user.email);
                }

                const tokenID = await user.getIdToken();
                const credential = GoogleAuthProvider.credentialFromResult(result) as OAuthCredential;
                const accessToken = credential?.accessToken;
                const expirationDate = new Date();
                expirationDate.setSeconds(expirationDate.getSeconds() + 3600);
                const refreshToken = crypto.randomUUID();

                const oauthRef = collection(db, "oauth");
                await addDoc(oauthRef, {
                    userID: user.uid,
                    accessToken: accessToken,
                    tokenID: tokenID,
                    expDate: expirationDate,
                    refreshToken: refreshToken,
                });
                console.log("OAuth tokens stored in database");

                setErrorMessage(null);
            } else {
                console.error("Unauthorized sign-up attempt:", user.email);
                await signOut(auth);
                alert("Please use institutional email or use guest mode");
                throw new Error("You are not part of our organization");
            }

            return result;
        } catch (error) {
            console.error(error);
            setErrorMessage("Error during Google sign-in. Please try again.");
            throw error;
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            console.log("User signed out");
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("User:", currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ googleSignIn, logout, user, errorMessage }}>
            {children}
            {errorMessage && (
                <div style={{ color: 'red', position: 'absolute', top: '20px', left: '20px' }}>
                    {errorMessage}
                </div>
            )}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthContextProvider");
    }
    return context;
};

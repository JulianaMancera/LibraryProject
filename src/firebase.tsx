// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOYNcvC21KSy7MbEiLLXTkuYYdNHLT_g8",
  authDomain: "auth-library-9950e.firebaseapp.com",
  projectId: "auth-library-9950e",
  storageBucket: "auth-library-9950e.appspot.com",
  messagingSenderId: "865962194893",
  appId: "1:865962194893:web:c075a859bc04c6ff6cb684"
};

const firestoreConfig = {
  apiKey: "AIzaSyDYBPuLpyONZRApRLnaIopuNoov8OL-MFQ",
  authDomain: "library-project-8f311.firebaseapp.com",
  projectId: "library-project-8f311",
  storageBucket: "library-project-8f311.appspot.com",
  messagingSenderId: "408552680349",
  appId: "1:408552680349:web:94b2a6c9e21c8e17385d74"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const firestoreApp = !getApps().some((app) => app.options.projectId === firestoreConfig.projectId) 
  ? initializeApp(firestoreConfig, "firestore") 
  : getApp("firestore");

export const auth = getAuth(app);
export const db = getFirestore(firestoreApp);
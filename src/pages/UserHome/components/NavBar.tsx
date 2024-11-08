import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';
import AcctHover from './AcctHover';
import { UserAuth } from "../../../context/AuthContext";

interface NavBarProps {
    id?: string;
}

const NavBar: React.FC<NavBarProps> = ({ id }) => {
    const { logout } = UserAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const getTabValue = (path: string) => {
        if (path.includes("Shelf")) return "Shelf";
        if (path.includes("Service")) return "Service";
        if (path.includes("About")) return "About";
        return "Home";
    };

    const [value, setValue] = React.useState(getTabValue(location.pathname));

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const handleSignOut = async () => {
        try {
            await logout();
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        setValue(getTabValue(location.pathname));
    }, [location]);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="inherit"
                indicatorColor="secondary"
                aria-label="navbar tabs"
            >
                <Tab value="Home" label="Home" onClick={() => navigate("/UserHome")} />
                <Tab value="Shelf" label="Shelf" onClick={() => navigate("/Shelf")} />
                <Tab value="Service" label="Service" onClick={() => navigate("/Service")} />
                <Tab value="About" label="About" onClick={() => navigate("/About")} />
                <Tab value="Logout" label="Logout" onClick={handleSignOut} />
            </Tabs>
            <AcctHover />
        </Box>
    );
};

export default NavBar;

import * as React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, Container, Box, Avatar } from '@mui/material';
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import ShelfThesis from './components/ShelfThesis';
import logo from "../../images/Logo.png";

function Shelf() {
    const [scrolling, setScrolling] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />

            {/* Header */}
            <AppBar sx={{ background: 'linear-gradient(to left, #9396E9 20%, #916FC6 80%)', position: 'fixed', width: '100%' }}>
                <Toolbar sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '16px 16px',
                }}>

                    {/* Top row with logo and navbar */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        width: '100%',
                    }}>
                        
                        {/* Logo and title */}
                        <Box sx={{
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
        
                        }}>
                            <Avatar 
                                alt="Library Logo" 
                                src={logo} 
                                sx={{ 
                                    width: scrolling ? 50 : 90, 
                                    height: scrolling ? 50 : 90, 
                                    mr: 1, 
                                    ml: 5,
                                    transition: 'all 1s ease' 
                                }} 
                            />
                            <Typography
                                variant={scrolling ? "h4" : "h2"}
                                color="white"
                                sx={{
                                    fontWeight: 'bold',
                                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                    transition: 'all 1s ease'
                                }}
                            >
                                LIBRARY
                            </Typography>
                        </Box>

                        {/* Search Bar */}
                        <SearchBar />

                        {/* Navbar Tabs */}
                        <NavBar />
                    </Box>
                </Toolbar>
                {/* Sidebar */}
                <Box sx={{
                    position: 'absolute',
                    top: 15,  
                    left: 0,
                }}>
                    <SideBar />
                    </Box>
            </AppBar>

            {/* Main Content */}
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: '180px',
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: '#49454F',
                        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    }}
                >
                    WELCOME!
                </Typography>
                
                <ShelfThesis />
            </Container>
        </React.Fragment>
    );
}

export default Shelf;

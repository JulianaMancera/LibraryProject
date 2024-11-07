import * as React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, Container, Box, Avatar } from '@mui/material';
import NavBar from "./components/NavBar";
import FeaturedBooks from './components/FeaturedBooks';
import logo from "../../images/Logo.png";
import school from "../../images/School.png";

function UserHome() {
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
            <AppBar sx={{ background: 'linear-gradient(to left, #9396E9 20%, #916FC6 80%)' }}>
            <Toolbar sx={{ display: 'flex', 
                           flexDirection: 'column',
                           alignItems: 'center',
                           padding: '8px 16px'
                        }}>
                
                {/* Top row with logo and navbar */}
                <Box sx={{ display: 'flex',
                           justifyContent: 'space-between', 
                           alignItems: 'flex-start', 
                           width: '100%' 
                        }}>
                    
                    {/* Logo */}
                    <Box sx={{ position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'flex-start', 
                        margin: '10px' }}>
                        <Avatar alt="Library Logo" src={logo} sx={{ width: 50, height: 50, mr: 1 }} />
                    </Box>

                    {/* Library text */}
                    <Box sx={{ display: 'flex', 
                               flexDirection: scrolling ? 'row' : 'column', 
                               alignItems: 'center', 
                               justifyContent: scrolling ? 'flex-start' : 'center', 
                               marginTop: scrolling ? '0' : '56px', 
                               marginLeft: scrolling ? '45px' : '580px', 
                               transition: 'all 1s ease'
                            }}>
                        <Typography
                            variant="h5"
                            color="white"
                            sx={{
                                fontSize: scrolling ? '36px' : '56px',
                                fontWeight: 'bold',
                                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                transition: 'font-size 1s ease, margin-top 1s ease',
                            }}
                        >
                            LIBRARY
                        </Typography>
                    </Box>

                    {/* Navbar Tabs */}
                    <NavBar />
                  </Box>
              </Toolbar>
          </AppBar>
            {/* Background and Main Content */}
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `linear-gradient(#FFFFFFB3, #FFFFFFB3), url(${school})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                    minWidth: '100%',
                    paddingTop: '180px'
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: '#49454F',
                        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                    }}
                >
                    WELCOME!
                </Typography>
                <Typography variant="subtitle1" sx={{ marginTop: '10px', color: '#555' }}>
                    Why do we use it? It is a long established fact
                </Typography>
                
                <FeaturedBooks />
            </Container>
        </React.Fragment>
    );
}

export default UserHome;

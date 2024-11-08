import * as React from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
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
        <Paper
            component="form"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: scrolling ? 'flex-start' : 'center',
                marginTop: scrolling ? '0' : '100px',
                marginLeft: scrolling ? '270px' : '500px',
                width: 500,
                borderRadius: '50px',
                transition: 'all 1s ease'
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Looking for a Thesis?"
                inputProps={{ 'aria-label': 'Search Thesis' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

export default SearchBar;

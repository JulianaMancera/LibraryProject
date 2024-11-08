import React, { useState } from 'react';
import { Box, Avatar, Typography, Popover } from '@mui/material';
import { UserAuth } from '../../../context/AuthContext';

const AcctHover: React.FC = () => {
    const { user } = UserAuth();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Box onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
            <Avatar 
                sx={{ width: 40, height: 40, cursor: 'pointer' }} 
                src={user?.photoURL || ''} 
                alt={user?.displayName || 'User'}
            />
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                disableRestoreFocus
                sx={{
                    pointerEvents: 'none',
                }}
            >
                <Box sx={{ padding: 2 }}>
                    <Typography variant="subtitle1">
                        {user?.displayName || 'User'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {user?.email}
                    </Typography>
                </Box>
            </Popover>
        </Box>
    );
};

export default AcctHover;
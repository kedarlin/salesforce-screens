import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './style.css';
import { Menu } from '@mui/icons-material';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" className="custom-appbar">
                <Toolbar className="toolbar">
                    <Box sx={{ flexGrow: 1 }} />
                    <Box className="search-bar-container">
                        <IconButton
                            size="small"
                            edge="start"
                            color="#49454F"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <Menu />
                        </IconButton>
                        <InputBase
                            sx={{color: "#49454F", width: "100%"}}
                            placeholder="Global search"
                            inputProps={{ 'aria-label': 'global search' }}
                        />
                        <IconButton
                            size="small"
                            edge="start"
                            color="#49454F"
                            aria-label="menu"
                        >
                            <SearchIcon sx={{color: "#49454F"}} />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1, justifyContent: "center" }}>
                        <IconButton size="large" edge="end" color="inherit">
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
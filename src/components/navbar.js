import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';
import { Menu } from '@mui/icons-material';
import { ListItemButton, ListItemText } from '@mui/material';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky" sx={{ backgroundColor: "white", boxShadow: "none" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "12px 16px" }}>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box className="search-bar-container" sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#F0F0F0', borderRadius: '20px', padding: '4px 12px', width: '50%', maxWidth: '600px' }}>
                        <IconButton size="small" edge="start" sx={{ mr: 2 }}>
                            <Menu sx={{ color: "#49454F" }} />
                        </IconButton>
                        <InputBase
                            sx={{ color: "#49454F", width: "100%" }}
                            placeholder="Global search"
                            inputProps={{ 'aria-label': 'global search' }}
                        />
                        <IconButton size="small" edge="start">
                            <SearchIcon sx={{ color: "#49454F" }} />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ ml: 'auto' }}>
                        <Box size="large" edge="end" sx={{ padding: "10px 12px", backgroundColor: "#bdbdbd", borderRadius: "50%", cursor: "pointer" }}>
                            <ListItemText sx={{ color: "#fff" }} primary="HD" />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
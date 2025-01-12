import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowForwardIos, Home, Menu, Star } from '@mui/icons-material';
import { Link, List, ListItem, ListItemText } from '@mui/material';

export default function Navbar() {
    return (
        <Box>
            <AppBar position="sticky" sx={{ backgroundColor: "#f4f5fa", boxShadow: "none" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: "12px 16px" }}>
                    <Box sx={{ flex: 1 }}>
                        <List sx={{color: "black", fontSize: "14px"}}>
                            <ListItem>
                                <Box display="flex" alignItems="center">
                                    <Home sx={{color: "#6b6c6e", fontSize: "16px", mr: "4px"}}/>
                                    <Link underline='hover' color='black'>Link</Link>
                                    <ArrowForwardIos sx={{color: "#6b6c6e", fontSize: "14px", mr: "4px", ml: "4px"}}/>
                                    <Star sx={{color: "#6b6c6e", fontSize: "14px", mr: "4px"}}/>
                                    <Link underline='hover' color='black'>Link</Link>
                                    <ArrowForwardIos sx={{color: "#6b6c6e", fontSize: "14px", mr: "4px", ml: "4px"}}/>
                                    <Star sx={{fontSize: "14px", mr: "4px"}}/>
                                    <Link underline='hover' color='black'>Link</Link>
                                </Box>
                            </ListItem>
                            <ListItem sx={{fontSize: "28px"}}>
                                Accounts
                            </ListItem>
                        </List>
                    </Box>
                    <Box className="search-bar-container" sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#ece6f0', borderRadius: '20px', width: "100%", padding: '4px 12px', maxWidth: '600px', flex: 1.5 }}>
                        <IconButton size="small" edge="start" sx={{ mr: 2 }}>
                            <Menu sx={{ color: "#49454F" }} />
                        </IconButton>
                        <InputBase
                            sx={{ color: "#000", width: "100%", }}
                            placeholder="Global search"
                            inputProps={{ 'aria-label': 'global search' }}
                        />
                        <IconButton size="small" edge="start">
                            <SearchIcon sx={{ color: "#49454F" }} />
                        </IconButton>
                    </Box>
                    <Box display="flex" flexDirection="row-reverse" justifyContent="end" flex={1}>
                        <Box size="small" edge="end" sx={{ padding: "4px 8px", backgroundColor: "#bdbdbd", borderRadius: "50%", cursor: "pointer" }}>
                            <ListItemText sx={{ color: "#fff"}} primary="HD" />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
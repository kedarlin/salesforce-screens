import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar';
import SecondarySidebar from '../components/secondarySidebar';
import { Box, IconButton, List } from '@mui/material';
import Navbar from '../components/navbar';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const Dashboard1 = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [open, setOpen] = useState(true);

    useEffect(() =>{
        setOpen(true);
    }, [selectedIndex]);
    return (
        <Box display="flex" height="100vh">
            <Sidebar selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

            <Box
                sx={{
                    position: 'relative',
                    height: "100%",
                    width: open ? "300px" : 15,
                    backgroundColor: '#f4f5fa',
                    borderRight: '1px solid #ddd',
                }}
            >
                <SecondarySidebar selectedIndex={selectedIndex} open={open} setOpen={setOpen} />

                <IconButton size='small' edge='start'
                    sx={{
                        position: "absolute",
                        bottom: 16,
                        right: -14,
                        zIndex: 1,
                        backgroundColor: '#007bff',
                        color: '#fff',
                        padding: "5px",
                        margin: "0",
                    }}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {open ? <ArrowBackIos  sx={{fontSize: "14px"}}/> : <ArrowForwardIos sx={{fontSize: "14px"}}/>}
                </IconButton>
            </Box>

            <List
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: "100%",
                    padding: 0,
                }}
            >
                <Navbar />
                <Box
                    sx={{
                        flexGrow: 1,
                        backgroundColor: "#f4f5fa",
                    }}
                />
            </List>
        </Box>
    );
};

export default Dashboard1;
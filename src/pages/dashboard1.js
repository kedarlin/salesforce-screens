import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import SecondarySidebar from '../components/secondarySidebar'
import { Box } from '@mui/material'
import Navbar from '../components/navbar'

const Dashboard1 = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);
    return (
        <Box display="flex" height="100vh">
            <Sidebar selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
            <SecondarySidebar selectedIndex={selectedIndex} />
            <Box sx={{ width: "100%"}}>
                <Navbar />
                <Box sx={{ height: "85%", width: "100%", backgroundColor: "#f4f5fa" }}>
                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard1
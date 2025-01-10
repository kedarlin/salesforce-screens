import React from 'react'
import Sidebar from '../components/sidebar'
import SecondarySidebar from '../components/secondarySidebar'
import { Box } from '@mui/material'

const Dashboard1 = () => {
  return (
    <Box display="flex" height="100vh">
        <Sidebar />
        <SecondarySidebar selectedIndex={1}/>
    </Box>
  )
}

export default Dashboard1
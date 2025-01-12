import { ArrowDropDown, ArrowForwardIos, FilterAlt, Search, Settings, Star, ViewKanbanOutlined } from '@mui/icons-material';
import { Box, FormControl, IconButton, InputAdornment, ListItem, MenuItem, Menu, Button, TextField, Select, Collapse } from '@mui/material';
import React, { useState } from 'react';
import FilterSidebar from './filterSidebar';

const Filterbar = () => {
    const [filter, setFilter] = React.useState('default');
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open1 = Boolean(anchorEl1);
    const open2 = Boolean(anchorEl2);
    const [openFilterSidebar, setOpenFilterSidebar] = useState(true);

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    const toggleDrawer = (open) => (event) => {
        setOpenFilterSidebar(open);
      };

    return (
        <Box display="flex" flexDirection="row" alignItems="center" gap="16px" padding="16px">
            <Box flex={1} display="flex" gap="16px">
                <FormControl variant="standard" sx={{ minWidth: "150px" }}>
                    <Select
                        size="small"
                        id="demo-simple-select"
                        value={filter}
                        onChange={handleChange}
                    >
                        <MenuItem value="default">
                            <Box display="flex" alignItems="center">
                                <Star /> <ListItem>Menu Item 1</ListItem>
                            </Box>
                        </MenuItem>
                        <MenuItem value="email">
                            <Box display="flex" alignItems="center">
                                <Star /> <ListItem>Menu Item 2</ListItem>
                            </Box>
                        </MenuItem>
                        <MenuItem value="location">
                            <Box display="flex" alignItems="center">
                                <Star /> <ListItem>Menu Item 3</ListItem>
                            </Box>
                        </MenuItem>
                        <MenuItem value="name">
                            <Box display="flex" alignItems="center">
                                <Star /> <ListItem>Menu Item 4</ListItem>
                            </Box>
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box display="flex" justifyContent="center" flex={1}>
                <TextField
                    size="small"
                    variant="outlined"
                    placeholder="Search Account"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                    style={{
                        borderRadius: 4,
                    }}
                />
            </Box>
            <Box display="flex" justifyContent="end" flex={1} gap="10px">
                <Button
                    startIcon={<ViewKanbanOutlined />}
                    variant="contained"
                    onClick={handleClick1}
                    endIcon={<ArrowForwardIos />}
                    disableElevation
                    sx={{
                        color: "black",
                        backgroundColor: "#ffffff00",
                        border: "2px solid black"
                    }}
                />
                <Menu
                    anchorEl={anchorEl1}
                    open={open1}
                    onClose={handleClose1}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleClose1}>Edit</MenuItem>
                    <MenuItem onClick={handleClose1}>Duplicate</MenuItem>
                    <MenuItem onClick={handleClose1}>Archive</MenuItem>
                    <MenuItem onClick={handleClose1}>More</MenuItem>
                </Menu>

                <Button
                    variant="contained"
                    onClick={handleClick2}
                    endIcon={<ArrowDropDown />}
                    sx={{
                        width: "150px",
                    }}
                    
                >
                    Options
                </Button>
                <Menu
                    anchorEl={anchorEl2}
                    open={open2}
                    onClose={handleClose2}
                    TransitionComponent={Collapse}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    sx={{
                        width: "150px",
                    }}
                >
                    <MenuItem onClick={handleClose2}>Edit</MenuItem>
                    <MenuItem onClick={handleClose2}>Duplicate</MenuItem>
                    <MenuItem onClick={handleClose2}>Archive</MenuItem>
                    <MenuItem onClick={handleClose2}>More</MenuItem>
                </Menu>

                <IconButton>
                    <Settings />
                </IconButton>
                <IconButton onClick={toggleDrawer(true)}>
                    <FilterAlt />
                </IconButton>
                <FilterSidebar openFilterSidebar={openFilterSidebar} toggleDrawer={toggleDrawer} />
            </Box>
        </Box>
    );
};

export default Filterbar;
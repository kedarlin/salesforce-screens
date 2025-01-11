import { ArrowDropDown, FilterAlt, Search, Settings, Star } from '@mui/icons-material';
import { Box, FormControl, IconButton, InputAdornment, ListItem, MenuItem, Menu, Button, TextField, Select } from '@mui/material';
import React from 'react';

const Filterbar = () => {
    const [filter, setFilter] = React.useState('default');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
                    variant="contained"
                    onClick={handleClick}
                    endIcon={<ArrowDropDown />}
                >
                    Options
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem onClick={handleClose}>Duplicate</MenuItem>
                    <MenuItem onClick={handleClose}>Archive</MenuItem>
                    <MenuItem onClick={handleClose}>More</MenuItem>
                </Menu>
                <IconButton>
                    <Settings />
                </IconButton>
                <IconButton>
                    <FilterAlt />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Filterbar;

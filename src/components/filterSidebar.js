import { Close, Inbox, Mail, UnfoldMore, Star } from '@mui/icons-material';
import {
    Box,
    Collapse,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    FormControl,
    MenuItem,
    Select,
    Link,
} from '@mui/material';
import React from 'react';
import { TransitionGroup } from 'react-transition-group';

const FilterSidebar = ({ openFilterSidebar, toggleDrawer }) => {

    const [filtersCount, setFiltersCount] = React.useState(1);
    const [filters, setFilters] = React.useState(Array(filtersCount).fill("default"));

    const handleChange = (index) => (event) => {
        const newFilters = [...filters];
        newFilters[index] = event.target.value;
        setFilters(newFilters);
    };


    const renderFilterItem = ({ index }) => {
        return (
            <Box display="flex" alignItems="center" justifyContent="start" gap={3} key={index} my={1}>
                {index + 1}.
                <FormControl size='small' sx={{ width: "150px" }}>
                    <Select
                        size="small"
                        id="demo-simple-select-outlined"
                        value={filters[index]}
                        onChange={handleChange(index)}
                        IconComponent={UnfoldMore}
                        sx={{
                            padding: 0,
                            '.MuiSelect-select': {
                                padding: 0,
                            },
                        }}
                    >
                        <MenuItem value="default" sx={{ padding: "0px" }}>
                            <Box display="flex" alignItems="center">
                                <ListItem>Filter Item 1</ListItem>
                            </Box>
                        </MenuItem>
                        <MenuItem value="email" sx={{ padding: "0px" }}>
                            <Box display="flex" alignItems="center">
                                <ListItem>Filter Item 2</ListItem>
                            </Box>
                        </MenuItem>
                        <MenuItem value="location" sx={{ padding: "0px" }}>
                            <Box display="flex" alignItems="center">
                                <ListItem>Filter Item 3</ListItem>
                            </Box>
                        </MenuItem>
                        <MenuItem value="name" sx={{ padding: "0px" }}>
                            <Box display="flex" alignItems="center">
                                <ListItem>Filter Item 4</ListItem>
                            </Box>
                        </MenuItem>
                    </Select>
                </FormControl>
                <FormControl size='small' sx={{ width: "150px" }}>
                    <Select
                        size="small"
                        id="demo-simple-select-outlined"
                        value={filters[index]}
                        onChange={handleChange(index)}
                        IconComponent={UnfoldMore}
                        sx={{
                            padding: 0,
                            '.MuiSelect-select': {
                                padding: 0,
                            },
                        }}
                    >
                        <MenuItem value="default" sx={{ padding: "0px" }}>
                            <Box display="flex" alignItems="center">
                                <ListItem>Filter Item 1</ListItem>
                            </Box>
                        </MenuItem>
                        <MenuItem value="email" sx={{ padding: "0px" }}>
                            <Box display="flex" alignItems="center">
                                <ListItem>Filter Item 2</ListItem>
                            </Box>
                        </MenuItem>
                        <MenuItem value="location" sx={{ padding: "0px" }}>
                            <Box display="flex" alignItems="center">
                                <ListItem>Filter Item 3</ListItem>
                            </Box>
                        </MenuItem>
                        <MenuItem value="name" sx={{ padding: "0px" }}>
                            <Box display="flex" alignItems="center">
                                <ListItem>Filter Item 4</ListItem>
                            </Box>
                        </MenuItem>
                    </Select>
                </FormControl>
                <FormControl size='small' sx={{ width: "150px" }}>
                    <Select
                        size="small"
                        id="demo-simple-select-outlined"
                        value={filters[index]}
                        onChange={handleChange(index)}
                        IconComponent={UnfoldMore}
                        sx={{
                            padding: 0,
                            '.MuiSelect-select': {
                                padding: 0,
                            },
                        }}
                    >
                        <MenuItem value="default" sx={{ padding: "0px" }}>
                            <Box display="flex" alignItems="center">
                                <ListItem>Filter Item 1</ListItem>
                            </Box>
                        </MenuItem>
                        <MenuItem value="email" sx={{ padding: "0px" }}>
                            <Box display="flex" alignItems="center">
                                <ListItem>Filter Item 2</ListItem>
                            </Box>
                        </MenuItem>
                        <MenuItem value="location" sx={{ padding: "0px" }}>
                            <Box display="flex" alignItems="center">
                                <ListItem>Filter Item 3</ListItem>
                            </Box>
                        </MenuItem>
                        <MenuItem value="name" sx={{ padding: "0px" }}>
                            <Box display="flex" alignItems="center">
                                <ListItem>Filter Item 4</ListItem>
                            </Box>
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
        );
    };

    return (
        <Drawer anchor="right" open={openFilterSidebar} onClose={toggleDrawer(false)}>
            <Box
                sx={{ width: "50vw" }}
                role="presentation"
                onKeyDown={toggleDrawer(false)}
                padding={2}
            >
                <Box display="flex" alignItems="center" onClick={toggleDrawer(true)} gap={2}>
                    <IconButton onClick={toggleDrawer(false)} size="large" color="black">
                        <Close />
                    </IconButton>
                    <ListItemText
                        primary="FILTERS"
                        slotProps={{
                            primary: {
                                sx: {
                                    fontSize: "24px",
                                },
                            },
                        }}
                    />
                </Box>
                <List sx={{ mt: 1 }}>
                    <TransitionGroup>
                        {Array.from({ length: filtersCount }).map((_, index) => (
                            <Collapse key={index}>
                                {renderFilterItem({ index })}
                            </Collapse>
                        ))}
                    </TransitionGroup>
                    <Box display="flex" justifyContent="flex-start" flexDirection="row" gap={2}>
                        <Link
                            sx={{
                                cursor: "pointer",
                                color: "blue",
                                textDecoration: "none",
                                fontWeight: "400",
                                p: 1,
                                ":hover": {
                                    textDecoration: "underline"
                                }
                            }}
                            onClick={() => {
                                setFiltersCount((prevCount) => {
                                    const newCount = prevCount + 1;
                                    setFilters((prevFilters) => [...prevFilters, "default"]);
                                    return newCount;
                                });
                            }}
                        >Add Filter</Link>
                        <Link
                            sx={{
                                cursor: "pointer",
                                color: "blue",
                                textDecoration: "none",
                                fontWeight: "400",
                                p: 1,
                                ":hover": {
                                    textDecoration: "underline"
                                }
                            }}
                            onClick={() => {
                                setFiltersCount(() => {
                                    const newCount = 1;
                                    setFilters((prevFilters) => [...prevFilters, "default"]);
                                    return newCount;
                                });
                            }}
                        >Remove All Filters</Link>
                    </Box>
                </List>
            </Box>
        </Drawer>
    );
};

export default FilterSidebar;
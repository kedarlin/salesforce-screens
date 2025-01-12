import { Close, Inbox, Mail, UnfoldMore, Star, Search } from '@mui/icons-material';
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
    TextField,
    InputAdornment,
    Button,
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
                <Box flex={0.5}>
                    {index + 1}.
                </Box>

                <FormControl size='small' sx={{ flex: 5 }}>
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
                <FormControl size='small' sx={{ flex: 4 }}>
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
                <TextField
                    size="small"
                    variant="outlined"
                    placeholder="Search..."
                    style={{
                        flex: 3,
                        borderRadius: 4,
                    }}
                />
            </Box>
        );
    };

    return (
        <Drawer anchor="right" open={openFilterSidebar} onClose={toggleDrawer(false)}>
            <Box
                role="presentation"
                padding={2}
                mr={4}
            >
                <Box display="flex" alignItems="center" gap={2}>
                    <IconButton onClick={toggleDrawer(false)} size="large" color="black">
                        <Close />
                    </IconButton>
                    <ListItemText
                        primary="FILTERS"
                        slotProps={{
                            primary: {
                                sx: {
                                    fontSize: "24px",
                                    fontWeight: "500"
                                },
                            },
                        }}
                    />
                </Box>
                <List sx={{ mt: 1 }}>
                    <Box display="flex" gap={2} flexDirection="row" alignItems="center">
                        <TextField
                            fullWidth
                            size="medium"
                            variant="outlined"
                            placeholder="Search Account"
                            label="Filter by owner"
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
                        <Button variant='contained' size='large' disableElevation>
                            Search
                        </Button>
                    </Box>
                    
                    <Box display="flex" alignItems="center" justifyContent="start" gap={3} mt={4}>
                        <Box flex={0.5} />
                        <ListItemText
                            sx={{
                                flex: 5
                            }}
                            primary="Field"
                            slotProps={{
                                primary: {
                                    sx: {
                                        fontWeight: "500"
                                    },
                                },
                            }}
                        />
                        <ListItemText
                            sx={{
                                flex: 4
                            }}
                            primary="Operator"
                            slotProps={{
                                primary: {
                                    sx: {
                                        fontWeight: "500"
                                    },
                                },
                            }}
                        />
                        <ListItemText
                            sx={{
                                flex: 3
                            }}
                            primary="Value"
                            slotProps={{
                                primary: {
                                    sx: {
                                        fontWeight: "500"
                                    },
                                },
                            }}
                        />
                    </Box>
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
                        >Add row</Link>
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
                                    const newCount = prevCount - 1 < 1 ? 1 : prevCount - 1;
                                    setFilters((prevFilters) => [...prevFilters, "default"]);
                                    return newCount;
                                });
                            }}
                        >Remove row</Link>
                    </Box>
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
                                setFiltersCount(() => {
                                    const newCount = 1;
                                    setFilters(["default"]);
                                    return newCount;
                                });
                            }}
                        >Remove all rows</Link>
                    </Box>
                </List>
            </Box>
        </Drawer>
    );
};

export default FilterSidebar;
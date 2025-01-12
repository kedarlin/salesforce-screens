import React from 'react';
import {
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import AppIcon from '../../assets/appIcon';
import { Archive, ExpandLess, ExpandMore, Mail, Star, Wifi } from '@mui/icons-material';

const SecondarySidebar1 = () => {
    const [openStates, setOpenStates] = React.useState({});

    const handleClick = (index) => {
        setOpenStates((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <List
            sx={{ height: "100vh", width: '100%', Width: 256, bgcolor: '#fff', marginRight: "1px", padding: "0",overflow: "scroll", scrollbarWidth: "none", boxShadow:"0px 2px 1px 1px #00000033"}}
            aria-label="contacts"
        >
            <ListItem sx={{ paddingTop: "20px", paddingBottom: "20px", gap: "5px" }}>
                <AppIcon />
                <ListItemText
                    primary="LogoIpsum"
                    sx={{ margin: "0" }}
                    slotProps={{ primary: { sx: { fontWeight: '700' } } }}
                />
            </ListItem>


            <ListItemButton onClick={() => handleClick(0)}>
                <ListItemIcon>
                    <Mail />
                </ListItemIcon>
                <ListItemText primary='List item 1' />
                {openStates[0] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openStates[0]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <Star />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <Archive />
                        </ListItemIcon>
                        <ListItemText primary="Archived" />
                    </ListItemButton>
                </List>
            </Collapse>


            <ListItemButton onClick={() => handleClick(1)}>
                <ListItemIcon>
                    <Star />
                </ListItemIcon>
                <ListItemText primary='List item 2' />
                {openStates[1] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openStates[1]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <Star />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <Archive />
                        </ListItemIcon>
                        <ListItemText primary="Archived" />
                    </ListItemButton>
                </List>
            </Collapse>

            <ListItemButton>
                <ListItemIcon>
                    <Star />
                </ListItemIcon>
                <ListItemText primary="ListItem 3" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Star />
                </ListItemIcon>
                <ListItemText primary="ListItem 4" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Wifi />
                </ListItemIcon>
                <ListItemText primary="ListItem 5" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Star />
                </ListItemIcon>
                <ListItemText primary="ListItem 6" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Star />
                </ListItemIcon>
                <ListItemText primary="ListItem 7" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Wifi />
                </ListItemIcon>
                <ListItemText primary="ListItem 8" />
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon>
                    <Star />
                </ListItemIcon>
                <ListItemText primary="ListItem 9" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Star />
                </ListItemIcon>
                <ListItemText primary="ListItem 10" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Wifi />
                </ListItemIcon>
                <ListItemText primary="ListItem 11" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Star />
                </ListItemIcon>
                <ListItemText primary="ListItem 12" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Star />
                </ListItemIcon>
                <ListItemText primary="ListItem 13" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Wifi />
                </ListItemIcon>
                <ListItemText primary="ListItem 14" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Star />
                </ListItemIcon>
                <ListItemText primary="ListItem 15" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Wifi />
                </ListItemIcon>
                <ListItemText primary="ListItem 16" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Star />
                </ListItemIcon>
                <ListItemText primary="ListItem 17" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Star />
                </ListItemIcon>
                <ListItemText primary="ListItem 18" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Wifi />
                </ListItemIcon>
                <ListItemText primary="ListItem 19" />
            </ListItemButton>
            
        </List>
    );
};

export default SecondarySidebar1;
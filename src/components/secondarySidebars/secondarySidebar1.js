import React from 'react';
import {
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField
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
            sx={{ height: "100vh", width: '100%', maxWidth: 256, bgcolor: '#fff', padding: "0", borderRight : "1px solid #FFFFFF", boxShadow:"0px 2px 1px 1px #00000033"}}
            aria-label="contacts"
        >
            <ListItem sx={{ paddingTop: "12px", paddingBottom: "12px", gap: "5px" }}>
                <AppIcon />
                <ListItemText
                    primary="LogoIpsum"
                    sx={{ margin: "0" }}
                    slotProps={{ primary: { sx: { fontWeight: '700' } } }}
                />
            </ListItem>

            <ListItem>
                <TextField size='small' id="outlined-basic" placeholder='Placeholder' variant="outlined" />
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
        </List>
    );
};

export default SecondarySidebar1;
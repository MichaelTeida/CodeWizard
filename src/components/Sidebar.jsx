import React from 'react';
import {Box, List, ListItemButton, ListItemIcon, ListItemText, ListItem, Button} from '@mui/material'
import MessageIcon from '@mui/icons-material/Message';
import ErrorIcon from '@mui/icons-material/Error';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
    return (
        <Box flex={2} p={3} sx={{display: {xs: "none", sm: "block"}}}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon>
                            <MessageIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Strona główna"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#logs">
                        <ListItemIcon>
                            <ErrorIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Logi błędów"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#settings">
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Ustawienia"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
};

export default Sidebar;
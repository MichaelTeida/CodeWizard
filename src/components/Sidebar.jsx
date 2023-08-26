import React from 'react';
import {Box, List, ListItemButton, ListItemIcon, ListItemText, ListItem} from '@mui/material'
import MessageIcon from '@mui/icons-material/Message';
import ErrorIcon from '@mui/icons-material/Error';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import HistoryIcon from '@mui/icons-material/History';
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
    return (
        <Box flex={2} p={3} sx={{display: {xs: "none", sm: "block"}, bgcolor: "bgSidebar", minHeight: "100vh" }}>
            <Box position="fixed">
                <List>
                    <NavLink to="/" style={({isActive}) => isActive ? {color: 'red'} : {color: 'inherit'}} end>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <MessageIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Strona główna"/>
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/instruction"
                             style={({isActive}) => isActive ? {color: 'red'} : {color: 'inherit'}} end>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HelpIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Instrukcja"/>
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/history"
                             style={({isActive}) => isActive ? {color: 'red'} : {color: 'inherit'}} end>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HistoryIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Historia"/>
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/logs"
                             style={({isActive}) => isActive ? {color: 'red'} : {color: 'inherit'}} end>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ErrorIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Logi błędów"/>
                            </ListItemButton>
                        </ListItem>

                    </NavLink>
                    <NavLink to="/settings"
                             style={({isActive}) => isActive ? {
                                 color: 'red',
                                 background: "gray",
                                 textDecoration: 'none'
                             } : {color: 'inherit'}} end>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SettingsIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Ustawienia"/>
                            </ListItemButton>
                        </ListItem>

                    </NavLink>
                </List>
            </Box>
        </Box>
    );
};

export default Sidebar;
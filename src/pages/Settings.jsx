import React, {useState} from 'react';
import {
    Box,
    Card,
    CardContent,
    Stack,
    Slider,
    Button,
    FormControlLabel,
    Switch,
    Typography,
    Divider
} from "@mui/material";
import Sidebar from "../components/Sidebar.jsx";

const Settings = () => {
    const [volume, setVolume] = useState(50);
    const [notifications, setNotifications] = useState(true);
    const [language, setLanguage] = useState('en');
    const [speed, setSpeed] = useState(1);
    const [darkMode, setDarkMode] = useState(false);
    const [hints, setHints] = useState(false);
    const [themeColor, setThemeColor] = useState('#6231ed');

    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue);
    };

    const handleNotificationsToggle = () => {
        setNotifications(prevState => !prevState);
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const handleSpeedChange = (event, newValue) => {
        setSpeed(newValue);
    };

    const handleDarkModeToggle = () => {
        setDarkMode(prevState => !prevState);
    };

    const handleSuggestionsToggle = () => {
        setHints(prevState => !prevState);
    };

    const handleThemeColorChange = (event) => {
        setThemeColor(event.target.value);
    };

    return (
        <Stack direction="row" justifyContent="space-between">
            <Sidebar/>
            <Box flex={8} p={3}>
                <Stack spacing={2}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Ustawienia
                            </Typography>
                            <Divider sx={{mb: 2}}/>
                            <Box sx={{mb: 2}}>
                                <Typography variant="h6">Temperatura:</Typography>
                                <Slider
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    aria-labelledby="volume-slider"
                                    valueLabelDisplay="auto"
                                />
                            </Box>
                            <Box sx={{mb: 2}}>
                                <Typography variant="h6" gutterBottom>Powiadomienia:</Typography>
                                <Button variant="contained" onClick={handleNotificationsToggle}>
                                    {notifications ? 'Włączone' : 'Wyłączone'}
                                </Button>
                            </Box>
                            <Box sx={{mb: 2}}>
                                <Typography variant="h6" gutterBottom>Język:</Typography>
                                <select value={language} onChange={handleLanguageChange}>
                                    <option value="en">Polski</option>
                                    <option value="es">English</option>
                                    <option value="fr">Española</option>
                                </select>
                            </Box>
                            <Box sx={{mb: 2}}>
                                <Typography variant="h6" >Szybkość:</Typography>
                                <Slider
                                    value={speed}
                                    onChange={handleSpeedChange}
                                    aria-labelledby="speed-slider"
                                    valueLabelDisplay="auto"
                                    step={0.1}
                                    min={0.5}
                                    max={2}
                                />
                            </Box>
                            <Box sx={{mb: 2}}>
                                <Typography variant="h6">Ciemny motyw:</Typography>
                                <FormControlLabel
                                    control={<Switch checked={darkMode} onChange={handleDarkModeToggle}/>}
                                    label={darkMode ? 'Włączone' : 'Wyłączone'}
                                />
                            </Box>
                            <Box sx={{mb: 2}}>
                                <Typography variant="h6">Podpowiedzi:</Typography>
                                <FormControlLabel
                                    control={<Switch checked={hints} onChange={handleSuggestionsToggle}/>}
                                    label={hints ? 'Włączone' : 'Wyłączone'}
                                />
                            </Box>
                            <Box sx={{mb: 2}}>
                                <Typography variant="h6">Kolor motywu:</Typography>
                                <input
                                    type="color"
                                    value={themeColor}
                                    onChange={handleThemeColorChange}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Stack>
            </Box>
        </Stack>
    );
};

export default Settings;

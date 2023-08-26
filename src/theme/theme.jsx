import {createTheme} from "@mui/material";

export function darkTheme() {
    return createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: '#6231ed',
                light: '#5b47ed',
                dark: '#3208a8',
                contrastText: '#fff',
            },
            background: {
                default: '#0a0123',
                paper: '#100238',
            },
            bgSidebar: '#1C0F42',
        }
    });
}

export function lightTheme() {
    return createTheme({
        palette: {
            primary: {
                main: '#6231ed',
                light: '#5b47ed',
                dark: '#3208a8',
                contrastText: '#fff',
            },
            background: {
                default: '#f6f6f6',
            },
            bgSidebar: '#fff',
        }
    });
}
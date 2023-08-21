import React, {useState} from "react";
import './styles/App.scss'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Home from "./pages/Home.jsx"
import {theme} from "./theme/theme.jsx";

import {createTheme, ThemeProvider} from "@mui/material";

function App() {
    const [mode, setMode] = useState("light")

    const darkTheme = createTheme({
        palette: {
            mode: mode
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <ThemeProvider theme={darkTheme}>
                <Home setMode={setMode} mode={mode} />
            </ThemeProvider>
        </ThemeProvider>
    )
}

export default App

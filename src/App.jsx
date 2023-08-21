import React, {useState} from "react";
import './styles/App.scss'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Home from "./pages/Home.jsx"
import {lightTheme, darkTheme} from "./theme/theme.jsx";

import {ThemeProvider} from "@mui/material";

function App() {
    const [mode, setMode] = useState("dark")

    const theme = mode === "light" ? darkTheme : lightTheme

    return (
        <ThemeProvider theme={theme}>
                <Home setMode={setMode} mode={mode} />
        </ThemeProvider>
    )
}

export default App

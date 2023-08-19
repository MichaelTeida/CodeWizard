import React from "react";
import './styles/App.scss'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Home from "./pages/Home.jsx"
import PrimarySearchAppBar from "./components/Header.jsx";
import {theme} from "./theme/theme.jsx";

import {ThemeProvider} from "@mui/material";

function App() {
    return (

            <ThemeProvider theme={theme}>
                <PrimarySearchAppBar/>
                <Home/>
            </ThemeProvider>
    )
}

export default App

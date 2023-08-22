import React, {useState} from "react";
import './styles/App.scss'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Home from "./pages/Home.jsx"
import {lightTheme, darkTheme} from "./theme/theme.jsx";

import {ThemeProvider} from "@mui/material";

import {Route, Router, Routes} from "react-router-dom";
import Instruction from "./pages/Instruction.jsx";
import History from "./pages/History.jsx";
import Logs from "./pages/Logs.jsx";
import Settings from "./pages/Settings.jsx";
import Header from "./components/Header.jsx";
import Box from "@mui/material/Box";

function App() {
    const [mode, setMode] = useState("dark")

    const theme = mode === "light" ? darkTheme() : lightTheme();

    return (
            <ThemeProvider theme={theme}>
                <Box bgcolor={"background.default"}
                     sx={{
                         minHeight: "100vh",
                     }}
                     color={"text.primary"}>
                <Header setMode={setMode} mode={mode} />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/instruction" element={<Instruction/>}/>
                    <Route path="/history" element={<History/>}/>
                    <Route path="/logs" element={<Logs/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>

                </Box>
            </ThemeProvider>
    )
}

export default App

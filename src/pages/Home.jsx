import Chat from "../components/Chat.jsx";
import {Box, Stack} from "@mui/material";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import React from "react";

function Home({setMode, mode}) {
    return (
        <Box bgcolor={"background.default"}
             sx={{
                     minHeight: "100vh",
             }}
             color={"text.primary"}
        >
            <Header setMode={setMode} mode={mode} />
            <Stack direction="row" justifyContent="space-between">
                <Sidebar/>
                <Chat/>
            </Stack>
        </Box>
    )
}

export default Home

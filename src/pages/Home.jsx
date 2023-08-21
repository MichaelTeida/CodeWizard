import Chat from "../components/Chat.jsx";
import {Box, Stack} from "@mui/material";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import React from "react";

function Home() {
    return (
        <Box>
            <Header/>
            <Stack direction="row" justifyContent="space-between">
                <Sidebar/>
                <Chat/>
            </Stack>
        </Box>
    )
}

export default Home

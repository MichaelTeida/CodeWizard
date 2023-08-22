import Chat from "../components/Chat.jsx";
import {Box, Stack} from "@mui/material";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import React from "react";

function Home({setMode, mode}) {
    return (
            <Stack direction="row" justifyContent="space-between">
                <Sidebar/>
                <Chat/>
            </Stack>
    )
}

export default Home

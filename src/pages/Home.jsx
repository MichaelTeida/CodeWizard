import Chat from "../components/Chat.jsx";
import {Stack} from "@mui/material";
import Sidebar from "../components/Sidebar.jsx";
import React from "react";

function Home() {
    return (
            <Stack direction="row" justifyContent="space-between">
                <Sidebar/>
                <Chat/>
            </Stack>
    )
}

export default Home

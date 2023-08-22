import React from 'react';
import {Box, Card, CardContent, Stack} from "@mui/material";
import Sidebar from "../components/Sidebar.jsx";

const Settings = () => {
    return (
        <Stack direction="row" justifyContent="space-between">
            <Sidebar/>
            <Box flex={8} p={3}>
                <Stack spacing={2}>
                    <Card>
                        <CardContent>
                        </CardContent>
                    </Card>
                </Stack>
            </Box>
        </Stack>
    );
};

export default Settings;
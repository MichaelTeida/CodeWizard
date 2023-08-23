import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import {Box, Card, CardContent, Stack} from "@mui/material";
import Sidebar from "../components/Sidebar.jsx";

import AutorenewIcon from '@mui/icons-material/Autorenew';
import SaveIcon from '@mui/icons-material/Save';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PestControlIcon from '@mui/icons-material/PestControl';

const Logs = () => {
    return (
        <Stack direction="row" justifyContent="space-between">
            <Sidebar/>
            <Box flex={8} p={3}>
                <Stack spacing={2}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Timeline
                            </Typography>
                            <Timeline position="alternate">
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{m: 'auto 0'}}
                                        align="right"
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        14:31
                                    </TimelineOppositeContent>
                                    <TimelineSeparator sx={{width: {xs: "25%"}}}>
                                        <TimelineConnector/>
                                        <TimelineDot>
                                            <PestControlIcon/>
                                        </TimelineDot>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent sx={{py: '12px', px: 2, width: {xs: "25%"}}}>
                                        <Typography variant="h6" component="span">
                                            Bug
                                        </Typography>
                                        <Typography>Wykryto: Typograhy is not defined
                                            (at Logs.jsx:47:42)</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{m: 'auto 0'}}
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        14:21
                                    </TimelineOppositeContent>
                                    <TimelineSeparator sx={{width: {xs: "25%"}}}>
                                        <TimelineConnector/>
                                        <TimelineDot color="primary">
                                            <ErrorOutlineIcon/>
                                        </TimelineDot>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent sx={{py: '12px', px: 2, width: {xs: "25%"}}}>
                                        <Typography variant="h6" component="span">
                                            Atak!
                                        </Typography>
                                        <Typography>Zablokowano: próba wstrzyknięcia XSS </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{m: 'auto 0'}}
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        14:12
                                    </TimelineOppositeContent>
                                    <TimelineSeparator sx={{width: {xs: "25%"}}}>
                                        <TimelineConnector/>
                                        <TimelineDot color="primary" variant="outlined">
                                            <SaveIcon/>
                                        </TimelineDot>
                                        <TimelineConnector sx={{bgcolor: 'secondary.main'}} />
                                    </TimelineSeparator>
                                    <TimelineContent sx={{py: '12px', px: 2, width: {xs: "25%"}}}>
                                        <Typography variant="h6" component="span">
                                            Brak pamięci
                                        </Typography>
                                        <Typography>Wyczerpano zasoby pamięci</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent
                                        sx={{m: 'auto 0'}}
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        13:58
                                    </TimelineOppositeContent>
                                    <TimelineSeparator sx={{width: {xs: "25%"}}}>
                                        <TimelineConnector sx={{bgcolor: 'secondary.main'}}/>
                                        <TimelineDot color="secondary">
                                            <AutorenewIcon/>
                                        </TimelineDot>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent sx={{py: '12px', px: 2, width: {xs: "25%"}}}>
                                        <Typography variant="h6" component="span">
                                            Ostrzeżenie
                                        </Typography>
                                        <Typography>Wykryto: wydłużony czas ładowania</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </CardContent>
                    </Card>
                </Stack>
            </Box>
        </Stack>
    );
};

export default Logs;
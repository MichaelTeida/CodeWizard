import React from 'react';
import Sidebar from "../components/Sidebar.jsx";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {Box, Card, CardContent, Divider, Stack, Typography} from "@mui/material";
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

const History = () => {
    return (
        <Stack direction="row" justifyContent="space-between">
            <Sidebar/>
            <Box flex={8} p={3} >
                <Stack spacing={2}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom >
                                Historia
                            </Typography>
                            <Divider sx={{mb: 2}}/>
                            <Timeline
                                sx={{
                                    [`& .${timelineOppositeContentClasses.root}`]: {
                                        flex: 0.1,
                                    },
                                }}
                            >
                                <TimelineItem>
                                    <TimelineOppositeContent color="textSecondary">
                                        14:28
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography>Naprawa kodu:</Typography>
                                        <div>
                                            <h2>Kod zepsuty:</h2>
                                            <code>
                                                {`function executeInjection(payload) {
                                                  const maliciousCode = payload;
                                                  execute(maliciousCode);
                                                }
                                                
                                                const attemptedInjection = inputFromUser;
                                                executeInjection(attemptedInjection);`}
                                            </code>

                                            <h2>Kod Naprawiony:</h2>
                                            <code>
                                                {`function executeInjection(payload) {
                                                  // Kod zabezpieczający przed nieautoryzowanym dostępem
                                                  if (isAuthorized()) {
                                                    execute(payload);
                                                  } else {
                                                    console.log("Brak autoryzacji!");
                                                  }
                                                }

                                                const attemptedInjection = inputFromUser;
                                                executeInjection(attemptedInjection);`}
                                            </code>
                                        </div>
                                        <br/>
                                        <br/>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent color="textSecondary">
                                        13:41
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography>Naprawa kodu:</Typography>
                                        <div>
                                            <h2>Kod zepsuty:</h2>
                                            <code>
                                                {`// Próba wstrzyknięcia SQL
                                                    const userInput = getRequestParameter("input");
                                                    const query = "SELECT * FROM users WHERE username = '" + userInput + "';";
                                                    executeSQL(query);`}
                                            </code>

                                            <h2>Kod Naprawiony:</h2>
                                            <Typography variant="code">
                                                {`// Zabezpieczony kod SQL
                                                    const userInput = getRequestParameter("input");
                                                    const query = "SELECT * FROM users WHERE username = ?;";
                                                    executeSQL(query, [userInput]);`}
                                            </Typography>
                                        </div>
                                        <br/>
                                        <br/>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent color="textSecondary">
                                        11:34
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography>Naprawa kodu:</Typography>
                                        <div>
                                            <h2>Kod zepsuty:</h2>
                                            <Typography variant="code">
                                                {`// Niebezpieczne użycie funkcji system
                                                    String command = getUserInput();
                                                    String fullCommand = "rm " + command;
                                                    Runtime.getRuntime().exec(fullCommand);`}
                                            </Typography>

                                            <h2>Kod Naprawiony:</h2>
                                            <Typography variant="code">
                                                {`// Bezpieczne wykonywanie poleceń systemowych
                                                    String command = getUserInput();
                                                    String[] allowedCommands = {"ls", "mkdir", "rm"}; // Dopuszczalne komendy
                                                    if (Arrays.asList(allowedCommands).contains(command)) {
                                                        ProcessBuilder processBuilder = new ProcessBuilder(command);
                                                        processBuilder.start();
                                                    } else {
                                                        System.out.println("Niedozwolone polecenie!");
                                                    }`}
                                            </Typography>
                                        </div>
                                        <br/>
                                        <br/>
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

export default History;
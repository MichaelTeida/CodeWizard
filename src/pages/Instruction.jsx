import React from 'react';
import {Box, Card, CardContent, Divider, List, ListItem, ListItemIcon, Stack, Typography} from "@mui/material";
import Sidebar from "../components/Sidebar.jsx";
import {Circle} from "@mui/icons-material";

const Instruction = () => {
    return (
        <Stack direction="row" justifyContent="space-between">
            <Sidebar/>
            <Box flex={8} p={3}>
                <Stack spacing={2}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Instrukcja użytkownika CodeWizard
                            </Typography>

                            <Divider sx={{mb: 2}}/>
                            <Typography>
                                Jesteś teraz w interaktywnym środowisku, które pozwala mi pomagać Ci w pracy
                                z kodem. Wybierz jedną z opcji poniżej:
                            </Typography>
                            <List>
                                <ListItem><ListItemIcon><Circle/></ListItemIcon>Wybierz jedną z trzech dostępnych opcji:
                                    "Oceń kod", "Skróć kod" lub "Napraw kod".</ListItem>
                                <ListItem><ListItemIcon><Circle/></ListItemIcon>Wprowadź kod programu w pole tekstowe
                                    poniżej opcji.</ListItem>
                                <ListItem><ListItemIcon><Circle/></ListItemIcon>Upewnij się, że wprowadzony kod jest
                                    kompletny i poprawny, aby uzyskać dokładne wyniki.</ListItem>
                                <ListItem><ListItemIcon><Circle/></ListItemIcon>Po wprowadzeniu kodu, kliknij przycisk
                                    "Wygeneruj" aby uruchomić wybraną akcję.</ListItem>
                                <ListItem><ListItemIcon><Circle/></ListItemIcon>Wprowadź kod programu w pole tekstowe
                                    poniżej opcji.</ListItem>
                                <ListItem><ListItemIcon><Circle/></ListItemIcon>W zależności od wybranej opcji:
                                    <List>
                                        <ListItem>"Oceń kod" oceni jakość i składnię kodu, dostarczając ewentualne
                                            sugestie poprawek.</ListItem>
                                        <ListItem>"Skróć kod" automatycznie zoptymalizuje i uprości kod, eliminując
                                            zbędne elementy.</ListItem>
                                        <ListItem>"Napraw kod" wskaże i zaproponuje poprawki dla wykrytych błędów w
                                            kodzie.</ListItem>
                                    </List>
                                </ListItem>
                                <ListItem><ListItemIcon><Circle/></ListItemIcon>Maksymalna długość odpowiedzi to 600
                                    znaków. Bądź zwięzły i precyzyjny.</ListItem>
                            </List>

                        </CardContent>
                    </Card>
                </Stack>
            </Box>
        </Stack>
    );
};

export default Instruction;
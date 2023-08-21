import {useForm} from "react-hook-form";
import OpenAi from "../lib/open-ai.jsx";
import React, {useState} from "react";
import {
    Stack,
    Button,
    CardActions,
    Card,
    CardContent,
    IconButton,
    Typography,
    Box,
    TextField, ToggleButtonGroup, ToggleButton, Checkbox
} from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import {FavoriteBorder} from "@mui/icons-material";

function Chat() {
    const [prompt, setPrompt] = useState('')
    const [action, setAction] = useState('')

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setPrompt(data.prompt)
    };

    const handleChange = (event, newEl) => {
        setAction(newEl)
    };


    return (
        <>
            <Box flex={8} p={3}>
                <Stack spacing={2}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={2} width={{p: 8}}>
                            <ToggleButtonGroup
                                color="primary"
                                exclusive
                                aria-label="Platform"
                                value={action}
                                onChange={handleChange}
                                fullWidth
                            >
                                <ToggleButton spacing={2} value="rate">Oceń kod</ToggleButton>
                                <ToggleButton value="android">Skróc kod</ToggleButton>
                                <ToggleButton value="repair">Napraw kod</ToggleButton>
                            </ToggleButtonGroup>
                            <TextField
                                variant="outlined"
                                multiline
                                row={3}
                                maxRows={10}
                                type="text"
                                placeholder="Prompt"
                                {...register("prompt", {
                                    required: true,
                                    maxLength: 200,
                                })}
                            />
                            {/*<input type="submit" value="Wygeneruj" color="primary" variant="contained"/>*/}
                            <Button type="submit" color="primary" variant="contained" endIcon={<SendIcon/>}>
                                Wygeneruj
                            </Button>
                            {errors.prompt && (
                                <div>
                        <span>
                            {errors.prompt.type === "required" && "Wymagane pole: Prompt"}
                            {errors.prompt.type === "maxLength" && "Maksymalna liczba słów: 200"}
                        </span>
                                </div>
                            )}
                        </Stack>
                    </form>

                    {prompt &&
                        <Card>
                            <CardContent>
                                <Typography variant="h6" fontWeight={600}>Kod:</Typography>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography component={'span'} variant="body1">
                                            <OpenAi prompt={prompt}/>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </CardContent>
                            <CardContent>
                                <Typography variant="h6" fontWeight={600}>Komentarz:</Typography>
                                <Card variant="outlined">
                                    <CardContent>
                                <Typography component={'span'} variant="body1">
                                    <OpenAi prompt={prompt}/>
                                </Typography>
                            </CardContent>
                        </Card>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Checkbox icon={<FavoriteBorder/>}
                                          checkedIcon={<FavoriteIcon sx={{color: "#FF0000"}}/>}/>
                                <IconButton aria-label="share">
                                    <ShareIcon/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    }
                </Stack>
            </Box>
        </>
    );
}

export default Chat;


// import {useForm} from "react-hook-form";
// import OpenAi from "../lib/open-ai.jsx";
// import React, {useState} from "react";
//
// function Chat() {
//     const [prompt, setPrompt] = useState('')
//
//     const {
//         register,
//         handleSubmit,
//         formState: {errors},
//     } = useForm();
//
//     const onSubmit = (data) => {
//         console.log(data);
//         setPrompt(data.prompt)
//     };
//
//     return (
//         <>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <p>Prompt:</p>
//                 <input
//                     type="text"
//                     placeholder="Prompt"
//                     {...register("prompt", {
//                         required: true,
//                         maxLength: 200,
//                     })}
//                 />
//                 <input type="submit" value="Wygeneruj"/>
//                 {errors.prompt && (
//                     <div>
//                         <span>
//                             {errors.prompt.type === "required" && "Wymagane pole: Prompt"}
//                             {errors.prompt.type === "maxLength" && "Maksymalna liczba słów: 200"}
//                         </span>
//                     </div>
//                 )}
//             </form>
//             <div>
//                 {prompt &&
//                     (<OpenAi prompt={prompt}/>)
//                 }
//             </div>
//         </>
//     );
// }
//
// export default Chat;
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
    TextField
} from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Chat() {
    const [prompt, setPrompt] = useState('')

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setPrompt(data.prompt)
    };

    return (
        <>
            <Box flex={8} p={3}>
                <Stack spacing={2}>
                <Button variant="contained" color="primary">Test</Button>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={2} width={{p: 8}}>
                        <p>Prompt:</p>
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
                        <input type="submit" value="Wygeneruj" color="primary" variant="contained"/>
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
                        <Typography variant="body2" color="text.secondary">
                                <OpenAi prompt={prompt}/>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon/>
                        </IconButton>
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
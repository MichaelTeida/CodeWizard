import {useForm} from "react-hook-form";
import OpenAi from "../lib/open-ai.jsx";
import React, {useState} from "react";
import {Stack, Button} from "@mui/material";

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
            <Button variant="contained" color="primary">Test</Button>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2} width={{p: 10}}>
                    <p>Prompt:</p>
                    <input
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
            <div>
                {prompt &&
                    (<OpenAi prompt={prompt}/>)
                }
            </div>
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
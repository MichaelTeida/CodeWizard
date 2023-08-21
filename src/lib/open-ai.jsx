import React, { useEffect, useState} from 'react';
import { OpenAIApi, Configuration } from 'openai';

const OpenAi = ({prompt}) => {
    const [output, setOutput] = useState('')

    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    });

    configuration.baseOptions.headers = {
        Authorization: "Bearer " + import.meta.env.VITE_OPENAI_API_KEY,
    };

    const openai = new OpenAIApi(configuration); // delete "Refused to set unsafe header "User-Agent""

    const params = {
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "user",
                content: prompt
            },
        ],
        temperature: 0,
        max_tokens: 300,
        stream: false,
        n: 1, //liczba odpowiedzi
    }

    useEffect(() => {
        const generateOutput = async () => {
            try {
                const response = await openai.createChatCompletion(params);
                setOutput(response.data.choices[0].message.content)
            } catch (error) {
                console.error(error)
                return "Sorry, there was an error processing your request.";
            }
        }
        generateOutput()
    }, [prompt]);


    return (
        <>
            {output}
        </>
    );
};

export default OpenAi;
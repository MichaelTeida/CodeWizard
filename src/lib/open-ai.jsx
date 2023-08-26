import React, {useEffect, useState} from 'react';
import {OpenAIApi, Configuration} from 'openai';

const OpenAi = ({prompt, action}) => {
    const [output, setOutput] = useState('')

    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    });

    configuration.baseOptions.headers = {
        Authorization: "Bearer " + import.meta.env.VITE_OPENAI_API_KEY,
    };

    const openai = new OpenAIApi(configuration); // delete "Refused to set unsafe header "User-Agent""

    let description = null

    if (action === "rate") {
        description = `Użytkownik wybrał opcję oceniania kodu. Oceń podany przez niego kod`
    } else if (action === "shorten") {
        description = "Użytkownik wybrał opcję skracania kodu. Mocno skróć podany przez niego kod"
    } else if (action === "repair") {
        description = "Użytkownik wybrał opcję naprawiania kodu. Napraw podany przez niego kod"
    } else {
        description = "Użytkownik nie wybrał żadnej opcji"
    }

    const params = {
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: `Jesteś asystentem CodeWizard, który w zależności od zaznaczonej opcji użytkownika: ocenia, skraca, naprawia kod`
            },
            {
                role: "system",
                content: `Do działania potrzebny Ci jest kod programowania oraz zaznaczona jedna z opcji. Bez tego nie możesz funkcjonować. Twoja odpowiedź to maksymalnie 2000 znaków`
            },
            {
                role: "user",
                content: prompt
            },
            {
                role: "system",
                content: description
            },
        ],
        temperature: 0,
        max_tokens: 2000,
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
        setTimeout(generateOutput, 2500);
    }, [prompt]);


    return (
        <>
            {output}
        </>
    );
};

export default OpenAi;
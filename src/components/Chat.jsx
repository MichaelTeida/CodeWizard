import {useForm} from "react-hook-form";

function Chat() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>Prompt:</p>
                <input
                    type="text"
                    placeholder="Prompt"
                    {...register("prompt", {
                        required: true,
                        maxLength: 200,
                    })}
                />
                <input type="submit" value="Wygeneruj"/>
                {errors.prompt && (
                    <div>
                        <span>
                            {errors.prompt.type === "required" && "Wymagane pole: Prompt"}
                            {errors.prompt.type === "maxLength" && "Maksymalna liczba słów: 200"}
                        </span>
                    </div>
                )}
            </form>
                <div>
                    <p>Output: </p>
                </div>
        </>
    );
}

export default Chat;

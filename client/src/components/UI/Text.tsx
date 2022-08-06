import React, {KeyboardEvent} from "react";

type TextInputParams = {
    id: string,
    type: string,
    placeholder: string,
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void
};

export const Text: React.FC<TextInputParams> = (props) => {
    return <input {...props} />
}
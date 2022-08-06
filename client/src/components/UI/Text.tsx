import React, {ChangeEvent, KeyboardEvent} from "react";

type TextInputParams = {
    id?: string,
    type?: string,
    placeholder?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    defaultValue? : string|number
};

export const Text: React.FC<TextInputParams> = (props) => {
    return <input {...props} />
}
import React, {KeyboardEvent} from "react";

type TextInputParams = {
    id?: string,
    placeholder?: string,
    defaultValue? : string|number,
    onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void
};

export const TextArea: React.FC<TextInputParams> = (props) => {
    return <textarea {...props}/>
}
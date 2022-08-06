import React, {ChangeEvent, KeyboardEvent} from "react";

type TextInputParams = {
    id?: string,
    placeholder?: string,
    defaultValue? : string|number,
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
};

export const TextArea: React.FC<TextInputParams> = (props) => {
    return <textarea {...props}/>
}
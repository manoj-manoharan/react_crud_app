import React, {FormEvent, KeyboardEvent, useState} from "react";
import {Text} from '../components/UI/Text';

export const Create: React.FC = () => {

    const userId = 1;

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    return <>
        <form onSubmit={validateAndCreatePost}>

            <Text id="title" type="text" placeholder="Title" onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                setTitle((e.target as HTMLInputElement).value)
            }}/>

            <textarea id="body" placeholder="Body" onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) => {
                setBody((e.target as HTMLTextAreaElement).value)
            }}/>

            <button type="submit">Create Post</button>

        </form>
    </>;

    function validateAndCreatePost(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log({userId, title, body})
    }
};

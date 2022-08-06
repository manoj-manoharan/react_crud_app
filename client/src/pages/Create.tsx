import React, {FormEvent, KeyboardEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Text} from '../components/UI/Text';
import {Api} from "../lib/api";

export const Create: React.FC = (props) => {

    const userId = 1;

    const navigate = useNavigate()
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

        Api
            .posts
            .create({userId, title, body})
            .then(isPostCreated => {
                if (isPostCreated) {
                    alert("Post created successfully!");
                    navigate('/');
                    return;
                }
                throw new Error("Post not created.")
            })
            .catch(err => alert("Error, Post not created."));

    }
};

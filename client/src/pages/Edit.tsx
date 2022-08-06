import React, {ChangeEvent, FormEvent, KeyboardEvent, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Text} from '../components/UI/Text';
import {Api} from "../lib/api";
import {TextArea} from "../components/UI/TextArea";

export const Edit: React.FC = () => {

    const {id} = useParams();
    const navigate = useNavigate()
    const [userId, setUserId] = useState(1);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    useEffect(() => {

        if (!id) {
            return;
        }

        Api.posts.get(+id).then(post => {
            if (post && post.id > 0) {
                setUserId(post.userId);
                setTitle(post.title);
                setBody(post.body);
                return;
            }
            throw new Error("Post not valid");
        }).catch(err => {
            alert("Error, Post not available. Redirecting to Home")
            navigate('/');
            return;
        })
    }, [id])

    return <>
        <form onSubmit={validateAndUpdatePost}>

            <Text id="title"
                  type="text"
                  placeholder="Title"
                  defaultValue={title}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setTitle((e.target as HTMLInputElement).value)
                  }}
            />

            <TextArea
                id="body"
                placeholder="Body"
                defaultValue={body}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                    setBody((e.target as HTMLTextAreaElement).value)
                }}
            />

            <button type="submit">Update Post</button>

        </form>
    </>;

    function validateAndUpdatePost(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!id) {
            alert("Id not valid for updating post");
            return;
        }

        Api
            .posts
            .update(+id, {userId, title, body})
            .then(isPostUpdated => {
                if (isPostUpdated) {
                    alert("Post updated successfully!");
                    navigate('/');
                    return;
                }
                throw new Error("Post not updated.");
            })
            .catch(err => alert("Error, Post not updated."));

    }
};

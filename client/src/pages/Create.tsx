import {FormEvent, useState, FC} from "react"
import {useNavigate} from "react-router-dom";
import {Api} from "../lib/api";
import {PostForm} from "../components/UX/Post/PostForm";

export const Create: FC = () => {


    const navigate = useNavigate()
    const [isPostValid, setIsPostValid] = useState(false);
    const [userId] = useState(1);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    return <>
        <PostForm
            action="create"
            handler={validateAndCreatePost}
            title={title}
            body={body}
            setTitle={setTitle}
            setBody={setBody}
            setIsPostValid={setIsPostValid}
        />
    </>;

    function validateAndCreatePost(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!isPostValid) {
            return;
        }

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
            .catch(err => {
                console.log({err})
                alert("Error, Post not created.")
            });

    }
};

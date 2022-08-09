import {ChangeEvent, FormEvent, KeyboardEvent, useState, FC} from "react"
import {useNavigate} from "react-router-dom";
import {Text} from '../components/UI/Text';
import {Api} from "../lib/api";
import {TextArea} from "../components/UI/TextArea";
import {Button} from "../components/UI/Button";
import {text} from "stream/consumers";
import {PostForm} from "../components/UX/Post/PostForm";

export const Create: FC = (props) => {


    const navigate = useNavigate()
    const [isPostValid, setIsPostValid] = useState(false);
    const [userId, setUserId] = useState(1);
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
            .catch(err => alert("Error, Post not created."));

    }
};

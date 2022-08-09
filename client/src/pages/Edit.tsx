import {ChangeEvent, FormEvent, KeyboardEvent, useEffect, useState, FC} from "react"
import {useNavigate, useParams} from "react-router-dom";
import {Text} from '../components/UI/Text';
import {Api} from "../lib/api";
import {TextArea} from "../components/UI/TextArea";
import {Button} from "../components/UI/Button";
import {PostForm} from "../components/UX/Post/PostForm";

export const Edit: FC = () => {

    const {id} = useParams();
    const [isPostValid, setIsPostValid] = useState(false);
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
        <PostForm
            action="update"
            handler={validateAndUpdatePost}
            title={title}
            body={body}
            setTitle={setTitle}
            setBody={setBody}
            setIsPostValid={setIsPostValid}
        />
    </>;

    function validateAndUpdatePost(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!id) {
            alert("Id not valid for updating post");
            return;
        }

        if (!isPostValid) {
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

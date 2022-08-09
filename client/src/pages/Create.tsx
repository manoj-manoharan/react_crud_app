import {ChangeEvent, FormEvent, KeyboardEvent, useState, FC} from "react"
import {useNavigate} from "react-router-dom";
import {Text} from '../components/UI/Text';
import {Api} from "../lib/api";
import {TextArea} from "../components/UI/TextArea";
import {Button} from "../components/UI/Button";
import {text} from "stream/consumers";

export const Create: FC = (props) => {

    const titleLengthAllowed = 255;
    const bodyLengthAllowed = 5000;

    const navigate = useNavigate()
    const [userId, setUserId] = useState(1);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    return <>
        <form className="form-container" onSubmit={validateAndCreatePost}>

            <div className="form-item">
                <span>
                    {
                        title.length <= 0 &&
                        <label className="text-red-700 text-xs">*Title is required</label>
                    }
                    {
                        title.length > 0
                        && <label
                            className={(titleLengthAllowed - title.length) < 0 ? "text-red-500" : ""}
                        >Character count remaining : {titleLengthAllowed - title.length}</label>
                    }
                </span>
                <Text className="form-input" id="title" type="text" placeholder="Title" defaultValue={title}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          setTitle((e.target as HTMLInputElement).value)
                      }}/>
            </div>
            <div className="form-item">
                 <span>
                    {
                        body.length <= 0 &&
                        <label className="text-red-700 text-xs">*Body is required</label>
                    }
                     {
                         body.length > 0
                         && <label
                             className={(bodyLengthAllowed - body.length) < 0 ? "text-red-500" : ""}
                         >Character count remaining : {bodyLengthAllowed - body.length}</label>
                     }
                </span>
                <TextArea className="form-textarea" id="body" placeholder="Body"
                          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                              setBody((e.target as HTMLTextAreaElement).value)
                          }}/>
            </div>

            <Button buttonStyle="info" type="submit" disabled={!isPostValid()}>Create Post</Button>

        </form>
    </>;

    function validateAndCreatePost(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!isPostValid()) {
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

    function isPostValid() {
        return (
            (title.length > 0 && title.length <= titleLengthAllowed)
            && (body.length > 0 && body.length <= bodyLengthAllowed)
        )
    }
};

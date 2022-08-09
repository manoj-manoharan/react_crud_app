import {Text} from "../../UI/Text";
import {ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useEffect} from "react";
import {TextArea} from "../../UI/TextArea";
import {Button} from "../../UI/Button";
import {capitalizeFirstLetter} from "../../../lib/util";

export const PostForm: FC<{
    action: "create" | "update"
    handler: (event: FormEvent<HTMLFormElement>) => void,
    title: string,
    body: string,
    setTitle: Dispatch<SetStateAction<string>>,
    setBody: Dispatch<SetStateAction<string>>,
    setIsPostValid: Dispatch<SetStateAction<boolean>>,
}> = ({action, handler, title, body, setTitle, setBody, setIsPostValid}) => {

    const titleLengthAllowed = 255;
    const bodyLengthAllowed = 5000;

    useEffect(() => {
        setIsPostValid(isPostValid());
    }, [title, body, setIsPostValid, isPostValid])

    return <>
        <form className="form-container" onSubmit={handler}>

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
                <TextArea className="form-textarea" id="body" placeholder="Body" defaultValue={body}
                          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                              setBody((e.target as HTMLTextAreaElement).value)
                          }}/>
            </div>

            <Button buttonStyle="info" type="submit"
                    disabled={!isPostValid()}>{capitalizeFirstLetter(action)} Post</Button>

        </form>
    </>

    function isPostValid() {
        return (
            (title.length > 0 && title.length <= titleLengthAllowed)
            && (body.length > 0 && body.length <= bodyLengthAllowed)
        )
    }
}
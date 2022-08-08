import  {ChangeEvent, KeyboardEvent,FC} from "react"

type TextInputParams = {
    id?: string,
    placeholder?: string,
    defaultValue? : string|number,
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
};

export const TextArea: FC<TextInputParams> = (props) => {
    return <textarea {...props}/>
}
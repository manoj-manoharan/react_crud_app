import  {ChangeEvent, KeyboardEvent,FC} from "react"

type TextInputParams = {
    id?: string,
    type?: string,
    placeholder?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    defaultValue? : string|number,
    className? : string
};

export const Text: FC<TextInputParams> = (props) => {
    return <input {...props} />
}
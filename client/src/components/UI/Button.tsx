import {PropsWithChildren, FC} from "react"

export const Button: FC<PropsWithChildren<{
    onClick?: () => void,
    style?: object,
    buttonStyle?: 'default' | 'info' | 'warning',
    className?: string,
    type?: "submit" | "button",
    disabled?: boolean
}>> = ({type, style, onClick, children, buttonStyle, className, disabled}) => {
    return <button
        type={type ? type : "button"}
        style={style}
        className={`${className} ${styleDecider(buttonStyle)} ${getDisabledClasses(disabled)}`}
        onClick={onClick}>
        {children}
    </button>;
};

const getDisabledClasses = (disabled?: boolean): string => {
    let classes = "";

    if (disabled) {
        classes = "opacity-50 cursor-not-allowed"
    }
    return classes;
}

const styleDecider = (buttonStyle?: 'default' | 'info' | 'warning') => {

    if (buttonStyle === "warning") {
        return "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded";
    }

    if (buttonStyle === "info") {
        return "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
    }

    return "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded";
}

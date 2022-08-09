import {PropsWithChildren, FC} from "react"

export const Button: FC<PropsWithChildren<{
    onClick?: () => void,
    style?: object,
    buttonStyle?: 'default' | 'info' | 'warning'
}>> = ({style, onClick, children, buttonStyle}) => {
    return <button style={style}
                   className={styleDecider(buttonStyle)}
                   onClick={onClick}>
        {children}
    </button>;
};

const styleDecider = (buttonStyle?: 'default' | 'info' | 'warning') => {

    if (buttonStyle === "warning") {
        return "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded";
    }

    if (buttonStyle === "info") {
        return "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
    }

    return "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded";
}

import {PropsWithChildren, FC} from "react"

export const Button: FC<PropsWithChildren<{ onClick?: () => void, style? : object }>> = ({
                                                                                            style,
                                                                                           onClick,
                                                                                           children,
                                                                                       }) => {
    return <button style={style}
                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                   onClick={onClick}>{children}</button>;
};

import  {PropsWithChildren,FC} from "react"

export const Button: FC<PropsWithChildren<{ onClick?: () => void }>> = ({onClick, children}) => {
    return <button className="m4" onClick={onClick}>{children}</button>;
};

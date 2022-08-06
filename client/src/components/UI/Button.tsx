import React, {PropsWithChildren} from "react";

export const Button: React.FC<PropsWithChildren<{ onClick?: () => void }>> = ({onClick, children}) => {
    return <button onClick={onClick}>{children}</button>;
};

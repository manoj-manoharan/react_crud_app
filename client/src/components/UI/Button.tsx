import React, {PropsWithChildren} from "react";

export const Button: React.FC<PropsWithChildren<{ onClick?: () => void }>> = ({onClick, children}) => {
    return <button className="m4" onClick={onClick}>{children}</button>;
};

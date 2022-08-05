import React, { PropsWithChildren } from "react";

export const Button: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <button>{children}</button>;
};

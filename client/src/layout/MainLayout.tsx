import {FC, PropsWithChildren} from "react";

export const MainLayout : FC<PropsWithChildren> = ({children}) => {
    return <main>
        <div className="container">
            <div className="content">
                {children}
            </div>
        </div>
    </main>
}
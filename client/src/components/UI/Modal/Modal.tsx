import  {PropsWithChildren, ReactElement,FC} from "react"

export const Modal: FC<PropsWithChildren<{
    canShowModal?: boolean,
    header?: ReactElement,
    footer?: ReactElement
}>> = ({children, canShowModal = false, header = <></>, footer = <></>}) => {
    return (
        <>
            {canShowModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                {header}
                                {/*body*/}
                                {children}
                                {/*footer*/}
                                {footer}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
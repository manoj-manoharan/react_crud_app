import {PropsWithChildren, useState, FC, useEffect} from "react";

export const LoadingModal: FC<PropsWithChildren<{ toggleModal?: boolean }>>
    = ({toggleModal = false, children}) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(toggleModal);
    }, [toggleModal])

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
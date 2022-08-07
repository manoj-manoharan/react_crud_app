import {FC} from "react";
import {Modal} from "./Modal";

export const LoadingModal: FC<{ canShowModal?: boolean }>
    = ({canShowModal = false}) => {
    return <>
        <Modal canShowModal={canShowModal}><p className="m-5">Loading...</p></Modal>
    </>
}
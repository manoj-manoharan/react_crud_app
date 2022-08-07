import {Button} from "../../UI/Button";
import React from "react";
import {PostType} from "../../../types";
import {LoadingModal} from "../../UI/Modal/LoadingModal";

export const ViewPost : React.FC<{postId : PostType['id']}> = ({postId}) => {



    return <Button onClick={viewPostHandler}>View</Button>

    function viewPostHandler() {
        // todo : on click view, show a loading modal popup

        // todo : on delete, set tick icon and tell it's deleted in model
        //  remove item from array
        //  close modal
    }
}
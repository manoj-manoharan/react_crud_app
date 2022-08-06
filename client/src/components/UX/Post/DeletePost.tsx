import React, {Dispatch, SetStateAction} from "react";
import {PostType} from "../../../types";
import {Button} from "../../UI/Button";

type DeletePostParams = { postId: PostType['id'], setPosts: Dispatch<SetStateAction<PostType[]>> };

export const DeletePost: React.FC<DeletePostParams> = ({postId, setPosts}) => {

    return <Button onClick={deletePostHandler}>Delete</Button>

    // todo : on click delete
    //  ask if confirm to delete
    //  if yes, how a loading modal popup
    //  call delete api
    //  on delete, set tick icon and tell it's deleted in model
    //  remove item from array
    //  close modal
    //  if not deleted then show wrong icon in modal and show ok button to close

    function deletePostHandler() {

    }
}
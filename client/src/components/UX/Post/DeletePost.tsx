import  {Dispatch, SetStateAction, useState,FC} from "react"
import {PostType} from "../../../types";
import {Button} from "../../UI/Button";
import {LoadingModal} from "../../UI/Modal/LoadingModal";
import {Api} from "../../../lib/api";

type DeletePostParams = { postId: PostType['id'], setPosts: Dispatch<SetStateAction<PostType[]>> };

export const DeletePost: FC<DeletePostParams> = ({postId, setPosts}) => {

    const [loading, setLoading] = useState<boolean>(false);

    return <>
        <LoadingModal canShowModal={loading}/>
        <Button buttonStyle="warning" onClick={deletePostHandler}>Delete</Button>
    </>

    function deletePostHandler() {
        // on click delete
        //  ask if confirm to delete
        if (window.confirm('Are you sure you want to delete?')) {
            //  if yes, how a loading modal popup
            setLoading(true);
            //  call delete api
            Api.posts.delete(postId)
                .then(response => {
                    // set loading false
                    setLoading(false);
                    return response;
                })
                .then(isDeleted => {
                    if (isDeleted) {
                        // on delete remove item from array
                        setPosts(prevState => {
                            return prevState.filter(item => {
                                if (+item.id !== +postId) {
                                    return item;
                                }
                            })
                        });
                        // alert user that post is deleted
                        alert("Deleted post.");
                    } else {
                        alert("Post not deleted");
                    }
                })
                .catch(err => {
                    alert("Error deleting post.");
                });
        }
    }
}
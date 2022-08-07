import {Button} from "../../UI/Button";
import React, {useState} from "react";
import {PostType} from "../../../types";
import {LoadingModal} from "../../UI/Modal/LoadingModal";
import {Api} from "../../../lib/api";
import {set} from "husky";
import {Modal} from "../../UI/Modal/Modal";

export const ViewPost: React.FC<{ postId: PostType['id'] }> = ({postId}) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [post, setPost] = useState<PostType | null>(null);

    return <>
        <LoadingModal canShowModal={loading}/>
        {post &&
            <Modal
                canShowModal={Object.keys(post).length > 0}
                footer={<Button onClick={() => {
                    setPost(null)
                }}>Close</Button>}
            >
                <div className="m-4">
                    UserId : {post.id}<br/>
                    Title : {post.title}<br/>
                    Body : {post.body}<br/>
                    <hr />
                </div>
            </Modal>
        }
        <Button onClick={() => viewPostHandler(postId)}>View</Button>
    </>

    function viewPostHandler(postId: number) {
        // todo : on click view, fetch post and set post in modal popup
        setLoading(true);

        Api.posts
            .get(postId)
            .then(response => {
                setLoading(false);
                return response;
            })
            .then(post => {
                if (post?.id && +post.id > 0) {
                    setPost(post);
                } else {
                    alert("Post not found.")
                }
            })
            .catch(err => {
                console.log(err);
                alert("Error fetching post.")
            })
    }
}
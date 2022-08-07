import React, {useState} from "react";
import {Button} from "../components/UI/Button";
import {Link} from "react-router-dom";
import {usePostsFetch} from "../hooks/usePostsFetch";
import {ViewPost} from "../components/UX/Post/ViewPost";
import {DeletePost} from "../components/UX/Post/DeletePost";
import {Modal} from "../components/UI/Modal";
import {LoadingModal} from "../components/UI/LoadingModal";

export const Home: React.FC = () => {

    const {loading, posts, setPosts} = usePostsFetch();
    const [toggleModal, setToggleModal] = useState(false);

    return (
        <>
            <LoadingModal toggleModal={toggleModal}>Loading...</LoadingModal>
            <button onClick={e => setToggleModal(!toggleModal)}>Show modal</button>
            <Button>
                <Link to="/posts/create">Create</Link>
            </Button>
            {loading && <p>Loading...</p>}
            {!loading && posts.map((post) => {
                return (
                    <p key={post.id}>
                        {post.title}
                        &nbsp;
                        <ViewPost postId={post.id}/>
                        &nbsp;
                        <Link to={`/posts/edit/${post.id}`}>Edit</Link>
                        &nbsp;
                        <DeletePost postId={post.id} setPosts={setPosts}/>
                    </p>
                );
            })}
        </>
    );
};

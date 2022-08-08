import  {useState,FC} from "react"
import {Button} from "../components/UI/Button";
import {Link} from "react-router-dom";
import {usePostsFetch} from "../hooks/usePostsFetch";
import {ViewPost} from "../components/UX/Post/ViewPost";
import {DeletePost} from "../components/UX/Post/DeletePost";
import {ExampleModal} from "../components/UI/Modal/ExampleModal";
import {LoadingModal} from "../components/UI/Modal/LoadingModal";

export const Home: FC = () => {

    const {loading, posts, setPosts} = usePostsFetch();

    return (
        <>
            <Button>
                <Link to="/posts/create">Create</Link>
            </Button>
            <LoadingModal canShowModal={loading} />
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

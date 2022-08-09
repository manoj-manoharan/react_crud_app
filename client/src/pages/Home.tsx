import {useState, FC} from "react"
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
            <div className="flex-block">
                <Button buttonStyle="info" style={{width : "99%"}}>
                    <Link to="/posts/create">Create New Post</Link>
                </Button>
            </div>
            <LoadingModal canShowModal={loading}/>
            <div className="post-list">
                {!loading && posts.map((post) => {
                    return (
                        <div className="post-item" key={post.id}>
                            <span className="title">{post.title}</span>
                            <span className="view"><ViewPost postId={post.id}/></span>
                            <span className="edit"><Link to={`/posts/edit/${post.id}`}><Button
                                buttonStyle="info">Edit</Button></Link></span>
                            <span className="delete"><DeletePost postId={post.id} setPosts={setPosts}/></span>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

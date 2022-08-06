import React, {useEffect, useState} from "react";
import type {PostType} from "../types";
import {Button} from "../components/Button";
import {Link} from "react-router-dom";
import {Api} from "../lib/api";

export const Home: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        Api.posts.list().then(response => {
            if (Array.isArray(response.data)) {
                setPosts(response.data);
                setLoading(false);
            }
        })
    }, []);

    return (
        <>
            <Button>
                <Link to="/posts/create">Create</Link>
            </Button>
            {loading && <p>Loading...</p>}
            {!loading && posts.map((post) => {
                return (
                    <p>
                        {post.title}
                        &nbsp;
                        <Button>Delete</Button>
                        &nbsp;
                        <Link to={`/posts/edit/${post.id}`}>Edit</Link>
                        &nbsp;
                        <Button>Delete</Button>
                    </p>
                );
            })}
        </>
    );
};

import React, {useEffect, useState} from "react";
import type {PostType} from "../types";
import {Button} from "../components/Button";
import {Link} from "react-router-dom";
import {Api} from "../lib/api";

export const Home: React.FC = () => {
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        Api.posts.list().then(response => {
            if (Array.isArray(response.data)) {
                setPosts(response.data);
            }
        })
    }, []);

    return (
        <>
            <Button>
                <Link to="/posts/create">Create</Link>
            </Button>
            {posts.length > 0 && posts.map((post) => {
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

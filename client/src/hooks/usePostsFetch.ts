import {Dispatch, SetStateAction, useEffect, useState, FC} from "react"
import {PostType} from "../types";
import {Api} from "../lib/api";

export const usePostsFetch = (): {
    loading: boolean,
    posts: PostType[],
    setPosts: Dispatch<SetStateAction<PostType[]>>
} => {

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        Api.posts.list().then(response => {
            if (Array.isArray(response.data)) {
                setPosts(response.data);
                setLoading(false);
            }
        })

        return () => {
            setPosts([]);
        }
    }, []);

    return {loading, posts, setPosts};
}
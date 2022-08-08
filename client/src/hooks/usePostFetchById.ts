import {Dispatch, SetStateAction, useEffect, useState,FC} from "react"
import {PostType} from "../types";
import {Api} from "../lib/api";

export const usePostsFetchById = (id: number): {
    loading: boolean,
    post: PostType | undefined
} => {

    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<PostType>();

    useEffect(() => {
        Api.posts.get(id)
            .then(post => {
                if (post?.id && +post.id > 0) {
                    setPost(post);
                    setLoading(false);
                }
            })
    }, []);

    return {loading, post};
}
import {PostApi, PostType} from "../types";
import EnvConfig from '../envs.config';

const DOMAIN = EnvConfig[process.env.NODE_ENV ?? 'development'];

export const Api: { posts: PostApi } = {
    posts: {
        async list(): Promise<PostType[]> {

            let posts: PostType[] = [];

            try {
                const response = await fetch(`${DOMAIN}/posts`);

                posts = await response.json();
            } catch (e) {
                console.log(e);
            }

            return posts;
        },
        async get(id: PostType["id"]): Promise<PostType | null> {

            let post: PostType | null = null;

            try {
                const response = await fetch(`${DOMAIN}/posts/${id}`);

                post = await response.json();

            } catch (e) {
                console.log(e);
            }

            return post;
        },
        async create(data: PostType): Promise<boolean> {
            let post = false;

            try {
                const response = await fetch(`${DOMAIN}/posts`, {
                    method: "POST",
                    body: JSON.stringify({...data})
                });

                post = response.ok;
            } catch (e) {
                console.log(e);
            }

            return post;
        },
        async update(id: PostType["id"], data: PostType): Promise<boolean> {
            let post = false;

            try {
                const response = await fetch(`${DOMAIN}/posts/${id}`, {
                    method: "PUT",
                    body: JSON.stringify({...data})
                });

                post = response.ok;

            } catch (e) {
                console.log(e);
            }

            return post;
        },
        async delete(id: PostType["id"]): Promise<boolean> {
            let post = false;

            try {
                const response = await fetch(`${DOMAIN}/posts/${id}`, {
                    method: "DELETE"
                });

                post = response.ok;

            } catch (e) {
                console.log(e);
            }

            return post;
        }
    }
}
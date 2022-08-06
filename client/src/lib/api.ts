import {PageResult, PostApi, PostType} from "../types";
import EnvConfig from '../envs.config';

const DOMAIN = EnvConfig[process.env.NODE_ENV ?? 'development'].host;

export const Api: { posts: PostApi } = {
    posts: {
        async list(): Promise<PageResult<PostType>> {

            let posts: PageResult<PostType> = {
                "current_page": 1,
                "data": [],
                "first_page_url": "",
                "from": 1,
                "last_page": 1,
                "last_page_url": "",
                "links": [],
                "next_page_url": null,
                "path": "",
                "per_page": 10,
                "prev_page_url": null,
                "to": 0,
                "total": 0
            };

            try {
                const response = await fetch(`${DOMAIN}/posts`);

                if (response.ok) {
                    posts = await response.json();
                }
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
export type PostType = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type CreateOrUpdateParams<T, ID extends keyof T> = {
    [K in Exclude<keyof T, ID>]: T[K]
}

export type HttpCRUDApi<T, ID extends keyof T> = {

    list(): Promise<PageResult<T>>

    get(id: T[ID]): Promise<T | null>

    create(data: CreateOrUpdateParams<T, ID>): Promise<boolean>

    update(id: T[ID], data: CreateOrUpdateParams<T, ID>): Promise<boolean>

    delete(id: T[ID]): Promise<boolean>
}

export type PostApi = HttpCRUDApi<PostType, 'id'>

export interface PageResult<T> {
    current_page: number
    data: T[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string | null
    links: Link[]
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: string | null
    to: number
    total: number
}

export interface Link {
    url?: string
    label: string
    active: boolean
}
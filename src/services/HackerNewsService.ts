const apiUrl: string = "https://hacker-news.firebaseio.com/v0/";

export interface Item {
    id: number;
    deleted: boolean;
    type: string;
    by: string;
    time: number;
    text: string;
    dead: boolean;
    parent: number;
    poll: number;
    kids: number[];
    url: string;
    score: number;
    title: string;
    parts: number[];
    descendants: number;
}

export interface User {
    id: string;
    created: number;
    karma: number;
    submitted: number[];
    about: string;
}

function apiFetch<T>(url: string): Promise<T> {
    return fetch(`${apiUrl}${url}`).then((res) => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json() as Promise<T>;
    });
}

export const HackerNewsService = {
    getTopStories(limit: number): Promise<number[]> {
        //would be better with limit in query to api but can't see query option anywhere in docs
        return apiFetch<number[]>(`topstories.json`).then((res) =>
            res.slice(0, limit)
        );
    },
    getItem(id: number): Promise<Item> {
        return apiFetch<Item>(`item/${id}.json`);
    },
    getUser(id: string): Promise<User> {
        return apiFetch<User>(`user/${id}.json`);
    },
};

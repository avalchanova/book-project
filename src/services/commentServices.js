import { requestFactory } from "./requester.js";

const host = process.env.NODE_ENV === 'development'
    ? `http://localhost:3030`
    : `http://localhost:3030`;

const url = `${host}/data/commments`;
const request = requestFactory();

export const getAll = async (bookId) => {
    const searchQuery = encodeURIComponent(`bookId="${bookId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);
    const result = await request.get(`${url}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);
    return comments;
};

export const create = async (bookId, comment) => {
    const result = await request.post(url, { bookId, comment });
    return result;
};

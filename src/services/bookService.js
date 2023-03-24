import * as request from './requester.js';

const baseUrl = `http://localhost:3030/jsonstore/books`;

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const books = Object.values(result);
    return books;
};

export const create = async (bookData) => {
    const result = await request.post(baseUrl, bookData);
    return result;
};

export const getOne = async (bookId) => {
    const result = await request.get(`${baseUrl}/${bookId}`);
    return result;
};
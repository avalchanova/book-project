import { requestFactory } from './requester.js';

// console.log(process.env.NODE_ENV); // comes from nodejs
// there are development environment and production environment

const host = process.env.NODE_ENV === 'development'
    ? `http://localhost:3030`
    : `http://localhost:3030`;

const url = `${host}/data/books`;

export const bookServiceFactory = (token) => {
    const request = requestFactory(token);
    const getAll = async () => {
        const result = await request.get(url);
        const books = Object.values(result);
        return books;
    };

    const getOne = async (bookId) => {
        const result = await request.get(`${url}/${bookId}`);
        return result;
    };

    const create = async (bookData) => {
        const result = await request.post(url, bookData);
        return result;
    };

    const edit = (bookId, data) => request.put(`${url}/${bookId}`, data);

    const deleteBook = (bookId) => request.delete(`${url}/${bookId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteBook
    };
};
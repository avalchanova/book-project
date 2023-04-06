import { requestFactory } from './requester.js';

const baseUrl = `http://localhost:3030/data/books`;

export const bookServiceFactory = (token) => {
    const request = requestFactory(token);
    const getAll = async () => {
        const result = await request.get(baseUrl);
        const books = Object.values(result); //we are modifying the data here because the result comes as an {} with ID and the value of the ID is the whole content of the book = name, description, categories
        return books;
    };

    const getOne = async (bookId) => {
        const result = await request.get(`${baseUrl}/${bookId}`);
        return result;
    };

    const create = async (bookData) => {
        const result = await request.post(baseUrl, bookData);
        return result;
    };

    const edit = (bookId, data) => request.put(`${baseUrl}/${bookId}`, data);

    const deleteBook = (bookId) => request.delete(`${baseUrl}/${bookId}`);

    // const addComment = async (bookId, data) => {
    //     const result = await request.post(`${baseUrl}/${bookId}/comments`, data);
    //     return result;
    // };

    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteBook
        // addComment,
    };
};
import { requestFactory } from "./requester.js";

const baseUrl = 'http://localhost:3030/data/comments';
const request = requestFactory(); //this will give us the token from localStorage

export const getAll = async (bookId) => {
    const searchQuery = encodeURIComponent(`bookId="${bookId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);
    // в превод: от users колекцията искаме да заредим юзърите, чиито id-та са равни на _ownerId-то на коментарите
    // защото всеки коментар си има _ownerId, което е id-то на автора на коментара и при нас този юзър ще 
    // дойде под името "author", защото така сме му подали, може да бъде и commentAuthor и тн. 
    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);
    return comments;
};

export const create = async (bookId, comment) => {
    const result = await request.post(baseUrl, { bookId, comment });
    return result;
}


import { requestFactory } from "./requester.js";

const baseUrl = `http://localhost:3030/users`;

export const authServiceFactory = (token) => {
    const request = requestFactory(token);
    return {
        login: (data) => request.post(`${baseUrl}/login`, data),
        register: (data) => request.post(`${baseUrl}/register`, data),
        //if we have any other data like first name, last name, etc. must save it
        //in the payload of the request and it will be saved
        logout: () => request.get(`${baseUrl}/logout`)
    };
};

//DONE
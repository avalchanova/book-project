import { useContext } from "react";
import { AuthContext } from '../contexts/AuthContext.js';

export const useService = (serviceFactory) => {
    const { token } = useContext(AuthContext); //  we are using the empty context that we created in AuthContext.js
    const service = serviceFactory(token);
    return service;
};
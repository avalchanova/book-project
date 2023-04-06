import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext.js';

import { useBookContext } from "../../contexts/BookContext.js";

export const BookOwner = ({
    children,
}) => {
    const { bookId } = useParams();
    const { getBook } = useBookContext();
    const { userId } = useAuthContext();

    const currentBook = getBook(bookId);

    if (currentBook && currentBook._ownerId !== userId) {
        return <Navigate to={`/catalog/${bookId}`} replace />;
    }

    return children ? children : <Outlet />;
};
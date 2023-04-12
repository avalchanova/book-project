import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { bookServiceFactory } from "../services/bookService.js";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const bookService = bookServiceFactory();
    const navigate = useNavigate();

    useEffect(() => {
        bookService.getAll()
            .then(result => {
                setBooks(result);
            });
    }, []);

    const onCreateSubmit = async (data) => {
        try {
            const newBook = await bookService.create(data);
            setBooks(state => [...state, newBook]);
            navigate('/catalogue');
        } catch (error) {
            console.log(error.message);
        }
    };

    const onBookEditSubmit = async (values) => {
        const { ...data } = values;
        const result = await bookService.edit(values._id, values);
        setBooks(state => state.map(x => x._id === values._id ? result : x));
        navigate(`/catalogue/${values._id}`);
    };

    const deleteBook = (bookId) => {
        setBooks(state => state.filter(x => x._id !== bookId));
    };

    const getBook = (bookId) => {
        return books.find(x => x._id === bookId);
    };

    const contextValues = {
        books,
        onCreateSubmit,
        onBookEditSubmit,
        deleteBook,
        getBook
    };

    return (
        <BookContext.Provider value={contextValues}>
            {children}
        </BookContext.Provider>
    );
};

export const useBookContext = () => {
    const context = useContext(BookContext);
    return context;
};

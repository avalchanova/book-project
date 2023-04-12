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
        const { ...bookData } = data;
        if (bookData.title.length === 0) {
            alert(`Please enter a title.`);
            return;
        }
        if (bookData.author.length === 0) {
            alert(`Please enter an author.`);
            return;
        }
        if (bookData.imageUrl.length === 0) {
            alert(`Please enter an image URL.`);
            return;
        }
        if (bookData.summary.length === 0) {
            alert(`Please enter a brief summary of the book.`);
            return;
        }
        if (bookData.genre === "") {
            alert(`Please choose an existing genre or select "other".`);
            return;
        }
        if (bookData.favouriteQuote.length === 0) {
            alert(`Please enter a your favourite quote.`);
            return;
        }
        if (bookData.year === '') {
            alert(`Please enter year of publication.`);
            return;
        }
        // tropes are not mandatory
        // book pages are not mandatory
        try {
            const newBook = await bookService.create(data);
            setBooks(state => [...state, newBook]);
            navigate('/catalogue');
        } catch (error) {
            console.log(error.message);
        }
    };

    const onBookEditSubmit = async (values) => {
        // TODO: when a field is missed and the alert goes on, all fields are emptied, which is not good UX
        const { ...bookData } = values;
        if (bookData.title.length === 0) {
            alert(`Please enter a title.`);
            return;
        }
        if (bookData.author.length === 0) {
            alert(`Please enter an author.`);
            return;
        }
        if (bookData.imageUrl.length === 0) {
            alert(`Please enter an image URL.`);
            return;
        }
        if (bookData.genre === "choose") {
            alert(`Please choose an existing genre or select "other".`);
            return;
        }
        if (bookData.quote.length === 0) {
            alert(`Please enter a your favourite quote.`);
            return;
        }
        if (bookData.year === '') {
            alert(`Please enter year of publication.`);
            return;
        }
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

import { useEffect, useReducer } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { bookServiceFactory } from '../../services/bookService.js';
import * as commentService from '../../services/commentServices.js';
import { useService } from '../../hooks/useService.js';
import { useAuthContext } from '../../contexts/AuthContext.js';

import AddComment from '../../components/BookDetails/AddComment/AddComment.js';
import { bookReducer } from '../../reducers/bookReducer.js';
import { useBookContext } from '../../contexts/BookContext.js';

const BookDetails = () => {
    const { bookId } = useParams(); // returns the id from the URL 
    console.log(bookId);
    // we set its name in the App.js, that is where it knows what the name is 
    const { userId, isAuthenticated, name } = useAuthContext();
    console.log(name);
    const { deleteBook } = useBookContext();
    const [book, dispatch] = useReducer(bookReducer, {}); // подава се функция и базовата стойност
    const bookService = useService(bookServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            bookService.getOne(bookId),
            commentService.getAll(bookId),
        ]).then(([bookData, comments]) => {
            // dispatch('Pesho')
            const bookState = {
                ...bookData,
                comments,
            };
            dispatch({ type: 'BOOK_FETCH', payload: bookState }); //?? understand what is happening with the Reducer, how does it work,etc?
        });
    }, [bookId]);

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(bookId, values.comment);
        dispatch({
            type: 'COMMENT_ADD',
            payload: response,
            name,
        }); //this whole object is in the action
        // we are adding the new comment to the state so there wont be necessary to refresh the page
        // for the new comment to appear
    };
    console.log(book);

    const isOwner = book._ownerId === userId; // if book._ownerId is equal to the logged in user, the isOwner will be true

    console.log("creator " + book._ownerId);
    // console.log("user" + userId);

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you certain you want to delete this book ${book.title}`); //will return true or false probably
        // we have to create a method showDeleteModal if we want to have a pop up

        if (result) { // after confirming in the modal 
            await bookService.delete(book._id); //deletes from server
            deleteBook(book._id); //deletes from state
            navigate('/catalogue');
        }
    };

    return (
        <div >
            <h1 style={styles.heading}>Book Details</h1>
            <div style={styles.main} >
                <div className="card card border-3 rounded-3 mb-3" style={styles.imageContainer}>
                    <img style={styles.imageContainer} src={book.imageUrl} className="rounded float-start" alt="bookCover " />
                </div>
                <div className="card card border-3 rounded-3 mb-3" style={styles.textContainer}>

                    <div className="card-body">
                        <h3 className="card-title">{book.title}</h3>
                        <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{book.year}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{book.genre}</h6>
                        <p className="card-text">{book.summary}</p>
                        <p className="card-text" >Favourite Quote: {book.favouriteQuote}</p>
                        {isOwner && (
                            // TODO: EDIT post
                            <div>
                                <Link to={`/catalog/${book._id}/edit`} className="btn btn-primary" style={styles.button1}>Edit</Link>
                                <button className="btn btn-primary" onClick={onDeleteClick} style={styles.button2}>Delete</button>
                            </div>
                        )}
                    </div>
                </div>
            </div >
            <div className="outerCommentSection" style={styles.outerCommentSection}>
                <h4 style={styles.commentHeader}>Comments:</h4>
                <div className="comments" style={styles.commentContainer}>
                    <div>
                        <ul style={styles.ul}>
                            {book.comments && book.comments.map(x => (
                                <li key={x._id} className="comment">
                                    <p> {x.author.firstName}: {x.comment}</p>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {book.comments?.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                    {/* we have optional chaining (the ? in book.comments?.length) because we have 
                    to check if the even is an array comments and if there isnt show the paragraph No Comments*/}
                </div>
            </div>
            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
        </div >
    );
};

const styles = {
    heading: {
        paddingTop: "5%",
        paddingBottom: "2%",
        textAlign: "center"
    },
    commentHeader: {
        textAlign: "center"
    },
    main: {
        textAlign: 'center',

        // display: "inline-block",
        // justifyContent: "space-between",
        // verticalAlign: "block",

        // marginLeft: '10%',
        // border: "5px solid",
        // margin: "auto",
        // width: "1px",
        // padding: "20px",

    },
    button: {
        backgroundColor: "#ffe45e",
        border: 'none',
    },
    commentContainer: {
        paddingTop: '5px',
        paddingBottom: "25px",
        justifyContent: 'center',
        display: 'flex',

    },
    imageContainer: {
        display: 'inline-block',
        verticalAlign: "middle",
        // borderColor: "255, 0, 0, 0.2",
        width: "18rem",
        height: '25rem',
        //     marginLeft: "28%",
        //     float: "left",
        //     height: "100px",
        //     float: "left"
    },
    textContainer: {
        // paddingLeft: "10px",
        // marginRight: "15%",
        borderColor: "#ffe45e",
        width: "30rem",
        // float: "left",
        height: "25rem",
        // float: "left",
        display: 'inline-block',
        verticalAlign: "middle",
    },
    button1: {
        backgroundColor: "#ffe45e",
        margin: '5px',
        border: 'none',
    },
    button2: {
        backgroundColor: "#ffe45e",
        border: 'none',
    },
    ul: {
        listStyleType: "none"
    },
    outerCommentSection: {
        width: "600px",
        // display: "inline-block",
        margin: "auto",
        border: "thick double #ffe45e"
        // borderColor: "#ffe45e"
    }
};

export default BookDetails;
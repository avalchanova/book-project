import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBookContext } from "../../contexts/BookContext.js";

import { useForm } from "../../hooks/useForm.js";
import { useService } from "../../hooks/useService.js";
import { bookServiceFactory } from "../../services/bookService.js";

const EditFormKeys = {
    Title: "title",
    Author: "author",
    ImageUrl: "imageUrl",
    Summary: "summary",
    Genre: "genre",
    FavouriteQuote: "favouriteQuote",
    Year: "year",
    Tropes: "tropes",
    Pages: "pages",
};

const Edit = () => {
    const { onBookEditSubmit } = useBookContext();
    const { bookId } = useParams();
    const bookService = useService(bookServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: "",
        [EditFormKeys.Title]: "",
        [EditFormKeys.Author]: "",
        [EditFormKeys.ImageUrl]: "",
        [EditFormKeys.Summary]: "",
        [EditFormKeys.Genre]: "",
        [EditFormKeys.FavouriteQuote]: "",
        [EditFormKeys.Year]: "",
        [EditFormKeys.Tropes]: "",
        [EditFormKeys.Pages]: "",
    }, onBookEditSubmit);

    useEffect(() => {
        bookService.getOne(bookId)
            .then(result => {
                changeValues(result);
            });
    }, [bookId, bookService, changeValues]);
    return (
        <div className='card border-4 rounded-3 mb-3' style={styles.mainContainer}>
            <form className="row g-3" method="POST" onSubmit={onSubmit} style={styles.form}>
                <h1 style={styles.heading}>Edit Book</h1>

                <div className="col-md-6 p3">
                    <label htmlFor="inputTitlel4" className="form-label">Title</label>
                    <input type="text"
                        className="form-control"
                        id="inputTitle4"
                        value={values.title}
                        name={EditFormKeys.Title}
                        onChange={changeHandler}
                        placeholder="Little Women" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputAuthor4" className="form-label">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAuthor4"
                        value={values.author}
                        name={EditFormKeys.Author}
                        onChange={changeHandler}
                        placeholder="Louisa May Alcott" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputImageUrl" className="form-label">Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputImageUrl"
                        value={values.imageUrl}
                        name={EditFormKeys.ImageUrl}
                        onChange={changeHandler}
                        placeholder="https://" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputSummary" className="form-label">Summary</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputSummary"
                        value={values.summary}
                        name={EditFormKeys.Summary}
                        onChange={changeHandler} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputState" className="form-label">Genre</label>
                    <select
                        id="inputState"
                        className="form-select"
                        value={values.genre}
                        name={EditFormKeys.Genre}
                        onChange={changeHandler}>
                        <option value="choose">Choose...</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Children's Fiction">Children's Fiction</option>
                        <option value="Dystopian">Dystopian</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Historical Fiction">Historical Fiction</option>
                        <option value="Horror">Horror</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Romance">Romance</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Tragedy">Tragedy</option>
                        <option value="Young Adult">Young Adult</option>
                        <option value="Non-fiction">Nonfiction</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="col-12">
                    <label htmlFor="inputFavouriteQuote" className="form-label">Favourite Quote</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputFavouriteQuote"
                        value={values.favouriteQuote}
                        name={EditFormKeys.FavouriteQuote}
                        onChange={changeHandler}
                        placeholder="Conceit spoils the finest genius." />
                </div>
                <div className="col-12">
                    <label htmlFor="inputFavouriteQuote" className="form-label">Year of Publication</label>
                    <input
                        type="number"
                        className="form-control"
                        id="inputFavouriteQuote"
                        value={values.year}
                        name={EditFormKeys.Year}
                        onChange={changeHandler}
                        placeholder="1868" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputTropes" className="form-label">Tropes</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputTropes"
                        value={values.tropes}
                        name={EditFormKeys.Tropes}
                        onChange={changeHandler} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPages" className="form-label">Pages</label>
                    <input
                        type="number"
                        className="form-control"
                        id="inputPages"
                        value={values.pages}
                        name={EditFormKeys.Pages}
                        onChange={changeHandler} />
                </div>
                <div className="col-12" style={styles.buttonContainer}>
                    <button type="submit" className="btn" value="edit book" style={styles.button}>Edit Book</button>
                </div>
            </form>
        </div>
    );
};

const styles = {
    mainContainer: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "5%",
        maxWidth: "540px",
        borderColor: "#ffe45e",
        boxShadow: "1px 2px 15px 10px rgba(20, 20, 20, 0.1)"
    },
    form: {
        paddingTop: "1.5%",
        paddingLeft: "10%",
        paddingRight: "10%",

    },
    heading: {
        paddingTop: "5%",
        paddingBottom: "2%",
        textAlign: "center",
    },
    button: {
        backgroundColor: "#ffe45e",
        color: '#ffffff'
    },
    radioButtonTxt: {
        textAlign: "center",
    },
    buttonContainer: {
        paddingTop: '10px',
        paddingBottom: "25px",
        justifyContent: 'center',
        display: 'flex',
    }
};

export default Edit;
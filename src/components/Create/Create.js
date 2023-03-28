import { useState } from "react";

const Create = ({ onCreateSubmit }) => {
    const [values, setValues] = useState({
        title: "",
        author: "",
        imageUrl: "",
        summary: "",
        genre: "",
        favouriteQuote: "",
        year: "",
        tropes: "",
        pages: "",
    });
    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        onCreateSubmit(values);
    };
    return (
        // TODO: borders + shadow on login, create, register forms (like the borders on the catalogue page)
        <div className='card border-4 rounded-3 mb-3' style={styles.mainContainer}>
            <form className="row g-3" onSubmit={onSubmit} style={styles.form}>
                <h1 style={styles.heading}>CREATE A POST</h1>

                <div className="col-md-6 p3">
                    <label htmlFor="inputTitlel4" className="form-label">Title</label>
                    <input type="text" className="form-control" id="inputTitle4" value={values.title} name="title" onChange={onChangeHandler} placeholder="Little Women" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputAuthor4" className="form-label">Author</label>
                    <input type="text" className="form-control" id="inputAuthor4" value={values.author} name="author" onChange={onChangeHandler} placeholder="Louisa May Alcott" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputImageUrl" className="form-label">Image URL</label>
                    <input type="text" className="form-control" id="inputImageUrl" value={values.imageUrl} name="imageUrl" onChange={onChangeHandler} placeholder="https://" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputSummary" className="form-label">Summary</label>
                    <input type="text" className="form-control" id="inputSummary" value={values.summary} name="summary" onChange={onChangeHandler} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputState" className="form-label">Genre</label>
                    <select id="inputState" className="form-select" value={values.genre} name="genre" onChange={onChangeHandler}>
                        <option selected>Choose...</option>
                        <option value="adventure">Adventure</option>
                        <option value="childrensFiction">Children's Fiction</option>
                        <option value="dystopian">Dystopian</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historicalFiction">Historical Fiction</option>
                        <option value="horror">Horror</option>
                        <option value="mystery">Mystery</option>
                        <option value="romance">Romance</option>
                        <option value="scienceFiction">Science Fiction</option>
                        <option value="thriller">Thriller</option>
                        <option value="tragedy">Tragedy</option>
                        <option value="youngAdult">Young Adult</option>
                        <option value="nonfiction">Nonfiction</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="col-12">
                    <label htmlFor="inputFavouriteQuote" className="form-label">Favourite Quote</label>
                    <input type="text" className="form-control" id="inputFavouriteQuote" value={values.favouriteQuote} name="favouriteQuote" onChange={onChangeHandler} placeholder="Conceit spoils the finest genius." />
                </div>
                <div className="col-12">
                    <label htmlFor="inputFavouriteQuote" className="form-label">Year of Publication</label>
                    <input type="text" className="form-control" id="inputFavouriteQuote" value={values.year} name="year" onChange={onChangeHandler} placeholder="1868" />
                </div>

                {/* <div className="col-12">
                <label htmlFor="inputGenre" className="form-label">Genre</label>
                <input type="text" className="form-control" id="inputGenre" placeholder="Romance" />
            </div> */}
                <div className="col-md-6">
                    <label htmlFor="inputTropes" className="form-label">Tropes</label>
                    <input type="text" className="form-control" id="inputTropes" value={values.tropes} name="tropes" onChange={onChangeHandler} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPages" className="form-label">Pages</label>
                    <input type="text" className="form-control" id="inputPages" value={values.pages} name="pages" onChange={onChangeHandler} />
                </div>
                {/* TODO: how do you manage a radio button value? */}
                {/* <div className="col-12" >
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={values.partOfSeries} id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck" style={styles.radioButtonTxt}>Part of a series</label>
                    </div>
                </div> */}
                <div className="col-12" style={styles.buttonContainer}>
                    <button type="submit" className="btn" value="Create Post" style={styles.button}>Create Post</button>
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
        // marginBottom: "10px",
        maxWidth: "540px",
        borderColor: "#ffe45e",
        boxShadow: "1px 2px 15px 10px rgba(20, 20, 20, 0.1)"

        // alignItems: "center",
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

export default Create;
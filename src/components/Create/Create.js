import React from 'react';

const Create = () => {
    return (
        <form className="row g-3" style={styles.form}>
            <div className="col-md-6 p3">
                <label for="inputTitlel4" className="form-label">Title</label>
                <input type="text" className="form-control" id="inputTitle4" />
            </div>
            <div className="col-md-6">
                <label for="inputAuthor4" className="form-label">Author</label>
                <input type="text" className="form-control" id="inputAuthor4" />
            </div>
            <div className="col-12">
                <label for="inputImageUrl" className="form-label">Image URL</label>
                <input type="text" className="form-control" id="inputImageUrl" placeholder="https://" />
            </div>
            <div className="col-12">
                <label for="inputSummary" className="form-label">Summary</label>
                <input type="text" className="form-control" id="inputSummary" placeholder="" />
            </div>
            <div className="col-12">
                <label for="inputState" className="form-label">Genre</label>
                <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div className="col-12">
                <label for="inputFavouriteQuote" className="form-label">Favourite Quote</label>
                <input type="text" className="form-control" id="inputFavouriteQuote" placeholder="" />
            </div>

            {/* <div className="col-12">
                <label for="inputGenre" className="form-label">Genre</label>
                <input type="text" className="form-control" id="inputGenre" placeholder="Romance" />
            </div> */}
            <div className="col-md-6">
                <label for="inputTropes" className="form-label">Tropes</label>
                <input type="text" className="form-control" id="inputTropes" />
            </div>
            <div className="col-md-6">
                <label for="inputPages" className="form-label">Pages</label>
                <input type="text" className="form-control" id="inputPages" />
            </div>
            <div className="col-12" >
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label class="form-check-label" for="gridCheck" style={styles.radioButtonTxt}>Part of a series</label>
                </div>
            </div>
            <div className="col-12" >
                <button type="submit" className="btn" style={styles.button}>Create Post</button>
            </div>
        </form>
    );
};
const styles = {
    form: {
        paddingTop: "50px",
        paddingLeft: "35%",
        paddingRight: "35%"
    },
    button: {
        backgroundColor: "#ffe45e",
        color: '#ffffff'
    },
    radioButtonTxt: {
        textAlign: "center",
    }
};

export default Create;
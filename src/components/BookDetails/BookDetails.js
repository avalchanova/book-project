import React from 'react';

const BookDetails = () => {
    return (
        <div >
            <h1 style={styles.heading}>Book Details</h1>
            <div style={styles.main}>
                <div class="card" style={styles.imageContainer}>
                    <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91l1EHFs8dL.jpg" class="rounded float-start" alt="..." />
                </div>
                <div class="card" style={styles.textContainer}>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

const styles = {
    heading: {
        paddingTop: "5%",
        paddingBottom: "2%",
        textAlign: "center"
    },
    main: {
        // display: "inline-block",
        // justifyContent: "space-between",
        // verticalAlign: "block",
        // marginLeft: '10%',
        // border: "5px solid",
        // margin: "auto",
        // width: "1px",
        // padding: "20px",

    },
    imageContainer: {
        marginLeft: "28%",
        width: "18rem",
        float: "left",
        height: "100px",
        float: "left"
    },
    textContainer: {
        paddingLeft: "10px",
        marginRight: "15%",
        width: "30rem",
        float: "left",
        height: "300px",
        float: "right"

    }
};

export default BookDetails;
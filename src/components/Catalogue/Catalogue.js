import React from 'react';
import { Link } from 'react-router-dom';
// TODO: center the card-container
const Catalogue = () => {
    return (
        <section id="catalogue-page">
            <h1 style={styles.heading}>All Posts</h1>
            <div id="card-container" style={styles.cardContainer}>
                <div className="card border-3 rounded-3 mb-3" style={styles.card}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91l1EHFs8dL.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div>
                                    <Link to="/details" className="btn btn-primary" style={styles.button}>Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card border-3 rounded-3 mb-3" style={styles.card}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91l1EHFs8dL.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div>
                                    <Link to="/details" className="btn btn-primary" style={styles.button}>Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><div className="card border-3 rounded-3 mb-3" style={styles.card}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91l1EHFs8dL.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div>
                                    <Link to="/details" className="btn btn-primary" style={styles.button}>Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card border-4 rounded-3 mb-3" style={styles.card}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91l1EHFs8dL.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div>
                                    <Link to="/details" className="btn btn-primary" style={styles.button}>Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* TODO: posts */}
            {/* {posts.map(x=>)} */}
        </section>
    );
};
const styles = {
    heading: {
        paddingTop: "5%",
        // paddingBottom: "2%",
        textAlign: "center"
    },
    card: {
        maxWidth: "540px",
        borderColor: "#ffe45e",
        display: "inline-block",
        justifyContent: "space-between",
        margin: '10px',
        boxShadow: "1px 2px 15px 1px rgba(20, 20, 20, 0.1)"
    },
    cardContainer: {
        padding: "5%",
        // paddingLeft: "5%",
        // paddingRight: "5%",
        marginLeft: "auto",
        marginRight: "auto",
        // margin: "auto",
        // width: "60%",
    },
    button: {
        backgroundColor: "#ffe45e",
        border: 'none',
    }

};
export default Catalogue;
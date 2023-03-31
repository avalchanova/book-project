import React from 'react';
import CatalogueItem from './CatalogueItem/CatalogueItem.js';
// TODO: the whole catalogue is not centered and is driving me nuts but here i am writing todos :)
const Catalogue = ({ books }) => {
    return (
        <section id="catalogue-page">
            <h1 style={styles.heading}>All Posts</h1>
            <div id="card-container" style={styles.cardContainer}>
                {books.map(x =>
                    <CatalogueItem key={x._id} {...x} />
                )}
                {books.length === 0 && (
                    <h3 style={styles.hThree} className="no-articles">No posts yet</h3>
                )}
            </div>
        </section>
    );
};

const styles = {
    heading: {
        paddingTop: "5%",
        textAlign: "center"
    },
    cardContainer: {
        // padding: "5%",
        marginLeft: "12%",
        marginRight: "auto",

        margin: "auto",
        // width: "90%",
    },
    hThree: {
        textAlign: "center",
    }
};
export default Catalogue;
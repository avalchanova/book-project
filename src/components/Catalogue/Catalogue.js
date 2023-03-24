import React from 'react';
import CatalogueItem from './CatalogueItem/CatalogueItem.js';

const Catalogue = ({ books }) => {
    return (
        <section id="catalogue-page">
            <h1 style={styles.heading}>All Posts</h1>
            <div id="card-container" style={styles.cardContainer}>
                {books.map(x =>
                    <CatalogueItem key={x._id} {...x} />
                )}
                {books.length === 0 && (
                    <h3 className="no-articles">No posts yet</h3>
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
        padding: "5%",
        marginLeft: "auto",
        marginRight: "auto",
    },
};
export default Catalogue;
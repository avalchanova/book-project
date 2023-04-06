import React from 'react';
import { useBookContext } from '../../contexts/BookContext.js';
import CatalogueItem from './CatalogueItem/CatalogueItem.js';
// TODO: the whole catalogue is not centered and is driving me nuts but here i am writing todos :)
const Catalogue = () => {
    const { books } = useBookContext();
    return (
        <section id="catalogue-page">
            <h1 style={styles.heading}>All Posts</h1>
            <div id="card-container" className='container text-center' style={styles.cardContainer}>
                <div className='row'>
                    {books.map(x =>
                        <CatalogueItem key={x._id} {...x} />
                    )}
                    {books.length === 0 && (
                        <h3 style={styles.hThree} className="no-articles">No posts yet</h3>
                    )}
                </div>
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
        marginBottom: "4%",
        margin: "auto",
        // width: "90%",
    },
    hThree: {
        textAlign: "center",
    }
};
export default Catalogue;
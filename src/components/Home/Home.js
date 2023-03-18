import React from 'react';

const Home = () => {
    return (
        <div>
            <div style={styles.firstParagraphContainer}>
                <div style={styles.headingsContainer}>
                    <div style={styles.headingOne}>
                        <h1 >The Book Nook</h1>
                    </div>
                    <div style={styles.headingTwo}>
                        <h3 >Where every bookworm feels at home</h3>
                    </div>
                </div>
                <div>
                    <div style={styles.homeImgGirl}>
                        <img src="../homePhoto.jpeg" alt="Reading girl" style={styles.homeImg} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    homeImgGirl: {
        display: 'flex',
        justifyContent: 'end',
    },
    homeImg: {
        height: "700px",
    },
    headingOne: {
        paddingLeft: "100px",
        paddingTop: "100px",
        display: 'flex',
        justifyContent: 'start',
    },
    headingTwo: {
        paddingLeft: "100px",
        paddingTop: "20px",

        display: 'flex',
        justifyContent: 'start',
    },
    firstParagraphContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    headingsContainer: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '60%',
    }
};

export default Home;

//rafce
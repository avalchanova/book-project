import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <div id="firstParagraphContainer" style={styles.firstParagraphContainer}>
                <div id="headingsContainer" style={styles.headingsContainer}>
                    <div id="headingOne" style={styles.headingOne}>
                        <h1>Oops! You seem to be lost.</h1>
                    </div>
                    <div id="headingTwo" style={styles.headingTwo}>
                        <p>Here are some helpful links:</p>
                    </div>
                    <div style={styles.linkDivOne}>
                        <Link style={styles.linkOne} to='/' >Home</Link>
                    </div>
                    <div style={styles.linkDivTwo}>
                        <Link style={styles.linkTwo} to='/catalogue' >Catalogue</Link>
                    </div>
                </div>

                <div id="homeImgGirl" style={styles.homeImgGirl} >
                    <img src="../404.jpg" alt="404 girl" style={styles.homeImg} />
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
        minWidth: '50%',
    },
    linkDivOne: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: "100px",
    },
    linkDivTwo: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: "100px",
        color: "red",
    },
    linkOne: {
        color: "#5597d8",
    },
    linkTwo: {
        color: "#5597d8",
    }
};

export default NotFound;
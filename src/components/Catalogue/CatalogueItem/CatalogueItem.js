import { Link } from 'react-router-dom';


const CatalogueItem = ({
    _id,
    title,
    imageUrl,
    summary
}) => {
    return (
        <div className="card border-3 rounded-3 mb-3" style={styles.card}>
            < div className="row g-0" >
                <div className="col-md-4">
                    <img src={imageUrl} style={styles.img} className="img-fluid rounded-start" alt="bookCover" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{summary}</p>
                        <div>
                            <Link to={`/catalogue/${_id}`} className="btn btn-primary" style={styles.button}>Details</Link>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};
const styles = {
    card: {
        // TODO: cards are a little wobbly in size and are not in the line and go a little zigzaggy
        width: "540px",
        height: "280px",
        borderColor: "#ffe45e",
        display: "inline-block",
        justifyContent: "space-evenly",
        margin: '30px',
        boxShadow: "1px 2px 15px 1px rgba(20, 20, 20, 0.1)"
    },
    button: {
        backgroundColor: "#ffe45e",
        border: 'none',
    }
};

export default CatalogueItem;
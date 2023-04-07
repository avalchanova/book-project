import { useForm } from '../../../hooks/useForm.js';

const AddComment = ({
    onCommentSubmit
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        comment: '',
    }, onCommentSubmit);
    return (
        <article>
            <div style={styles.commentContainer}>
                <form action="post" onSubmit={onSubmit}>
                    <textarea
                        name="comment"
                        style={styles.textArea}
                        placeholder="Comment..."
                        value={values.comment}
                        onChange={changeHandler}>
                    </textarea>
                    <div id="buttonContainer" style={styles.buttonContainer}>
                        <button type="submit" className="btn btn-primary" style={styles.button}>Post</button>
                    </div>
                </form>
            </div>
        </article>
    );
};


const styles = {
    textArea: {
        height: "5rem",
        width: "15rem",
        display: 'inline-block',
        verticalAlign: "middle",
        borderColor: "#ffe45e"
    },
    commentContainer: {
        paddingTop: '5px',
        paddingBottom: "25px",
        justifyContent: 'center',
        display: 'flex',
    },
    button: {
        backgroundColor: "#ffe45e",
        border: 'none',
    },
    buttonContainer: {
        paddingTop: '5px',
        paddingBottom: "25px",
        paddingLeft: '5px',
        justifyContent: 'center',
        display: 'flex',
        display: 'inline-block',
        verticalAlign: "middle",
    },
};
export default AddComment;
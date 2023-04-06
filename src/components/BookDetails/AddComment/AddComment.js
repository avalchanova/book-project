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
                <form action="" onSubmit={onSubmit}>
                    <textarea name="comment" style={styles.textArea} placeholder="Comment..." value={values.comment} onChange={changeHandler}></textarea>
                    <div id="buttonContainer" style={styles.buttonContainer}>
                        <button type="submit" className="btn btn-primary" style={styles.button}>Post</button>
                    </div>
                </form>
            </div>
        </article>
    );
};


const styles = {
    button: {
        backgroundColor: "#ffe45e",
        border: 'none',
    },
    commentContainer: {
        paddingTop: '5px',
        paddingBottom: "25px",
        justifyContent: 'center',
        display: 'flex',
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
    textArea: {
        height: "5rem",
        width: "15rem",
        display: 'inline-block',
        verticalAlign: "middle",
        borderColor: "#ffe45e"
    }
};
export default AddComment;
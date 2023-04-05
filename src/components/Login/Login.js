import { useAuthContext } from '../../contexts/AuthContext.js';
import { useForm } from '../../hooks/useForm.js';
import { Link } from 'react-router-dom';
// import styles from './Login.module.css';


const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = () => {
    const { onLoginSubmit } = useAuthContext();
    // through the context we created we have access to the onLoginSubmit func which is intiially created in App.js
    const { values, changeHandler, onSubmit } = useForm({ // ?? how does the form work exactly
        [LoginFormKeys.Email]: "",
        [LoginFormKeys.Password]: "",
    }, onLoginSubmit);

    return (
        <div >
            <div className="card border-4 rounded-3 mb-3" id="mainContainer" style={styles.mainContainer}>
                <form id="login" method="POST" onSubmit={onSubmit} style={styles.form} >
                    <h1 style={styles.heading}>LOGIN</h1>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label form-outline w-25">Email address</label>
                        <input
                            type="email"
                            name={LoginFormKeys.Email}
                            onChange={changeHandler}
                            value={values[[LoginFormKeys.Email]]}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder='john@doe.com'
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            name={LoginFormKeys.Password}
                            onChange={changeHandler}
                            value={values[[LoginFormKeys.Password]]}
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="signup-link">
                        Not a member? <Link to="/register">Register now</Link>
                    </div>
                    <div id="buttonContainer" style={styles.buttonContainer}>
                        <button type="submit" className="btn btn-primary" style={styles.button}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
const styles = {
    mainContainer: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "5%",
        maxWidth: "540px",
        borderColor: "#ffe45e",
        boxShadow: "1px 2px 15px 10px rgba(20, 20, 20, 0.1)"
    },
    form: {
        paddingLeft: "10%",
        paddingRight: "10%",
    },
    heading: {
        paddingTop: "5%",
        paddingBottom: "2%",
        textAlign: "center"
    },
    button: {
        backgroundColor: "#ffe45e",
        border: 'none',
    },
    buttonContainer: {
        paddingTop: '15px',
        paddingBottom: "25px",
        justifyContent: 'center',
        display: 'flex',
    }
};

export default Login;
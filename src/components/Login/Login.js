import { useAuthContext } from '../../contexts/AuthContext.js';
import { useForm } from '../../hooks/useForm.js';
import { Link } from 'react-router-dom';
import './Login.module.css';
import { useOnError } from '../../hooks/useOnError.js';
import { ErrorModal } from '../../modals/Error/ErrorModal.js';
import { useState, useEffect } from 'react';


const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = () => {
    const [errorState, setErrorState] = useState();

    const { error } = useOnError('loginError');
    const { onLoginSubmit } = useAuthContext(); // спестява ни ползването на useContext(AuthContext)
    // through the context we created we have access to the onLoginSubmit func which is intiially created in App.js
    const { values, changeHandler, onSubmit } = useForm({ // ?? how does the form work exactly
        [LoginFormKeys.Email]: "",
        [LoginFormKeys.Password]: "",
        // formErrors: { email: '', password: '' },
        // emailValid: false,
        // passwordValid: false,
        // formValid: false
    }, onLoginSubmit);

    useEffect(() => {
        if (error) {
            console.log({ data: JSON.parse(error) });
            setErrorState(JSON.parse(error));
        }
    }, [error]);

    return (
        <div>
            {errorState && <ErrorModal title={"Login Failed"} body={errorState.message} errorKey={"loginError"} />}
            <div className="card border-4 rounded-3 mb-3" id="mainContainer" style={styles.mainContainer}>
                <form id="login" className="needs-validation" noValidate method="POST" onSubmit={onSubmit} style={styles.form} >
                    <h1 style={styles.heading}>LOGIN</h1>

                    <div className="inputField">
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
                            required
                        />
                    </div>

                    <div className="inputField">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            name={LoginFormKeys.Password}
                            onChange={changeHandler}
                            value={values[[LoginFormKeys.Password]]}
                            className="form-control"
                            id="exampleInputPassword1"
                            required
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
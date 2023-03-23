import React from 'react';
import { Link } from 'react-router-dom';
// TODO: yellow borders on auth forms and create form 
const Login = () => {
    return (
        <div className="card border-4 rounded-3 mb-3" style={styles.mainContainer}>
            <form style={styles.form}>
                <h1 style={styles.heading}>LOGIN</h1>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label form-outline w-25">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" /> */}
                {/* <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label> */}
                {/* </div> */}
                <div className="signup-link">
                    Not a member? <Link to="/register">Register now</Link>
                </div>
                <div style={styles.buttonContainer}>
                    <button type="submit" className="btn btn-primary" style={styles.button}>Login</button>
                </div>
            </form>
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
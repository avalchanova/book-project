import React from 'react';

const Login = () => {
    return (
        <form style={styles.form}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
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
                Not a member? <a href="/register">Register now</a>
            </div>
            <div style={styles.buttonContainer}>
                <button type="submit" className="btn btn-primary" style={styles.button}>Login</button>
            </div>
        </form>
    );
};
const styles = {
    form: {
        paddingTop: "5%",
        paddingLeft: "40%",
        paddingRight: "40%"
    },
    button: {
        backgroundColor: "#ffe45e",
        border: 'none',
    },
    buttonContainer: {
        paddingTop: '10px',
        justifyContent: 'center',
        display: 'flex',
    }
};

export default Login;
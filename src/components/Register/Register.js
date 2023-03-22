import React from 'react';

const Register = () => {
    return (
        <form className="row g-3 needs-validation" style={styles.form} novalidate>
            <div className="col-md-6">
                <label htmlFor="validationCustom01" className="form-label">First name</label>
                <input type="text" className="form-control" id="validationCustom01" placeholder="John" required />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="validationCustom02" className="form-label">Last name</label>
                <input type="text" className="form-control" id="validationCustom02" placeholder="Doe" required />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-12">
                <label htmlFor="validationCustomEmail" className="form-label">Email</label>
                <div className="input-group has-validation">
                    <input type="text" className="form-control" id="validationCustomEmail" placeholder="john@doe.com" aria-describedby="inputGroupPrepend" required />
                    <div className="invalid-feedback">
                        Please enter a valid email.
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="validationPassword" className="form-label">Password</label>
                <input type="text" className="form-control" id="validationPassword" required />
                <div className="invalid-feedback">
                    Please provide a valid password.
                </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="validationRepeatPassword" className="form-label">Repeat Password</label>
                <input type="text" className="form-control" id="validationRepeatPassword" required />
                <div className="invalid-feedback">
                    Please repeat the password correctly.
                </div>
            </div>
            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label className="form-check-label" htmlFor="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
            </div>
            <div className="signup-link">
                Already a member? <a href="/login">Log in now</a>
            </div>
            <div className="col-12" style={styles.buttonContainer}>
                <button className="btn btn-primary" type="submit" style={styles.button}>Register</button>
            </div>
        </form>
    );
};

const styles = {
    form: {
        paddingTop: "5%",
        paddingLeft: "35%",
        paddingRight: "35%"
    },
    button: {
        backgroundColor: "#ffe45e",
        border: 'none',
    },
    buttonContainer: {
        justifyContent: 'center',
        display: 'flex',
    }
};





export default Register;
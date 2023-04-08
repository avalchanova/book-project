import { useContext } from "react";
import { useForm } from "../../hooks/useForm.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";

const RegisterFormKeys = {
    FirstName: 'firstName',
    LastName: 'lastName',
    Email: 'email',
    Password: 'password',
    RepeatPassword: 'repeatPassword'
};

const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        [RegisterFormKeys.FirstName]: "",
        [RegisterFormKeys.LastName]: "",
        [RegisterFormKeys.Email]: "",
        [RegisterFormKeys.Password]: "",
        [RegisterFormKeys.RepeatPassword]: "",
    }, onRegisterSubmit);

    return (
        <div className="card border-4 rounded-3 mb-3" style={styles.mainContainer}>
            <form className="row g-3 needs-validation" method="POST" onSubmit={onSubmit} style={styles.form} noValidate>
                <h1 style={styles.heading}>REGISTER</h1>

                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        name={RegisterFormKeys.FirstName}
                        value={values[[[RegisterFormKeys.FirstName]]]}
                        onChange={changeHandler}
                        placeholder="John"
                        required
                    />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name={RegisterFormKeys.LastName}
                        value={values[[[RegisterFormKeys.LastName]]]}
                        onChange={changeHandler}
                        placeholder="Doe"
                        required
                    />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationCustomEmail" className="form-label">Email</label>
                    <div className="input-group has-validation">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name={RegisterFormKeys.Email}
                            value={values[[[RegisterFormKeys.Email]]]}
                            onChange={changeHandler}
                            placeholder="john@doe.com"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <div className="invalid-feedback">
                            Please enter a valid email.
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationPassword" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name={RegisterFormKeys.Password}
                        value={values[[[RegisterFormKeys.Password]]]}
                        onChange={changeHandler}
                        required
                    />
                    <div className="invalid-feedback">
                        Please provide a valid password.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationRepeatPassword" className="form-label">Repeat Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="repeatPassword"
                        name={RegisterFormKeys.RepeatPassword}
                        value={values[[[RegisterFormKeys.RepeatPassword]]]}
                        onChange={changeHandler}
                        required
                    />
                    <div className="invalid-feedback">
                        Please repeat the password correctly.
                    </div>
                </div>
                {/* <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label className="form-check-label" htmlFor="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div> */}
                <div className="signup-link">
                    Already a member? <Link to="/login">Log in now</Link>
                </div>
                <div className="col-12" style={styles.buttonContainer}>
                    <button className="btn btn-primary" type="submit" style={styles.button}>Register</button>
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
        maxWidth: "600px",
        borderColor: "#ffe45e",
        boxShadow: "1px 2px 15px 10px rgba(20, 20, 20, 0.1)"
        // alignItems: "center",
    },
    form: {
        // paddingTop: "5%",
        paddingLeft: "10%",
        paddingRight: "10%",

        // paddingBottom: "5%",

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
export default Register;

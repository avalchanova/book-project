import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: "",
    });


    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, email, password, repeatPassword);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "repeatPassword") {
            setRepeatPassword(value);
        }
    };
    return (
        <div className="card border-4 rounded-3 mb-3" style={styles.mainContainer}>
            <form className="row g-3 needs-validation" style={styles.form} noValidate>
                <h1 style={styles.heading}>REGISTER</h1>

                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" name='firstName' id="firstName" value={firstName} placeholder="John" onChange={(e) => handleInputChange(e)} required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" name='lastName' id="lastName" value={lastName} placeholder="Doe" onChange={(e) => handleInputChange(e)} required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationCustomEmail" className="form-label">Email</label>
                    <div className="input-group has-validation">
                        <input type="text" className="form-control" name='email' id="email" value={email} placeholder="john@doe.com" aria-describedby="inputGroupPrepend" onChange={(e) => handleInputChange(e)} required />
                        <div className="invalid-feedback">
                            Please enter a valid email.
                        </div>
                    </div>
                </div>
                {/* TODO: change type="password" */}
                <div className="col-md-6">
                    <label htmlFor="validationPassword" className="form-label">Password</label>
                    <input type="text" className="form-control" name='password' id="password" value={password} onChange={(e) => handleInputChange(e)} required />
                    <div className="invalid-feedback">
                        Please provide a valid password.
                    </div>
                </div>
                {/* TODO: change type="password" */}
                <div className="col-md-6">
                    <label htmlFor="validationRepeatPassword" className="form-label">Repeat Password</label>
                    <input type="text" className="form-control" name='repeatPassword' id="repeatPassword" value={repeatPassword} onChange={(e) => handleInputChange(e)} required />
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
                    <button className="btn btn-primary" type="submit" style={styles.button} onClick={onSubmitHandler}>Register</button>
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
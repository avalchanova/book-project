import React from 'react';

const Register = () => {
    return (
        <form class="row g-3 needs-validation" style={styles.form} novalidate>
            <div class="col-md-6">
                <label for="validationCustom01" class="form-label">First name</label>
                <input type="text" class="form-control" id="validationCustom01" placeholder="John" required />
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class="col-md-6">
                <label for="validationCustom02" class="form-label">Last name</label>
                <input type="text" class="form-control" id="validationCustom02" placeholder="Doe" required />
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class="col-md-12">
                <label for="validationCustomEmail" class="form-label">Email</label>
                <div class="input-group has-validation">
                    <input type="text" class="form-control" id="validationCustomEmail" aria-describedby="inputGroupPrepend" required />
                    <div class="invalid-feedback">
                        Please choose a email.
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <label for="validationPassword" class="form-label">Password</label>
                <input type="text" class="form-control" id="validationPassword" required />
                <div class="invalid-feedback">
                    Please provide a valid password.
                </div>
            </div>
            <div class="col-md-6">
                <label for="validationRepeatPassword" class="form-label">Repeat Password</label>
                <input type="text" class="form-control" id="validationRepeatPassword" required />
                <div class="invalid-feedback">
                    Please repeat the password correctly.
                </div>
            </div>
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label class="form-check-label" for="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <div class="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
            </div>
            <div class="col-12" style={styles.buttonContainer}>
                <button class="btn btn-primary" type="submit" style={styles.button}>Register</button>
            </div>
        </form>
    );
};

const styles = {
    form: {
        paddingTop: "50px",
        paddingLeft: "30%",
        paddingRight: "30%"
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
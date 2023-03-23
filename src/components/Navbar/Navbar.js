import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={styles.navBarContainer}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/"><img src="../logo_transparentBackground.png" style={styles.logo} alt="Logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalogue">Catalogue</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">Create</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 navbar-right">

                        <li className="nav-item" style={styles.navListItem}>
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item" style={styles.navListItem}>
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </li>
                        <li className="nav-item" style={styles.navListItem}>
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </ul>
                    <div className="navbar-nav navbar-right mb-2 mb-lg-0" style={styles.navBarAuth}>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const styles = {
    logo: {
        height: '50px',
    },
    navBarAuth: {
        display: 'flex',
        flexDirection: 'row'
    },
    navListItem: {
        listStyleType: 'none'
    },
    navBarContainer: {
        backgroundColor: 'rgb(202 225 242)'
    }
};

export default Navbar;
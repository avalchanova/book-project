import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={styles.navBarContainer}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src="../logo_transparentBackground.png" style={styles.logo} alt="Logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/catalogue">Catalogue</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/create">Create</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 navbar-right">

                        <li className="nav-item" style={styles.navListItem}>
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item" style={styles.navListItem}>
                            <a className="nav-link" href="/logout">Logout</a>
                        </li>
                        <li className="nav-item" style={styles.navListItem}>
                            <a className="nav-link" href="/register">Register</a>
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
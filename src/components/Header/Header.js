// TODO CSS: import styles from './Navigation.module.css';
import { AuthContext } from '../../contexts/AuthContext.js';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import styles from './Header.module.css';


const Header = () => {
    // TODO: add first name of the logged in user in the header
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <nav className={styles.navigation}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><img id="logo" src="../logo_transparentBackground.png" alt="Logo" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/catalogue">Catalogue</NavLink>
                            </li>
                            {/* Logged-in Users */}
                            {isAuthenticated && (
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/create">Create</NavLink>
                                </li>
                            )}
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0 navbar-right">

                            <li className="nav-item" id="login">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item" id="register">
                                <NavLink className="nav-link" to="/register">Register</NavLink>
                            </li>
                            {/* Logged-in Users */}
                            {isAuthenticated && (
                                <li className="nav-item" id="logout">
                                    <NavLink className="nav-link" to="/logout">Logout</NavLink>
                                </li>
                            )}
                        </ul>
                        <div className="navbar-nav navbar-right mb-2 mb-lg-0" id="navBarAuth">
                        </div>
                    </div>
                </div>
            </nav>
        </nav>
    );
};

// TODO: css must be in seperate files with each component(in the certain folder, probably like modules);
// const styles = {
//     logo: {
//         height: '50px',
//     },
//     navBarAuth: {
//         display: 'flex',
//         flexDirection: 'row'
//     },
//     navListItem: {
//         listStyleType: 'none'
//     },
//     navBarContainer: {
//         backgroundColor: 'rgb(202 225 242)'
//     }
// };

export default Header;
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext.js';

const Header = () => {
    const { isAuthenticated, name } = useContext(AuthContext);

    return (
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
                            <NavLink className="nav-link active" to="/catalogue">Catalogue</NavLink>
                        </li>
                        {isAuthenticated && (
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/create">Create</NavLink>
                            </li>
                        )}
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 navbar-right">
                        {!isAuthenticated && (
                            <li className="nav-item" id="login">
                                <NavLink className="nav-link active" to="/login">Login</NavLink>
                            </li>
                        )}
                        {!isAuthenticated && (
                            <li className="nav-item" id="register">
                                <NavLink className="nav-link active" to="/register">Register</NavLink>
                            </li>
                        )}
                        {isAuthenticated && (
                            <li>
                                <NavLink className="nav-link active" to="#"> Hi, {name}</NavLink>
                            </li>
                        )}
                        {isAuthenticated && (
                            <li className="nav-item" id="logout">
                                <NavLink className="nav-link active" to="/logout">Logout</NavLink>
                            </li>
                        )}
                    </ul>
                    <div className="navbar-nav navbar-right mb-2 mb-lg-0" id="navBarAuth">
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
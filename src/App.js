import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { bookServiceFactory } from './services/bookService.js';
import { authServiceFactory } from './services/authService.js';
import { AuthContext } from './contexts/AuthContext.js';

// TODO: create an Edit Page
import Home from './components/Home/Home.js';
import Header from './components/Header/Header.js';
import Create from './components/Create/Create.js';
import Login from './components/Login/Login.js';
import Logout from './components/Logout/Logout.js';
import Register from './components/Register/Register.js';
import Footer from './components/Footer/Footer.js';
import Catalogue from './components/Catalogue/Catalogue.js';
import BookDetails from './components/BookDetails/BookDetails.js';

function App() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [auth, setAuth] = useState({});
    const bookService = bookServiceFactory(auth.accessToken);
    const authService = authServiceFactory(auth.accessToken);

    useEffect(() => {
        bookService.getAll()
            .then(result => {
                setBooks(result);
            });
    }, []);
    // празният масив гласи: При първото маунтване на Аpp компонента
    // оттам нататък всички компоненти в App, ще имат достъп до този state

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            console.log(result);
            setAuth(result);
            navigate('/catalogue');
        } catch (error) {
            // TODO: better error handling
            console.log(error.message);
        }
    };

    const onRegisterSubmit = async (values) => {
        const { repeatPassword, ...registerData } = values;
        // in values there are a few properties like first and last name, email... and by destructing
        // we are extracting the repeatPass because we do not need it saved on the server
        // and we are saving a new object with the values we want called registerData

        if (repeatPassword !== registerData.password) {
            // TODO: error handling
            return;
        }
        try {
            const result = await authService.register(registerData);
            setAuth(result); // ?? again what is happening here
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    const onLogout = async () => {
        await authService.logout(); // log out of server
        setAuth({}); // emptying the auth which logs out of the client side as well
    };

    const onCreateSubmit = async (data) => {
        const newBook = bookService.create(data);
        // adding to state:
        setBooks(state => [...state, newBook]);

        navigate('/catalogue');
    };

    const onBookEditSubmit = async (values) => {
        const result = await bookService.edit(values._id, values);
        setBooks(state => state.map(x => x._id === values._id ? result : x)); // ?? what is happening here
        navigate(`/catalogue/${values._id}`);
    };


    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        // userFirstName: auth.FirstName,
        isAuthenticated: !!auth.accessToken
        // isAuthenticated will check if there is an access token
        // this is double negation: it returns each truthy value in true and each falsy value in false
        // for instance a string "afvjd" will be converted in false and then finally in true
    };
    // console.log(userFirstName);

    return (
        <AuthContext.Provider value={contextValues}>
            {/* we created auth context to send data to the forms (like the login form) */}
            <div className="App" style={styles.appContainer}>
                <Header />
                <main id='main-content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/create' element={<Create onCreateSubmit={onCreateSubmit} />} />
                        <Route path='/catalogue' element={<Catalogue books={books} />} />
                        <Route path='/catalogue/:bookId' element={<BookDetails />} />
                        {/* <Route path='/catalogue/:bookId/edit' element={<Edit onBookEditSubmit={onBookEditSubmit} />} /> */}
                    </Routes>
                </main>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
};
const styles = {
    appContainer: {
        minHeight: "100vh",
        position: "relative"
    }
};
export default App;

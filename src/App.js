import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './components/Home/Home.js';
import Header from './components/Header/Header.js';
import Create from './components/Create/Create.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Footer from './components/Footer/Footer.js';
import Catalogue from './components/Catalogue/Catalogue.js';
import BookDetails from './components/BookDetails/BookDetails.js';
import * as bookService from './services/bookService.js';

function App() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        bookService.getAll()
            .then(result => {
                setBooks(result);
            });
    }, []);
    // празният масив гласи: При първото маунтване на Аpp компонента, нека да се изпълни тази функция в useEffect-a
    // оттам нататък всички компоненти в App, ще имат достъп до този state

    const onCreateSubmit = async (data) => {
        const newBook = bookService.create(data);
        // adding to state
        setBooks(state => [...state, newBook]);

        // redirecting to catalogue
        navigate('/catalogue');
    };
    return (
        <div className="App" style={styles.appContainer}>
            <Header />
            <main id='main-content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create' element={<Create onCreateSubmit={onCreateSubmit} />} />
                    <Route path='/catalogue' element={<Catalogue books={books} />} />
                    <Route path='/details' element={<BookDetails />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
};
const styles = {
    appContainer: {
        minHeight: "100vh",
        position: "relative"
    }
};
export default App;

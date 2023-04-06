import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.js';
import { BookProvider } from './contexts/BookContext.js';

// TODO: create an Edit Page
import Home from './components/Home/Home.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Create from './components/Create/Create.js';
import Login from './components/Login/Login.js';
import Logout from './components/Logout/Logout.js';
import Register from './components/Register/Register.js';
import Catalogue from './components/Catalogue/Catalogue.js';
import BookDetails from './components/BookDetails/BookDetails.js';
import { RouteGuard } from './components/common/RouteGuard.js';
// import { BookOwner } from './components/common/BookOwner.js';


function App() {
    return (
        <AuthProvider>
            <BookProvider>
                <div className="App" style={styles.appContainer}>
                    <Header />
                    <main id='main-content'>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/catalogue' element={<Catalogue />} />
                            <Route path='/catalogue/:bookId' element={<BookDetails />} />
                            <Route element={<RouteGuard />}>
                                {/* EDIT is here */}
                                <Route path='/create' element={<Create />} />
                                <Route path='/logout' element={<Logout />} />
                            </Route>
                            {/* <Route path='/catalogue/:bookId/edit' element={<Edit onBookEditSubmit={onBookEditSubmit} />} /> */}
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </BookProvider>
        </AuthProvider>
    );
};
const styles = {
    appContainer: {
        minHeight: "100vh",
        position: "relative"
    }
};
export default App;

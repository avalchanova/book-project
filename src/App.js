import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Navbar from './components/Navbar/Navbar.js';
import Create from './components/Create/Create.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Footer from './components/Footer/Footer.js';

function App() {
    return (
        <div className="App">
            <Navbar />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<Create />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;

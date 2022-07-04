import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './component/About'
import User from "./component/User"
import AddUser from "./component/AddUser"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Navbar />
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/about' element={<About />} />
            <Route path='/user/:userId' element={<User />} />
            <Route path='/AddUser' element={<AddUser />} />
        </Routes>
    <Footer />
    </BrowserRouter>
);

reportWebVitals();

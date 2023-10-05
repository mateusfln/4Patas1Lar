import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Error from './routes/Error';
import Footer from './components/Footer';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Adopt from './routes/Adopt';
import Donate from './routes/Donate';
import CommonQuestions from './routes/CommonQuestions';
import AboutUs from './routes/AboutUs';
import Member from './routes/Member';
import AdoptionForm from './routes/AdoptionForm';
import ThanksForAdopt from './routes/ThanksForAdopt';
import ThanksForSend from './routes/ThanksForSend';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/adopt' element={<Adopt/>}/>
      <Route path='/donate' element={<Donate/>}/>
      <Route path='/commonQuestions' element={<CommonQuestions/>}/>
      <Route path='/aboutUs' element={<AboutUs/>}/>
      <Route path='/member' element={<Member/>}/>
      <Route path='/adoptionForm' element={<AdoptionForm/>}/>
      <Route path='/thanksForSend' element={<ThanksForSend/>}/>
      <Route path='/thanksForAdopt' element={<ThanksForAdopt/>}/>
      <Route path='/*' element={<Home />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
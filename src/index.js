import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Landing_page/home/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Pricing from './Landing_page/pricing/PricingPage';
import Products from './Landing_page/products/ProductsPage';
import About from './Landing_page/about/AboutPage';
import Support from './Landing_page/support/SupportPage';
import SignUp from './Landing_page/signup/SignUp';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import NotFound from './Landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/' element={<HomePage></HomePage>}></Route>
  <Route path='/signup' element={<SignUp></SignUp>}></Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/products' element={<Products></Products>}></Route>
  <Route path='/pricing' element={<Pricing></Pricing>}></Route>
  <Route path='/support' element={<Support></Support>}></Route>
  <Route path='*' element={<NotFound/>}></Route>
 </Routes>
 <Footer/>
 </BrowserRouter>);

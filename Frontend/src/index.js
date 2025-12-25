import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import Homepage from './Landing Page/home/Homepage';
import Signup from './Landing Page/Signup/Signup'; 
import AboutPage from './Landing Page/about/AboutPage';
import ProductPage from './Landing Page/products/productPage';
import PricingPage from './Landing Page/pricing/PricingPage';
import SupportPage from './Landing Page/support/SupportPage';
import Navbar from './Landing Page/Navbar';
import Footer from './Landing Page/Footer';
import NotFound from './Landing Page/NotFound'; {/*if user search for a page which not exist */}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/about" element={<AboutPage/>}/>
  <Route path="/product" element={<ProductPage/>}/>
  <Route path="/pricing" element={<PricingPage/>}/>
  <Route path="/support" element={<SupportPage/>}/>
  <Route path="*" element={<NotFound/>}/>


 </Routes>
 <Footer/>
 </BrowserRouter>
);
//  path="/" home path , on this path which paticular component will be open
//like localhost:3000/ mean homepage will open
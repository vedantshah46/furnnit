import './App.css';
import Homepage from './MyComponents/Homepage';
import Team from './MyComponents/Team';
import Navbar from './MyComponents/Navbar';
import React from 'react';

//React Router 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar_Blog from './MyComponents/Navbar_Blog';
import Blog_detail from './MyComponents/Blog_detail';
import About_Us from './MyComponents/About_Us';
import Checkout from './MyComponents/Checkout';
import ContactUs from './MyComponents/ContactUs';
import Cart from './MyComponents/Cart';
import Shop from './MyComponents/Shop';
import { CartContext } from './MyComponents/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path="team" element={<Team />} />
            <Route path="readMore" element={<Blog_detail />} />
            <Route path="aboutUs" element={<About_Us />} />
            <Route path="homepage" element={<Homepage />} />
            <Route path="blog" element={<Navbar_Blog />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="checkOut" element={<Checkout />} />
            <Route path="cart" element={<Cart />} />
            <Route path="shop" element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
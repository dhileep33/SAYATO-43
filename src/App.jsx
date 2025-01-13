import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

// res

import BR from './dhileep/breakfast.jsx'
import Lunch from './dhileep/lunch.jsx'
import Dinner from './dhileep/dinner.jsx'
import Dessert from './dhileep/dd.jsx'
import Contact from './dhileep/contact.jsx'
import Cart from './dhileep/Cart.jsx'
import Pay from './dhileep/Payment.jsx'
import SA from './dhileep/saya.jsx'



const App = () => {
  const [cart,setCart]=useState([])
  return (
    <>

      <BrowserRouter>



        <Routes>
           <Route path='/H' element={<SA cart={cart} setCart={setCart} />} />
          <Route path="/b" element={<BR  cart={cart} setCart={setCart}/>} />
          <Route path="/l" element={<Lunch cart={cart} setCart={setCart} />} />
          <Route path="/d" element={<Dinner cart={cart} setCart={setCart} />} />
          <Route path="/dr" element={<Dessert cart={cart} setCart={setCart}/>} />
          <Route path="/C" element={<Contact cart={cart} setCart={setCart}/>} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
          <Route path="/pay" element={<Pay cart={cart} setCart={setCart}/>} /> 
          
          
          
        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
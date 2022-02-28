import React, { useState,useContext } from 'react';

import { CarritoContext } from '../Context/CarritoProvedor'



const Cart = () => {
  const {carrito} = useContext(CarritoContext);
  console.log(carrito)
  return (
    <div>{carrito.length}</div>
  )
}

export default Cart
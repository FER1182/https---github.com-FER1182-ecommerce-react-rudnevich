
import React, { useState,useContext } from 'react';
import { CarritoContext } from './Context/CarritoProvedor';

import Carrito from '../images/shopping-cart.png';
import { Link } from "react-router-dom";

const CartWidget = () => {

    const {carrito,vaciarCarrito} = useContext(CarritoContext);
    return <div>
        <Link to={"/cart"} className='btn'>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            <img src={Carrito} width={30} alt="..." />
            <p>Productos ({carrito.length})</p>
        </Link>
    </div>
};

export default CartWidget;

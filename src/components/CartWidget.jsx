import React from 'react';
import reactDom from 'react-dom';
import Carrito from '../images/shopping-cart.png';
import {link} from "react-router-dom";

const CartWidget = () => {
    return <div>
        <div>
            
         <img src={Carrito} width={50} alt="..."/>
          <p>Productos ()</p>  
          </div> 
    </div>;
};

export default CartWidget;

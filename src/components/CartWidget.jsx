import React from 'react';
import Carrito from '../images/shopping-cart.png';

const CartWidget = () => {
    return <div>
        <div>
         <img src={Carrito} width={50} alt="..."/>
          <p>Productos ()</p>  
          </div> 
    </div>;
};

export default CartWidget;

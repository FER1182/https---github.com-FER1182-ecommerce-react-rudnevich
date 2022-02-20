import React from 'react';

import Carrito from '../images/shopping-cart.png';
import { Link } from "react-router-dom";

const CartWidget = () => {
    return <div>
        <Link to={"/cart"} className='btn'>

            <img src={Carrito} width={30} alt="..." />
            <p>Productos ()</p>
        </Link>
    </div>
};

export default CartWidget;

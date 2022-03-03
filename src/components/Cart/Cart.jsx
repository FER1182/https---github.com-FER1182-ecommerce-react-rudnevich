import React, { useState, useContext } from 'react';

import { CarritoContext } from '../Context/CarritoProvedor'



const Cart = () => {
  const { carrito } = useContext(CarritoContext);

return (
    <div>

      {carrito.map((item) => 
      
      <div className="col-3" key={item.itemDetalle.datos.id}>
      {console.log(item)}
        <div className="card">
          <img src={item.itemDetalle.datos.pictureUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">art.{item.itemDetalle.datos.id}</h6>
            <h5 className="card-title">{item.itemDetalle.datos.title}</h5>
            <h5 className="card-description">$ {item.price}</h5>
            
          </div>
        </div>
      </div>)}
    </div>
  )
}

export default Cart
import React, { useState, useContext } from 'react';

import { CarritoContext } from '../Context/CarritoProvedor'



const Cart = () => {
  const { carrito,eliminarDelCarrito } = useContext(CarritoContext);

return (
    <div>

      {carrito.map((item) => 
      <div class="card mb-3" style={{maxWidth: "540px"}} key={item.itemDetalle.id}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={item.itemDetalle.pictureUrl} class="img-fluid rounded-start" alt="..."/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">art.{item.itemDetalle.id}</h5> 
           
            <h5 className="card-description">$ {item.itemDetalle.price}</h5>
          </div>
        </div>
      </div>
      <button onClick={()=>eliminarDelCarrito(item.itemDetalle.id)}>eliminar del carrito</button>
      </div>)}
      </div>
      
    
  )
}

export default Cart
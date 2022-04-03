import React, { useState, useContext } from 'react';
import Checkout from '../Checkout/Checkout';

import { CarritoContext } from '../Context/CarritoProvedor'



const Cart = () => {
  const { totalCarrito, carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CarritoContext);


  return (
    <>
      {carrito.length > 0 ? (
        <div className="container">
          <div className="w-100 d-flex">

            <div className="container col-6">
              <Checkout carrito={carrito} />
            </div>

            <div className="container col-6">

              {carrito.map((item) =>
                <div className="card mb-3" style={{ width: "380px" }} key={item.itemDetalle.id}>
                  <div className="row g-0">

                    <div className="col-md-4">
                      <img src={item.itemDetalle.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-4 align-middle">

                      <h5 className="align-middle ">art.{item.itemDetalle.modelo}</h5>
                      <h5 className="card-description">$ {item.itemDetalle.precio}</h5>
                    </div>
                    <div className="col-md-4">

                      <h5 className="card-description"> cant. {item.cantidad}</h5>
                      <h2 className="card-description"> subtotal $ {item.subTotal}</h2>

                    </div>
                  </div>
                  <button onClick={() => eliminarDelCarrito(item.itemDetalle.id)}>eliminar del carrito</button>
                </div>)}
              <h1>el total de la compra es $ {totalCarrito()}</h1>
            </div>
          </div>
          <div className="container">
            <div className="row align-items-end">
              <button type="button" className="btn btn-outline-success btn-lg" onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
          </div>
        </div>
      ) : <div className="container">
        <h1>Carrito Vacio</h1>
          <div className="row align-items-end">
            <a class="btn btn-outline-secondary btn-lg" href="/"  role="button">Agregar articulos al carrito</a>
          </div>
      </div>
      }
    </>


  )
}

export default Cart
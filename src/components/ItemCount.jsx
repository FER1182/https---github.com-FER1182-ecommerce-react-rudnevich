import React, { useState,useContext } from 'react';
import { CarritoContext } from './Context/CarritoProvedor';

const ItemCount = ({ item,stock, initial}) => {

  
  const [contador, setContador] = useState(initial);
  const {agregarAlCarrito,estaEnCarrito} = useContext(CarritoContext);

  const onAdd = () => setContador(contador + 1);


  
  return <>
    <div className="container">
      <div className="row">

        <div className="col">
          <button type="button" className="btn btn-secondary" disabled={contador >1 ? false : true} onClick={() => setContador(contador - 1)}> - </button>
        </div>
        <div className="col">
          <p style={{ fontSize: "1.5rem" }}>{contador}</p>

        </div>
        <div className="col">
          <button type="button" className="btn btn-secondary" disabled={contador === stock ? true : false} onClick={onAdd}> +</button>
        </div>
         <button onClick={()=>agregarAlCarrito(item,contador)} className="btn btn-success">Agregar a Carrito</button> 
      </div>
    </div>

  </>;
};


export default ItemCount;

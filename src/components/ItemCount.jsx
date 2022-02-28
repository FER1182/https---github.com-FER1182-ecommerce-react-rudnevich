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
          {contador > 1 && <button onClick={() => setContador(contador - 1)}> - </button>}
        </div>
        <div className="col">
          <p>{contador}</p>

        </div>
        <div className="col">
          <button disabled={contador === stock ? true : false} onClick={onAdd}> +</button>
        </div>

        <button disabled={()=>estaEnCarrito(item)} onClick={()=>agregarAlCarrito(item,contador)} className="btn btn-success">Agregar a Carrito</button>
      </div>
    </div>

  </>;
};


export default ItemCount;

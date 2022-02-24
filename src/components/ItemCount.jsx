import React, { useState } from 'react';


const ItemCount = ({ stock, initial, agregarCompra }) => {

  
  const [contador, setContador] = useState(initial);
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

        <button onClick={agregarCompra()} className="btn btn-success">Agregar a Carrito</button>
      </div>
    </div>

  </>;
};


export default ItemCount;

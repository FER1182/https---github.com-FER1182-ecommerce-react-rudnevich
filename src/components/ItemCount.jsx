import React, { useState } from 'react';

import foto3 from '../images/29919.jpg'

const ItemCount = ({ stock, initial, onAdd }) => {

  const [contador, setContador] = useState(initial);

  onAdd = () => setContador(contador + 1);
  return <>
    <div class="row justify-content-md-center">
      <div className="col-3">
        <div class="card">
          <img src={foto3} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Camisa</h5>
            <div class="container">
              <div class="row">
                <div class="col">
                  {contador > 1 && <button onClick={() => setContador(contador - 1)}> - </button>}
                </div>
                <div class="col">
                  <p>{contador}</p>

                </div>
                <div class="col">
                  <button disabled={contador === stock ? true : false} onClick={onAdd}> +</button>
                </div>
              </div>

              <button class="btn btn-success">Agregar a Carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};


export default ItemCount;

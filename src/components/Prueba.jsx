import React, { useState } from 'react';
import foto3 from '../images/29919.jpg'
const Prueba = ({ nombre }) => {

  const [contador, setContador] = useState(1);
  const stock = 20;

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
                  <button onClick={() => setContador(contador - 1)}> - </button>
                </div>
                <div class="col">
                  <p>{contador}</p>
                  {/* <input type="text" className="form-control" value={contador} aria-label="Last name" /> */}
                </div>
                <div class="col">
                  <button onClick={() => setContador(contador + 1)}> +</button>
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

export default Prueba;

import React, { useState, useContext } from 'react'
import { CarritoContext } from './Context/CarritoProvedor';
import { Link } from "react-router-dom";
import ItemDetailContainer from './ItemDetailContainer';
import ItemCount from './ItemCount';

const ItemDetail = ({ datos, art }) => {

    const itemSeleccionado = datos.find(a => a.id === art)
    const [visible, setVisible] = useState(true)
    const { estaEnCarrito } = useContext(CarritoContext);
    const agregarCompra = () => {

        setVisible(false);

    }

    return (

        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card" style={{ maxWidth: "20rem", marginLeft: "20%" }}>
                        <img src={itemSeleccionado.img} className="card-img-top" style={{}} alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">art.{itemSeleccionado.modelo}</h6>
                            <h6 className="card-title">{itemSeleccionado.nombre}</h6>
                            <h5 className="card-description">$ {itemSeleccionado.precio}</h5>
                            <div className="container">
                                <p>{itemSeleccionado.description}</p>
                            </div>

                        </div>
                        {estaEnCarrito(itemSeleccionado.id) ? 
                                <div className='col'> 
                                    <p>El articulo ya esta en el carrito</p>  
                                    <button type="button" class="btn btn-warning"><Link to={"/cart"} className='btn'>Finalizar Compra</Link></button>
                                </div> :
                            <ItemCount item={itemSeleccionado} stock={itemSeleccionado.stock} initial={1} agregarCompra={agregarCompra} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
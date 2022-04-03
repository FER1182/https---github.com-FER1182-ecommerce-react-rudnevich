import React, { useState } from 'react'

import ItemDetailContainer from './ItemDetailContainer';
import ItemCount from './ItemCount';

const ItemDetail = ({ datos, art }) => {

    const itemSeleccionado = datos.find(a => a.id === art)
    const [visible, setVisible] = useState(true)

    const agregarCompra = () => {

        setVisible(false);

    }

    return (

        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card" style={{ maxWidth: "20rem",marginLeft:"20%" }}>
                        <img src={itemSeleccionado.img} className="card-img-top" style={{}} alt="..." />
                        <div className="card-body">
                            <h6 className="card-title">art.{itemSeleccionado.modelo}</h6>
                            <h6 className="card-title">{itemSeleccionado.nombre}</h6>
                            <h5 className="card-description">$ {itemSeleccionado.precio}</h5>
                            <div className="container">
                                <p>{itemSeleccionado.description}</p>
                            </div>

                        </div>
                        {visible && <ItemCount item={itemSeleccionado} stock={itemSeleccionado.stock} initial={1} agregarCompra={agregarCompra} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
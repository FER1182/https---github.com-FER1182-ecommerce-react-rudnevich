import React, { useState } from 'react'

import ItemDetailContainer from './ItemDetailContainer';
import ItemCount from './ItemCount';

const ItemDetail = ({ datos, art}) => {
    
    const itemSeleccionado = datos.find(a=> a.id === art) 
        const [visible, setVisible] = useState(true)
    console.log(itemSeleccionado)
    const agregarCompra = () => {
       
        setVisible(false);
        
    }

    return (
        <div className="row justify-content-md-center">

            <div className="col-3">
                <div className="card">
                    <img src={itemSeleccionado.fotoUrl} className="card-img-top" style={{ height: 200  ,
 width: 200}} alt="..." />
                    <div className="card-body">
                        <h6 className="card-title">art.{itemSeleccionado.id}</h6>
                        <h6 className="card-title">{itemSeleccionado.title}</h6>
                        <h5 className="card-description">$ {itemSeleccionado.price}</h5>
                        <div className="container">
                            <p>{itemSeleccionado.description}</p>
                        </div>
                    
                    </div>
                     {visible && <ItemCount item={itemSeleccionado} stock={itemSeleccionado.stock} initial={1} agregarCompra={agregarCompra} />} 
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
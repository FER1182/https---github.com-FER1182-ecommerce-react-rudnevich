import React from 'react'
import { Link } from "react-router-dom";

const Item = ({ item }) => {

    return (
        <div className="col-3">
            <div className="card">
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">art.{item.modelo}</h6>
                    <h5 className="card-title">{item.nombre}</h5>
                    <h5 className="card-description">$ {item.precio}</h5>
                    <div className="container">
                        <Link to={`/item/${item.id}`} className="btn btn-success">Detalle Del Producto</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Item
import React from 'react'
import { Link } from "react-router-dom";

const Item = ({ item }) => {

    
    return (
        <div className="col-3">
            <div className="card">
                <img src={item.pictureUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">art.{item.id}</h6>
                    <h5 className="card-title">{item.title}</h5>
                    <h5 className="card-description">$ {item.price}</h5>
                    <div className="container">
                        <Link to={`/item/${item.id}`} className="btn btn-success">Detalle Del Producto</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Item
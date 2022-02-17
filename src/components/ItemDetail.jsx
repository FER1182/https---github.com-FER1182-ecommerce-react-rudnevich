import React from 'react'
import ItemDetailContainer from './ItemDetailContainer';

const ItemDetail = ({datos}) => {
    
    return (
        <div className="row justify-content-md-center">
            <div className="col-3">
                <div className="card">
                    <img src={datos.fotoUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{datos.title}</h5>
                        <h5 className="card-description">$ {datos.price}</h5>
                        <div className="container">
                            <p>{datos.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
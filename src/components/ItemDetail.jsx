import React from 'react'
import ItemDetailContainer from './ItemDetailContainer';
import ItemCount from   './ItemCount';

const ItemDetail = ({datos ,art}) => {
   
    
    return (
        <div className="row justify-content-md-center">
            
            <div className="col-3">
                <div className="card">
                    <img src={datos.fotoUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h6 className="card-title">art.{art}</h6>
                        <h6 className="card-title">{datos.title}</h6>
                        <h5 className="card-description">$ {datos.price}</h5>
                        <div className="container">
                            <p>{datos.description}</p>
                        </div>

                    </div>
                    <ItemCount stock={datos.stock} initial={1}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
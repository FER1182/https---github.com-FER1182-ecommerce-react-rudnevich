import React from 'react'


const Item = ({ item }) => {

console.log(item);
    return (
        <div className="row justify-content-md-center">
            <div className="col-3">
                <div className="card">
                    <img src={item.pictureUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <h5 className="card-description">$ {item.price}</h5>
                        <div className="container">
                            <button className="btn btn-success">Detalle Del Producto</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
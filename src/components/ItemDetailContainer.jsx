import React, { useState, useEffect } from 'react';
import foto1 from '../images/28911.jpg';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {


    const detalle = [
        {
            id: "29950",
            title: "camisa",
            price: 1500,
            description: "camisa manga larga con puntilla y volado",
            fotoUrl: foto1,
        },

    ];


    const [detail, setDetail] = useState([]);

    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(detalle)
            }, 2000);
        }).then((res) => setDetail(res));
        return () => {
            setDetail([])
        };
    }, []);

    console.log(detail)
    return (
        <div >
            <ItemDetail datos={detail} />
        </div>
    )
}

export default ItemDetailContainer
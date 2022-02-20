import React, { useState, useEffect } from 'react';
import foto1 from '../images/28911.jpg';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const params = useParams()

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
                resolve(detalle[0])
            }, 1000);
        }).then((resp) => setDetail(resp));
        return () => {
            setDetail([])
        };
    }, []);


    return (
        <div >
            <h1>{params.id}</h1>
            {console.log(detail)}
            <ItemDetail datos={detail} />
        </div>
    )
}

export default ItemDetailContainer
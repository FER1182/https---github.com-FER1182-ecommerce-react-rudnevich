import React, { useState, useEffect } from 'react';
import foto1 from '../images/28911.jpg';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = (producto) => {

    const params = useParams()

    const detalle = [
        {
            id: "29950",
            title: "camisa",
            price: 1500,
            description: "camisa manga larga con puntilla y volado",
            fotoUrl: foto1,
            stock: 20,

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

            <ItemDetail datos={detail} art={params.id} />
        </div>
    )
}

export default ItemDetailContainer
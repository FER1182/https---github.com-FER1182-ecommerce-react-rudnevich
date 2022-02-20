import React, { useState,useEffect } from 'react';
import ItemList from './ItemList';
import foto1 from '../images/28911.jpg'
import foto2 from '../images/29917.jpg'
import foto3 from '../images/29919.jpg'

const ItemListContainer = () => {
const productos = [
            { id: "29950", 
              title: "camisa", 
              price: 1500, 
              pictureUrl: foto1 
            },
            { id: "29420", 
              title: "camisa manga larga", 
              price: 1200, 
              pictureUrl: foto2
            },
            { id: "29951", 
              title: "camisa sin manga", 
              price: 1800, 
              pictureUrl: foto3
            }
];


const [items,setItems]=useState([]);

useEffect(() => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve(productos)
         }, 2000);
        }).then((res) => setItems(res));    

  return () => {
    setItems([])
  };
}, []);
    
 
    return ( <div>
        {console.log("hola")}
        <ItemList datos={items} /> 
    </div>
    );
};

export default ItemListContainer;

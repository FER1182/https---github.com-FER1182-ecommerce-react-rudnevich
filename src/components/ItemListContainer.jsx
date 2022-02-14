import React from 'react';
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
            { id: "29950", 
              title: "camisa sin manga", 
              price: 1800, 
              pictureUrl: foto3
            }
];
    
        const tarea = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000);
    
        })
    
        tarea.then((result) => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        })
        console.log(tarea); 
        
    return <div>
        <ItemList items={productos} />

    </div>;
};

export default ItemListContainer;

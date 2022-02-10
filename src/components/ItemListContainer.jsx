import React from 'react';

const ItemListContainer = ({ greeting }) => {

/*     const data = [{ id: "tr1000", name: "camisa", descripcion: "camisa con tachas", stock: 10 }];

    const tarea = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 3000);

    })

    tarea.then((result) => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })
    console.log(tarea); */

    return <div>

        <h1>{greeting}</h1>
    </div>;
};

export default ItemListContainer;

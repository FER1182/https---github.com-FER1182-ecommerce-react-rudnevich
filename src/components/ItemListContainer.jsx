import React, { useState,useEffect,useContext } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore'
import db from '../service/firebase'
import { CarritoContext } from './Context/CarritoProvedor';


const ItemListContainer = () => {

  const {productos} = useContext(CarritoContext);  

  const categoryId = useParams()
 
  const categoriaProductos = productos.filter((items) => items.categoria === categoryId.id);



    return ( <div>
            <ItemList datos={categoryId.id ? categoriaProductos : productos} /> 
    </div>
    );
};

export default ItemListContainer;

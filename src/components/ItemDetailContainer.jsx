import React, { useState, useEffect ,useContext} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { CarritoContext } from './Context/CarritoProvedor';



const ItemDetailContainer = () => {
    const {productos} = useContext(CarritoContext);
      
    const params = useParams()
  
    
    return (
        <div >

         { <ItemDetail datos={productos} art={params.id} /> }  
        </div>
    )
}

export default ItemDetailContainer
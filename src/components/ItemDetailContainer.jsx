import React, { useState, useEffect ,useContext} from 'react';
import foto1 from '../images/28911.jpg';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { CarritoContext } from './Context/CarritoProvedor';


const ItemDetailContainer = (producto) => {
    const {productos} = useContext(CarritoContext);
        console.log(productos)
    const params = useParams()
 

/*      const [detail, setDetail] = useState([]);
     
     console.log(detail)

    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 1000);
        }).then((resp) => setDetail(resp));
        return () => {
              setDetail([]) 
        };
    }, []); */
    
    
    return (
        <div >

         { <ItemDetail datos={productos} art={params.id} /> }  
        </div>
    )
}

export default ItemDetailContainer
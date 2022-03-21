import React, { useState,useEffect } from 'react';
import { createContext } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../service/firebase'


export const CarritoContext = createContext([]);


const CarritoProvedor = ({children}) => {

//funciones

const agregarAlCarrito = (item,cantidad) => {
    let subTotal= (item.precio * cantidad)
       let itemConQ ={
        itemDetalle:item,
        cantidad:cantidad,
        subTotal:subTotal
        }
    setCarrito([...carrito,itemConQ])
    
}


const eliminarDelCarrito = (itemId)=>{
    let newCarrito= carrito.filter((a)=> a.itemDetalle.id !== itemId)
    setCarrito(newCarrito);
}

const vaciarCarrito = () =>{
    setCarrito([]);
}

const estaEnCarrito = (productosId) =>{
    
    return carrito.some((a)=> a.itemDetalle.id === productosId)
}

const totalCarrito=()=>{
    let total =0
    if(carrito.length>0) total=carrito.map(item=>item.subTotal).reduce((a,b)=> a + b,0); 
    return total 
}

//variables

const getData = async () => {
  try {
      const data = collection(db, "items");//base de datos, y cual coleccion
      const col = await getDocs(data);
      const result = col.docs.map((doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setProductos(result);
  } catch (error) {
      console.log(error);
  }
};
useEffect(()=> {
  getData()
   }, [])


//estados
const [carrito,setCarrito]=useState([]);
const [productos,setProductos]=useState([]);

 //en clase del 21 febrero  
    return (
    <CarritoContext.Provider value={{agregarAlCarrito,carrito,vaciarCarrito,estaEnCarrito,eliminarDelCarrito,productos,totalCarrito}}>
        {children} {/* a quein provees la info */}
        
    </CarritoContext.Provider>
  )
}

export default CarritoProvedor
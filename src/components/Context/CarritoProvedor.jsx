import React, { useState } from 'react'
import { createContext } from 'react'

export const CarritoContext = createContext([]);


const CarritoProvedor = ({children}) => {

//funciones

const agregarAlCarrito = (item,cantidad) => {

    console.log(carrito)
    let itemConQ ={
        itemDetalle:item,
        cantidad:cantidad}

        
    console.log(itemConQ)
    setCarrito([...carrito,itemConQ])
    
}

const eliminarDelCarrito = (itemId)=>{
    let newCarrito= carrito.filter((a)=> a.id !== itemId)
    setCarrito=[newCarrito];
}

const vaciarCarrito = () =>{
    setCarrito([]);
}

const estaEnCarrito = (item) =>{
    return carrito.some((a)=> a.id === item.id)
}


//variables


//estados
const [carrito,setCarrito]=useState([]);


 
 
 //etc



//en clase del 21 febrero  
    return (
    <CarritoContext.Provider value={{agregarAlCarrito,carrito,vaciarCarrito,estaEnCarrito,eliminarDelCarrito}}>
        {children} {/* a quein provees la info */}
        
    </CarritoContext.Provider>
  )
}

export default CarritoProvedor
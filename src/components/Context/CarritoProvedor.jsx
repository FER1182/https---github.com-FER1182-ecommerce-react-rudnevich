import React, { useState } from 'react'
import { createContext } from 'react'

export const CarritoContext = createContext([]);


const CarritoProvedor = ({children}) => {

//funciones

const agregarAlCarrito = (item,cantidad) => {

    let itemConQ =[item,cantidad]
    setCarrito([...carrito,itemConQ])
   
}

const eliminarDelCarrito = (itemId)=>{
    
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
console.log(carrito)

 
 
 //etc



//en clase del 21 febrero  
    return (
    <CarritoContext.Provider value={{agregarAlCarrito,carrito,vaciarCarrito,estaEnCarrito}}>
        {children} {/* a quein provees la info */}
    </CarritoContext.Provider>
  )
}

export default CarritoProvedor
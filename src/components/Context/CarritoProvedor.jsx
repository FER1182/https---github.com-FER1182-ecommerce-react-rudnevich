import React, { useState } from 'react'
import { createContext } from 'react'

export const CarritoContext = createContext([]);


const CarritoProvedor = ({children}) => {

//funciones
const dameUnaAlerta=(texto) =>{
    alert (texto);
}

const agregarAlCarrito = (item) => {
    setCarrito([...carrito,item])
}

//variables

 let nombre="fernando"
 let apellido="rudnevich"
 let edad=39



//estados
const [carrito,setCarrito]=useState([]);

 
 
 //etc



//en clase del 21 febrero  
    return (
    <CarritoContext.Provider value={{nombre,apellido,edad,dameUnaAlerta,agregarAlCarrito,carrito}}>
        {children}
    </CarritoContext.Provider>
  )
}

export default CarritoProvedor
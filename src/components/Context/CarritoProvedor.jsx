import React, { useState } from 'react'
import { createContext } from 'react'
import foto1 from '../../images/28911.jpg'
import foto2 from '../../images/29917.jpg'
import foto3 from '../../images/29919.jpg'
import foto4 from '../../images/27820.jpg'
import foto5 from '../../images/25065.jpg'
import foto6 from '../../images/25222.jpg'
import foto7 from '../../images/26921.jpg'
import foto8 from '../../images/17963.jpg'

export const CarritoContext = createContext([]);


const CarritoProvedor = ({children}) => {

//funciones

const agregarAlCarrito = (item,cantidad) => {

       let itemConQ ={
        itemDetalle:item,
        cantidad:cantidad}

        
   
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
const productos = [
    { id: "28911", 
      title: "Remera con pespunte", 
      price: 1100, 
      pictureUrl: foto1,
      categoria: "remeras" 
    },
    { id: "29917", 
      title: "remera manga larga", 
      price: 1200, 
      pictureUrl: foto2,
      categoria: "remeras"
    },
    { id: "29919", 
      title: "remera sin manga", 
      price: 1100, 
      pictureUrl: foto3,
      categoria: "remeras"
    },
    { id: "27820", 
      title: "short de jean negro", 
      price: 1800, 
      pictureUrl: foto4,
      categoria: "short"
    },
    { id: "25065", 
    title: "camisa sin manga", 
    price: 1600, 
    pictureUrl: foto5,
    categoria: "camisas"
  },
  { id: "25222", 
      title: "camisa larga", 
      price: 2800, 
      pictureUrl: foto6,
      categoria: "camisas"
    },
    { id: "26921", 
      title: "remera con stampa rock", 
      price: 1100, 
      pictureUrl: foto7,
      categoria: "remeras"
    },
    { id: "17962", 
      title: "remera sin manga con botones", 
      price: 900, 
      pictureUrl: foto8,
      categoria: "camisas"
    },
];
console.log(productos)
//estados
const [carrito,setCarrito]=useState([]);


 
 
 //etc



//en clase del 21 febrero  
    return (
    <CarritoContext.Provider value={{agregarAlCarrito,carrito,vaciarCarrito,estaEnCarrito,eliminarDelCarrito,productos}}>
        {children} {/* a quein provees la info */}
        
    </CarritoContext.Provider>
  )
}

export default CarritoProvedor
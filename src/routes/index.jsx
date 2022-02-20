import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import CartWidget from '../components/CartWidget'
import ItemListContainer from '../components/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer'



const Rutas = () => {
    return (
        <BrowserRouter>
             <Menu/> 
            <Routes>
                
                <Route path="/" element={<ItemListContainer/>}/> {/* por defecto la entrada de la aplicacion */}
                <Route path="/category/:id" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas
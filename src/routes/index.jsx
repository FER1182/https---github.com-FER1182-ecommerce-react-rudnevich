import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartWidget from '../components/CartWidget'
import ItemListContainer from '../components/ItemListContainer'


const Rutas = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/> {/* por defecto la entrada de la aplicacion */}
                <Route path="/cart" element={<CartWidget/>}/>
                <Route path="/cart/chekout" element={<chekout/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas
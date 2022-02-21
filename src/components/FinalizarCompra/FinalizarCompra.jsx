import React from 'react'
import { Link } from 'react-router-dom'

const FinalizarCompra = () => {
  return (
    <Link className='btn btn-info' to={'/cart'}>Finalizar Compra</Link>
  )
}

export default FinalizarCompra
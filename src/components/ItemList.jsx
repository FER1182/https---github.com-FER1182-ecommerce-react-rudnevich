import React from 'react'
import Item from './Item';



const ItemList = ({ datos }) => {
  return (
    <div className="container">
      <div className="row align-items-center">
        
          {datos.map((item) => (<Item key={item.id} item={item} />))}
        
      </div>
    </div>
  )
}

export default ItemList
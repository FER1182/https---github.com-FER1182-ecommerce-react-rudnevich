import React from 'react'
import Item from './Item';




const ItemList = ({ datos }) => {
  return (
    <div className="container">
       <div class="col">
        <div className="row">
     
          {datos.map((item) => (<Item key={item.id} item={item} />))}
        </div>
      </div>
    </div>
  )
}

export default ItemList
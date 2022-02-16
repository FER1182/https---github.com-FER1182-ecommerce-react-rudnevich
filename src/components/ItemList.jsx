import React from 'react'
import Item from './Item';



const ItemList = ({datos}) => {
  return (
    <div className="row my-5 justify-content-around">
    {datos.map((item) => (<Item key={item.id} item={item}/>))}
    </div>
  )
}

export default ItemList
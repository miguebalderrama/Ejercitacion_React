import React from 'react'
import Item from '../item/Item'
import "./ItemList.css";

function ItemList({currentProducts}) {
    return (
        <div className="item-list">
          {currentProducts.map((results)=>(
              <Item {...results}/>              
          )
          )}  
        </div>
    )
}

export default ItemList

import React from 'react'
import { Link } from 'react-router-dom';
import Item from '../item/Item'
import "./ItemList.css";

function ItemList({currentProducts}) {
    return (
        <div className="item-list">
          {currentProducts.map((results)=>(
             <Link to={`item/${results.id}`}>               
              <Item {...results}/>
              </Link>               
          )
          )}  
        </div>
    )
}

export default ItemList

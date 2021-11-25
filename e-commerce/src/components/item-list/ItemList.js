import React from 'react'
import { Link } from 'react-router-dom';
import Item from '../item/Item'
import "./ItemList.css";

function ItemList({products}) {
    console.log({products});
    return (
        <div className="item-list">
           {/* <ul>
          {products.map(({id, title, pictureUrl}) => (
            <li key={id}>
              <h3>{title}</h3>
              <img src={pictureUrl} alt=""/>
            </li>))}
        </ul>
        */}
          {products.map(({id, title, pictureUrl,price})=>(
             <Link to={`/item/${id}`}>
              <Item price={price} title={title} url={pictureUrl}/>
              </Link>
          )
          )}
        </div>
    )
}

export default ItemList

import React from 'react'
import Navbar from "../components/NavBar.js";
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import ItemListContainer from "../layouts/item-list-container/ItemListContainer";
import ItemDetailContainer from "../layouts/item-detail-container/ItemDetailContainer";
import NotFound from '../layouts/not-found/NotFound.js';
import CartContainer from '../layouts/cart-container/CartContainer.js';


const Routes =() =>{
    return (
        <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path="/">
            <ItemListContainer className="stylegreeting"greeting="Item list container"/>
            </Route>
            <Route path="/category/:categoryId">
            <ItemListContainer className="stylegreeting"greeting="Item list container"/>
            </Route>
            <Route path="/item/:itemId">
            <ItemDetailContainer/>
            </Route>
            <Route path="/cart">
            <CartContainer/>
            </Route>
            <Route path="*">
            <NotFound/>
            </Route>
            
        </Switch>
        </BrowserRouter>
    )
}

export default Routes

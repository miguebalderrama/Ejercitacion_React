import React, {useContext} from 'react'
import Cart from '../../components/cart/Cart';
import { CartContext } from "../../context/CartContext";


function CartContainer() {
    const { items } = useContext(CartContext);
    


    return (
        <div>
            <p>Mi carrito</p>
            {items.length > 0 ? <Cart items={items}/>: <h2>Carrito vacio</h2>}
        </div>
    )
}

export default CartContainer

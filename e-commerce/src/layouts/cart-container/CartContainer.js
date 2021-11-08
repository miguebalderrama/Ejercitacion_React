import React, {useContext} from 'react'
import Cart from '../../components/cart/Cart';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'


function CartContainer() {
    const { items } = useContext(CartContext);
    


    return (
        <div>
            <p>Mi carrito</p>
            {items.length > 0 ? <Cart items={items}/>:<div> <h2>Carrito vacio</h2> <Link to="/"> <Button variant="outline-primary">
                Volver a la tienda
              </Button></Link> </div>}
        </div>
    )
}

export default CartContainer

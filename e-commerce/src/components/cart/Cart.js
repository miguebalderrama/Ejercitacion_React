import React, {useContext} from 'react'
import { Container } from 'react-bootstrap'
import CartItem from '../cart-item/CartItem'
import { CartContext } from '../../context/CartContext';



function Cart({items}) {
    const { totalPrice } = useContext(CartContext); 
    console.log(totalPrice());

   
    return (
        <Container>
            {items.map(item => ( <CartItem {...item}   /> ) )}
            <h3>Precio Total:   ${totalPrice()} </h3>
                
            
            </Container>
    )
}

export default Cart

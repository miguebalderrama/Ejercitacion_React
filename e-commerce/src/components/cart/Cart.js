import React from 'react'
import { Container } from 'react-bootstrap'
import CartItem from '../cart-item/CartItem'



function Cart({items}) {
    
   
    return (
        <Container>
            {items.map(item => ( <CartItem {...item}   /> ) )}
            <h3>Precio Total : </h3>
                
            
            </Container>
    )
}

export default Cart

import React from 'react'
import { Container } from 'react-bootstrap'
import { products } from '../../data/data'
import Promises from '../../promises/Promises'

function ItemListContainer({className,greeting}) {
    return (
        <Container className={className}>
        <h3>Saludo: {greeting}</h3>
        <Promises products={products}/>
        </Container>
    )
    }

export default ItemListContainer

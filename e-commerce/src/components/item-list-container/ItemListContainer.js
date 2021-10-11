import React from 'react'
import { Container } from 'react-bootstrap'

function ItemListContainer({className,greeting}) {
    return (
        <Container className={className}>
        <h1>Saludo: {greeting}</h1>
        </Container>
    )
}

export default ItemListContainer

import React from 'react'
import { Container } from 'react-bootstrap'

function ItemListContainer({greeting}) {
    return (
        <Container>
        <h1>Saludo: {greeting}</h1>
        </Container>
    )
}

export default ItemListContainer

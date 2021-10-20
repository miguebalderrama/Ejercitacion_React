import React from 'react'
import { Card, Button } from "react-bootstrap";

function Item({id,title,price, pictureUrl}) {
    return (
        <Card style={{ width: '18rem' ,heigth: 300, margin:'0.5rem' }}>
  <Card.Img variant="top" src={pictureUrl} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content. Precio {price}
    </Card.Text>
    <Button variant="primary">Ver detalle</Button>
  </Card.Body>
</Card>
       
    )
}

export default Item

import React from 'react'
import { Card, Button } from "react-bootstrap";

function Item({item}) {
    return (
  <Card style={{ width: '18rem' ,heigth: 300, margin:'0.5rem' }}>
  <Card.Img variant="top" src={item.pictureUrl} />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>
      Precio {item.price}
    </Card.Text>
    <Button variant="primary">Ver detalle</Button>
  </Card.Body>
  </Card>
       
    )
}

export default Item

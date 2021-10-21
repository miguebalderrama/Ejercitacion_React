import React from 'react'
import { Card, Button } from "react-bootstrap";

function Item({id,title,price, pictureUrl}) {
    return (
        <Card style={{ width: '18rem' ,heigth: 300, margin:'0.5rem' }}>
  <Card.Img variant="top" src={pictureUrl} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      Precio {price}
    </Card.Text>
    <Button variant="primary">Ver detalle</Button>
  </Card.Body>
</Card>
       
    )
}

export default Item

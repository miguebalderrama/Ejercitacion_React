import React from 'react'
import { Card } from "react-bootstrap";
import "./item.css";

function Item({pictureUrl,title,price}) {
    return (
  <Card style={{ width: '18rem' ,heigth: 300, margin:'0.5rem',textdecoration:"none" }}>
  <Card.Img variant="top" src={pictureUrl} />
  <Card.Body>
    <Card.Title className="texto">{title}</Card.Title>
    <Card.Text className="texto">
      Precio ${price}
    </Card.Text>
    
  </Card.Body>
  </Card>
       
    )
}

export default Item

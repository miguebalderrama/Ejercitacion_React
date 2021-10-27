import React from "react";
import { Card, Button, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../item-count/ItemCount";

function ItemDetail({id,title, price, pictureUrl,stock,description,quantity,setQuantity}) {
    
  const buy = ()=>{
    if(quantity!==0) console.log("Compramos!!!");  } 

 
    return (
               
        <Container>
        <Card style={{ width: "18rem", margin: "auto" }}>
          <Card.Img  style={{ padding: "10px"}} variant="top" src={pictureUrl} />
          <Card.Body>
            <Card.Title>{price}<br></br>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <ItemCount quantity={quantity} setQuantity={setQuantity} stock={stock}/>
            <div className="d-grid gap-2">  
            {quantity > 0 && (<Link to="/cart">            
              <Button variant="outline-primary"onClick={buy}>Agregar al carrito</Button>
            </Link>)}
            
            </div>
          </Card.Body>
        </Card>
      </Container>        
    )
}

export default ItemDetail


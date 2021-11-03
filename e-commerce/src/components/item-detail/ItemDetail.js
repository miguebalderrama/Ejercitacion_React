import React,{ useState,useContext } from "react";
import { Card, Button, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../item-count/ItemCount";
import { CartContext } from "../../context/CartContext";

function ItemDetail({id,title, price, pictureUrl,stock,description,quantity,setQuantity}) {
   const [stateBuy, setStateBuy] = useState(false);    //state for buy button 
   const {addItem} = useContext(CartContext);  

  const handleAddItem = ()=>{
    if(quantity!==0){
      setStateBuy(true);
    } 
    console.log("Compramos!!!"); 
    
   } 

 
    return (
               
        <Container>
        <Card style={{ width: "18rem", margin: "auto" }}>
          <Card.Img  style={{ padding: "10px"}} variant="top" src={pictureUrl} />
          <Card.Body>
            <Card.Title>{price}<br></br>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            {stateBuy === false &&(<ItemCount quantity={quantity} setQuantity={setQuantity} stock={stock}/>)}
            <div className="d-grid gap-2">  
            {quantity > 0 && stateBuy === false && (           
              <Button variant="outline-primary"onClick={handleAddItem}>Agregar al carrito</Button>             
           )}
             {stateBuy === true &&(<Link to="/cart"> 
            <Button variant="outline-primary">Terminar mi compra</Button>
            </Link>)}
            
            </div>
          </Card.Body>
        </Card>
      </Container>        
    )
}

export default ItemDetail


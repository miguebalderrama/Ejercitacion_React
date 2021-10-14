import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function ItemCount() {
    const [count, setCount] = useState(0);
  return (
    <Container>
      <Card style={{ width: "18rem", margin: "auto" }}>
        <Card.Img
          variant="top"
          src="https://http2.mlstatic.com/D_NQ_NP_706852-MLA31601982194_072019-W.webp"
        />
        <Card.Body>
          <Card.Title>$232.819</Card.Title>
          <Card.Text>Saxofon Para Estudiantes Jean Paul.</Card.Text>
          <Container style={{ margin: "0 0 10px 0", border: "solid 1px grey"}}>
              <Row>           
          <Col style={{ color:"#3383FF", cursor:"pointer"}}>-</Col>
          <Col>{count}</Col>          
          <Col style={{ color:"#3383FF", cursor:"pointer"}} onClick={() => setCount(count + 1)}>+</Col>          
           </Row>
              </Container >
          <div className="d-grid gap-2">            
            <Button variant="outline-primary">Agregar al carrito</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ItemCount;

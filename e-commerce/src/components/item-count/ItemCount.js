import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons'
import { Card, Button, Container, Row, Col } from "react-bootstrap";


function ItemCount({ stock, initial, onAdd }) {
  console.log("S renderiza Item");
  const [count, setCount] = useState(Number(initial));

  const increment = (contador) =>{
    console.log("me ejecute");
    if (contador + 1 <= stock) {
      contador = contador + 1;
    }
    setCount(contador);
  }
  const decrement = (contador) => {
    console.log("me ejecute");
    if (contador - 1 >= 0) {
      contador = contador - 1;
      console.log("decremente");
    }
    setCount(contador);
  }
  const buy = ()=>{
    if(count!==0) onAdd();
  }
  return (
    <Container>
      <Card style={{ width: "18rem", margin: "auto" }}>
        <Card.Img  style={{ padding: "10px"}} variant="top" src="https://http2.mlstatic.com/D_NQ_NP_2X_625200-MLA45215201797_032021-F.webp" />
        <Card.Body>
          <Card.Title>$38.298</Card.Title>
          <Card.Text>Bicicleta Nordic X1.0 By Slp R29 Shim. 21v Disco Susp Oferta.</Card.Text>
          <Container style={{ margin: "0 0 10px 0", border: "solid 1px grey" }}>
            <Row>
              <Col style={{ color: "#3383FF", cursor: "pointer" }} onClick={() => decrement(count)}>
                <FontAwesomeIcon icon={faMinus} />
              </Col>
              <Col><strong>{count}</strong></Col>
              <Col style={{ color: "#3383FF", cursor: "pointer" }} onClick={() => increment(count)}>
                <FontAwesomeIcon icon={faPlus} />
              </Col>
            </Row>
          </Container>
          <div className="d-grid gap-2">
            <Button variant="outline-primary"onClick={buy}>Agregar al carrito</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ItemCount;

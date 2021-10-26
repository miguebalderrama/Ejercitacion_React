import React, { useState } from "react";

import { useParams } from "react-router-dom";
import { Container } from 'react-bootstrap'
import { products } from '../../data/data'
import Promises from '../../promises/Promises'


function ItemListContainer({className,greeting}) {
    const [isLoading, setIsLoading] = useState(true);
  const [selectProduct, setSelectProduct] = useState([]);
    const { category } = useParams();
    console.log({category});
    return (
        <Container className={className}>
        <h3>Saludo: {greeting}</h3>
        <Promises products={products}/>
        </Container>
    )
    }

export default ItemListContainer

import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from 'react-bootstrap'
import { products } from '../../data/data'
import Promises from '../../promises/Promises'


function ItemListContainer({className}) {

  //const [isLoading, setIsLoading] = useState(true);
  const [selectFilter, setSelectFilter] = useState([]);
    
    const  {categoryId}  = useParams();
    useEffect(() => {
      if (categoryId) {        
        console.log("recibi parametros de URL");
        setSelectFilter( products.filter(results =>  results.category === categoryId))

      }
      else {
      console.log("Ruta vacia!");
      setSelectFilter(products)}
    }, [categoryId]);
    return (
        <Container className={className}>        
        <Promises products={selectFilter}/>
        </Container>
    )
    }

export default ItemListContainer

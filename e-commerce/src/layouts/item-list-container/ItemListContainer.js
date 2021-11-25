import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from 'react-bootstrap'
//import { products } from '../../data/data'
import Promises from '../../promises/Promises'
import ItemList from "../../components/item-list/ItemList";
import "./itemListContainer.css"
import { getFirestore } from "../../firebase";

function ItemListContainer({className}) {

  const [isLoading, setIsLoading] = useState(true);
  const [selectFilter, setSelectFilter] = useState([]);
  const [loading, setLoading]= useState(true);
  const [products, setProducts]= useState([]);

useEffect(()=>  {
const db = getFirestore();
const itemCollection = db.collection("products");

itemCollection.get().then(querySnapshot =>{
  console.log(querySnapshot);
  if(querySnapshot.size===0){
    console.log("No hay items")
    return
  }
  setProducts(querySnapshot.docs.map(document => ({
    id: document.id,
    ...document.data()
  })))
 
}).catch(error=>console.log(error)).finally(()=>setLoading(false));
  
 } ,[]);

    const  {categoryId}  = useParams();
    useEffect(() => {      
      if (categoryId) {        
        console.log("recibi parametros de URL");        
        setSelectFilter( products.filter(results =>  results.category === categoryId))
      }
      else {
      console.log("Ruta vacia!");      
      setSelectFilter(products)
      console.log({products})}
    }, [categoryId]);
    return (
        <Container className={className}>        
        {/* <Promises products={selectFilter}/> */}
        <ItemList products={products} isLoading={isLoading} loading={loading}/>
        {/*<ul>
          {products.map(({id, title, pictureUrl}) => (
            <li key={id}>
              <h3>{title}</h3>
              <img src={pictureUrl} alt=""/>
            </li>))}
        </ul>*/}
        
       
        </Container>
    )
    }

export default ItemListContainer

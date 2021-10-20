import React, { useState } from 'react';
import ItemList from '../components/item-list/ItemList';


const Promises = ({products}) => {
  const [isSucces,setIsSucces]= useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [currentProducts, setCurrentProducts] = useState([]);

  const productsResponse = new Promise((resolve, reject) => {
      setTimeout(()=>{
     resolve(products);
    //reject('Hubo un problema en la respuesta');
      }, 300);
    
  });
 /** task.then(
    (result) => {
      console.log(`Result is true ${result}`);
      setIsSucces(true);
    })
    .catch((error)=>{
        console.log(`Error in progress ${error}`)
    })
    .finally(()=>{
        setIsFinished(true);
        setIsLoading(false);
    });
*/ 
productsResponse.then((results)=>{
console.log(results);
setCurrentProducts(results);
})
.catch((error)=>{
    console.log(`Error in progress ${error}`)   
})
.finally(()=>{
    setIsFinished(true);
    setIsLoading(false);
});
    
   
  return (  
     
      <div>
         <ItemList currentProducts={currentProducts}/> 
      </div>    
    
  );
};

export default Promises;
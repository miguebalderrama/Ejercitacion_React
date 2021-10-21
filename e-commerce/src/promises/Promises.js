import React, { useState } from 'react';
import ItemList from '../components/item-list/ItemList';


const Promises = ({products}) => { 
  const [isLoading, setIsLoading] = useState(true);
  const [currentProducts, setCurrentProducts] = useState([]);

  const productsResponse = new Promise((resolve, reject) => {
      setTimeout(()=>{
     resolve(products);
    //reject('Hubo un problema en la respuesta');
      }, 3000);
    
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
    setIsLoading(false);
});
    
   
  return (  
     
      <div>
        {isLoading&& <h3>is loading...</h3>}
         <ItemList currentProducts={currentProducts}/> 
      </div>    
    
  );
};

export default Promises;
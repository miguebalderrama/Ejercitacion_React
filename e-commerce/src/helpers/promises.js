export const promises = (products , setCurrentProducts, setIsLoading)=> {
    
  const productsResponse = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
      console.log(products)
      //reject('Hubo un problema en la respuesta');
    }, 1000);
  });
  productsResponse.then((results) => {
      
      setCurrentProducts(results);
      console.log(results);
    })
    .catch((error) => {
      console.log(`Error in progress ${error}`);
    })
    .finally(() => {
      setIsLoading(false);
    });
}
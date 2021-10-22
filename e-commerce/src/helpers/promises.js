export const promises = (products , setCurrentProducts, setIsLoading)=> {
    
  const productsResponse = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
      //reject('Hubo un problema en la respuesta');
    }, 3000);
  });
  productsResponse.then((results) => {
      console.log(results);
      setCurrentProducts(results);
    })
    .catch((error) => {
      console.log(`Error in progress ${error}`);
    })
    .finally(() => {
      setIsLoading(false);
    });
}
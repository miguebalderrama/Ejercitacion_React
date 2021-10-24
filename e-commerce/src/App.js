import './App.css';
import React, { useState } from "react";
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import FunctionalComponent  from './components/functional-component/FunctionalComponent';
import ButtonMe from './components/buttonMe/ButtonMe';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import ItemCount from './components/item-count/ItemCount';
import ItemDetailContainer from './layouts/item-detail-container/ItemDetailContainer';

function App() {
  const [name, setName] = useState("");
  const hello = "Hola tio!"
  const handleClickButton = (nameButton) => setName(nameButton);
 
  return(
  <div className="App">
    <NavBar/>  
    <hr/>
    {/*<ItemListContainer className="stylegreeting"greeting="Item list container"/>*/}
    {/*<ItemCount initial="8" stock="14" onAdd={()=>console.log("Compra realizada")}/>*/}
    <ItemDetailContainer />
    <br/>
    <br/>
    {/*<h2>Hola {name}</h2>  
    <FunctionalComponent  hello={hello} setName={setName}/>
    <ButtonMe className="parent-button1" action={()=> handleClickButton("Pupi")} name={"Boton 1"}/>
    <ButtonMe className="parent-button2" action={()=> handleClickButton("Juan")} name={"Boton 2"}/>
    <ButtonMe className="parent-button3" action={()=> handleClickButton("Lucas")} name={"Boton 3"}/>*/}
   
    <hr/>   

  </div>
  );
}

export default App;

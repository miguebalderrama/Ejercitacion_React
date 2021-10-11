import './App.css';
import Dog from './components/Dog';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import FunctionalComponent  from './components/functional-component/FunctionalComponent';
import React, { useState } from "react";
import ButtonMe from './components/buttonMe/ButtonMe';
import ItemListContainer from './components/item-list-container/ItemListContainer';





function App() {
  const [name, setName] = useState("");
  const dog = {
    name: "Bobby",
    age: 12,
    breed: "Chihuahua"
  }
  
  const dog2={ ...dog, name:"Pipo", color:"black" };
  const dogs=[
    {name:"Boby", age:4},
    {name:"Pipo", age:10},
    {name:"Bromita", age:2}
  ];
  console.log(dog);
  console.log(dog2);
  const hello = "Hola tio!"
  const handleClickButton = (nameButton) => setName(nameButton);
  return(
  <div className="App">
    <NavBar/>  
    <hr/>
    <ItemListContainer greeting="Hola gente !!"/>
    <h2>Hola {name}</h2>  
    <FunctionalComponent  hello={hello} setName={setName}/>
    <ButtonMe className="parent-button1" action={()=> handleClickButton("Pupi")} name={"Boton 1"}/>
    <ButtonMe className="parent-button2" action={()=> handleClickButton("Juan")} name={"Boton 2"}/>
    <ButtonMe className="parent-button3" action={()=> handleClickButton("Lucas")} name={"Boton 3"}/>
   
    <hr/>
   
    {dogs.map((dog)=>(
      <>
    <Dog key={dog.name} {...dog}/>
    <hr/>
    </>
    ))}

  </div>
  );
}

export default App;

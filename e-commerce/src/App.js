import './App.css';
import Dog from './components/Dog';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
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
  
  return(
  <div className="App">
    <NavBar/>
    <h1>Hola Coders!</h1>
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

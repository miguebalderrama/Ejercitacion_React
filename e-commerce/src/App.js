import './App.css';

function App() {
  const dog = {
    name: "Bobby",
    age: 12,
    breed: "Chihuahua"
  }
  const dog2={ dog };
  console.log(dog);
  console.log(dog2);
  return(
  <div class="App">
    <h1>Hola Coders!</h1>
  </div>
  );
}

export default App;

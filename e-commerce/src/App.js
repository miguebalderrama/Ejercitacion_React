import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Routes';

function App() {  
 
  return(
  <div className="App">
    <Routes/>
   {/* <NavBar/>  
    <hr/>
    <ItemListContainer className="stylegreeting"greeting="Item list container"/>*
    {/*<ItemCount initial="8" stock="14" onAdd={()=>console.log("Compra realizada")}/>
    <ItemDetailContainer />
   */} 

  </div>
  );
}

export default App;

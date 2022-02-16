import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Prueba from './components/Prueba';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './components/Carousel';
import Menu from './components/Menu';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Item from './components/Item';
import Rutas from './routes';

function App() {
     

  return ( <div className = "App" >

   {/*<Rutas/>*/}
   
    <Menu/>
    {/* <ItemCount stock={25} initial={1} /> */} 
      
   {/*  <Item item="item"/> */}
   {/* <Carousel /> */ } 
    <ItemListContainer  />
   {/*  <Prueba /> */ }

    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './components/Carousel';
import Menu from './components/Menu';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Item from './components/Item';
import Rutas from './routes';
import Prueba16feb from './components/clasesPrueba/prueba16feb';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
     

  return ( <div className = "App" >
  
  <ItemDetailContainer/>  
  
   {/*<Rutas/>*/}
   {/*  <Prueba16feb/> */}
   {/*   <Menu/> */}
   {/* <ItemCount stock={25} initial={1} /> */} 
   {/*  <Item item="item"/> */}
   {/* <Carousel /> */ } 
   {/*  <Prueba /> */ }
  
    </div>
  );
}

export default App;
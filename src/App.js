import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Prueba from './components/Prueba';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './components/Carousel';
import Menu from './components/Menu';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';



function App() {


  return ( <div className = "App" >


    <Menu/> 
    <ItemCount stock={25} initial={1} />
    {/* <Carousel /> */ } 
    {/*  <ItemListContainer greeting="aca van los articulos" />*/ } 
    {/*  <Prueba /> */ }

    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {







 let titulo = "Bienvenido a la tienda"//esto lo pongo abajo entre llaves para que me tome la variable


  return ( 
    <div className = "App" >

        <h1>{titulo}</h1>
  <NavBar/>
  
  
 
  </div>
  );
}

export default App;
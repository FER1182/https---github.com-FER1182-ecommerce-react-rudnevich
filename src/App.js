import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu/Menu'
import Rutas from './routes'
import CarritoProvedor from './components/Context/CarritoProvedor';
import Prueba23feb from './components/clasesPrueba/Prueba23feb';

function App() {
     

  return ( <div className = "App" >
            <CarritoProvedor>
              <Rutas/>  {/* este seria un hijo y todo lo de adentro tambien */}
            </CarritoProvedor>
          </div>
  );
}

export default App;
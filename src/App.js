import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {



  /*   let contador = 1;
  contador++; //contador = contador +1 
  console.log(contador);

  let edad = 18;
  if (edad >= 18) {
    console.log("es mayor de 18");
  } else if (edad > 0 && edad < 18) {
    console.log("es menor de edad");
  } else {
    console.log("la edad es invalida");
  }


  edad >= 18 ? console.log("es mayor de edad") : (edad > 0 && edad < 18) ? console.log("es menor de edad") : console.log("la edad es invalida");


  let mensaje = "juan puede pasr al boliche ya que tiene" + edad + "y pyede acceder a los tragos con alcohol"



  mensaje = `juan puede pasr al boliche ya que tiene ${edad} y pyede acceder a los tragos con alcohol`

  console.log(mensaje); */

/*   let jugadores = {

    messi: {
      edad: 33,
      hijo: 3,
      nombre_de_hijos: ["mateo","juan","thiago"],
      goles:33
    },
    ronaldo: {
      edad: 34,
      hijo: 2,
      nombre_de_hijos: ["henri","mariano"],
      goles:33
    },
  }

  console.log(jugadores.messi.goles);

 const {messi:{goles,edad,nombre_de_hijos:[a,b,c],hijo}} = jugadores
 
 console.log("esto es goles",goles);
 console.log("esto es edad",edad);
 console.log("estos son los hijos",nombre_de_hijos);
 console.log("el hijo de mesi es",a);
 console.log("la cantidad de hijos es",hijo);
 */

/*  let messi= {
  edad: 33,
  nombre:"leonel",
  goles:33
}

let ronaldo ={}

//ronaldo.edad=messi.edad
//ronaldo.goles=messi.goles
//ronaldo.nombre="cristiano"

//console.log(ronaldo);

/* ronaldo = {...messi,nombre:"cristiano",edad:32}
console.log(ronaldo);

let numeros =[1,2,3];

numeros=[...numeros,4]

let numeros2 = [...numeros,4,5]
console.log(numeros2);


 */



 let nombre = "fernando rudnevich"//esto lo pongo abajo entre llaves para que me tome la variable


  return ( 
    <div className = "App" >
    <header className = "App-header" >
    <img src = {logo} className = "App-logo" alt = "logo"/>
    <p>
      Edit <code>src/App.js</code> and save to reload. 
    </p > 
    <a 
      className = "App-link" 
      href = "https://reactjs.org" 
      target = "_blank" 
      rel = "noopener noreferrer"
      >
        Learn React 
    </a> 
  </header> 
  
  <h1> {nombre}</h1>
  
  <NavBar/>
  </div>
  );
}

export default App;
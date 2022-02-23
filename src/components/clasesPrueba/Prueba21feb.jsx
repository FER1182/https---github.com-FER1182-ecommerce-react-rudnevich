
import react, { useContext } from 'react'
import { CarritoContext } from '../Context/CarritoProvedor'



const Prueba21feb = () => {

    const { nombre,edad,dameUnaAlerta } = useContext(CarritoContext);

    
    return (
        <div>
            <h1>{nombre}</h1>
            <button onClick={()=>dameUnaAlerta("fer")}></button>
            <h1>{edad}</h1>
        </div>
    )
}

export default Prueba21feb
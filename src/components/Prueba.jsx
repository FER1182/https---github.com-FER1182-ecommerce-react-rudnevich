import React, { useState } from 'react';

const Prueba = ({nombre}) => {
  
  const [contador,setContador] = useState(1);


    return <>
    <h1>{contador}</h1>
    <button onClick={() => setContador(contador+1)}> Sumar</button>;
    <button onClick={() => setContador(contador-1)}> Restar</button>;
    
    

    
    </>;
};

export default Prueba;

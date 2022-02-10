import React, { useEffect, useState } from 'react';
import axios from "axios";



const Prueba9feb = ({ greet }) => {
    const data = [{ nombre: "assian creed" }, { nombre: "assain creed" }];

    const [info, setInfo] = useState();

    const getData = async ()=>{
        try {
          const response = await axios.get("http://hp-api.herokuapp.com/api/characters");
          console.log(response.data)  
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=>{
        getData()
    },[]);
    return <div>
        <h1>hola</h1>

    </div>;
};




export default Prueba9feb;

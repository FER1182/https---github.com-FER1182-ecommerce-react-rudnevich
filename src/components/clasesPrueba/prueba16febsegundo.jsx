import { selectOptions } from '@testing-library/user-event/dist/select-options'
import React, { useState } from 'react'

const select = (options, onSelect, defaultOptions) => {
    //options =array[]
    //onSelect = inaFuncion
    //para filtrar usar .filter



    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            {options.map((o) => <option value={o.value}>{o.text}</option>)}
        </select>
    )
}
const prueba16febsegundo = () => {
    const [first, setFirst] = useState("")
    const opt = [
        { value: 1, text: "azul" },
        { value: 2, text: "negro" },
        { value: 3, text: "gris" },

    ]
    const handleChange = (value) => {


    }

}





export default prueba16febsegundo
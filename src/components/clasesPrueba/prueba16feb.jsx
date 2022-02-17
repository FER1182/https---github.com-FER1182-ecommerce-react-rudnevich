import React from 'react'

const prueba16feb = () => {

  const getName = ({ name, e }) => {
    e.stopPropagation()
    e.preventDefault()
    alert(name);
  }
  const hacerAlgo = (e) => {

    if (e.key === "a" || e.key === "e" || e.key === "i" || e.key === "o" || e.key === "u") {
      return
    }
    console.log(e.key)
  }
  return (
    <div>
      <button onClick={(e) => getName({ name: "jorgge", e })}>dame nombre</button>

      {/*si no paso parametros*/}
      <button onClick={getName}>dame nombre</button>

      <input type="text" onKeyDown={hacerAlgo} />

    </div>


  )
}

export default prueba16feb
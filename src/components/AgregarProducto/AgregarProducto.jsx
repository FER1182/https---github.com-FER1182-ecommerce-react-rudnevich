import React, { useState } from 'react'
import useFireStore from '../../hooks/useFireStore'

const AgregarProducto = () => {

    const {} = useFireStore(CarritoContext);  

    const [form, setForm] = useState({
        categoria: "",
        descripcion: "",
        img: "",
        modelo: 0,
        nombre: "",
        precio: 0,
        stock: 0
    })
    const handleChange = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <form>
            <div className="col-2">
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Categoria</label>
                    <input onChange={handleChange} name="categoria" value={form.categoria} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Descripcion</label>
                    <input onChange={handleChange} name="descripcion" value={form.descripcion} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Url Imagen</label>
                    <input onChange={handleChange} name="img" value={form.img} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Modelo</label>
                    <input onChange={handleChange} name="modelo" value={form.modelo} type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Nombre</label>
                    <input onChange={handleChange} name="nombre" value={form.nombre} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Precio</label>
                    <input onChange={handleChange} name="precio" value={form.precio} type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Stock</label>
                    <input onChange={handleChange} name="stock" value={form.stock} type="number" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Agregar </button>
            </div>
        </form>
    )
}

export default AgregarProducto
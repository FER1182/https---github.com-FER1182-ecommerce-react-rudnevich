import React ,{useState,useContext} from 'react'
import useFireStore from '../../hooks/useFireStore'
import { CarritoContext } from '../Context/CarritoProvedor'





const Checkout = ({carrito}) => {

const { totalCarrito, vaciarCarrito } = useContext(CarritoContext);

const [form,setForm]= useState({

    buyer:{
        name:"",
        phone:"",
        email:"",
    },
    items:carrito,
    total:totalCarrito(),
    
    }
)


const {generateOrder}=useFireStore()

const handleChange = (e) => {

    setForm({ 
        ...form,
        buyer:{
            ...form.buyer,
            [e.target.name]: e.target.value
        } 
     })
}

const handleSubmit = (e) =>{
  e.preventDefault()
  generateOrder({newTiket:form})
  vaciarCarrito()  
}

    return (
    <form onSubmit={handleSubmit}>
            <div className="col-12">
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                    <input onChange={handleChange} name="name" value={form.buyer.name} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Phone</label>
                    <input onChange={handleChange} name="phone" value={form.buyer.phone} type="number" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                    <input onChange={handleChange} name="email" value={form.buyer.email} type="email" className="form-control" />
                </div>
               
                <button disabled={!form.buyer.name || !form.buyer.phone || !form.buyer.email } type="submit" className="btn btn-primary w-100">Comprar</button>
            </div>
        </form>
  )
}

export default Checkout
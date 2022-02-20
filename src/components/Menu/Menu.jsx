import React from 'react';
import logo from '../../images/LOGO2.png'
import CartWidget from '../CartWidget';
import Carrito from '../../images/shopping-cart.png';
import { Link } from 'react-router-dom';

const styleMenu = {
  fontSize: 30
}
const alturaMenu = {
  height: 80
}
const margenBottom = {
  marginBottom: 5
}
const Menu = () => {
  return <div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={margenBottom}>
      <div className="container-fluid" >

        <a className="navbar-brand" href="#"><img src={logo} alt="logo" width={80} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="container-fluid navbar-nav">
            <Link className="nav-link active" style={styleMenu} to={"/"} >Home</Link>
            <Link className="nav-link" style={styleMenu} to={`/category/camisas`}>Camisas</Link>
            <Link className="nav-link" style={styleMenu} to={`/category/remeras`}>Remeras</Link>

          </div>
        </div>
        <CartWidget /> 

      </div>
    </nav>


  </div>;
};

export default Menu;

import React from 'react';
import logo from '../images/LOGO2.png'
import CartWidget from './CartWidget';
import Carrito from '../images/shopping-cart.png';

const styleMenu={
    fontSize : 40
    textAlign : 'center',
}

const Menu = () => {
  return <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          
          <a className="navbar-brand" href="#"><img src={logo} alt="logo" width={150}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="container-fluid navbar-nav">
              <a className="nav-link active" style={styleMenu} aria-current="page" href="#">Home</a>
              <a className="nav-link" style={styleMenu} href="#">Shop</a>

            </div>
          </div>
          <CartWidget/>
          
        </div>
      </nav>


  </div>;
};

export default Menu;

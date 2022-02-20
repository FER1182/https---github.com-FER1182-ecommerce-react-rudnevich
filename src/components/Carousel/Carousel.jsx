import React from 'react';
import foto1 from '../images/28911.jpg'
import foto2 from '../images/29917.jpg'
import foto3 from '../images/29919.jpg'


const Carousel = () => {
  return <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" >
    <div className="carousel-item active">
      <img src={foto1} className="img-fluid  w-20"  alt="remera"/>
    </div>
    <div className="carousel-item">
      <img src={foto2} className="img-fluid  w-20" alt="remera"/>
    </div>
    <div className="carousel-item">
      <img src={foto3} className="img-fluid  w-20"  alt="remera"/>
    </div>
  </div>
  <button className="carousel-control-prev"  type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"  aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </div>;
};

export default Carousel;

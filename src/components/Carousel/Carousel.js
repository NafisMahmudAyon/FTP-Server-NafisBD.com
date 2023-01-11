import React from 'react'
import ReactDOM from "react-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import './Carousel.css'

import BGIMG1 from './img/background.jpg'
import BGIMG2 from './img/background-1.jpg'
import BGIMG3 from './img/background-2.jpg'

const Carousel = () => {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide slider" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={BGIMG1} class="d-block h-100" alt="" />
                </div>
                <div class="carousel-item">
                <img src={BGIMG2} class="d-block h-100" alt="" />
                </div>
                <div class="carousel-item">
                <img src={BGIMG3} class="d-block h-100" alt="" />
                </div>
            </div>
            </div>
    </div>
  )
}

export default Carousel
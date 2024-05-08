import React from 'react'
import slideimg1 from '../assets/unsplash_N0WNH53CBN0.jpg'
import slideimg2 from '../assets/unsplash_N0WNH53CBN0.jpg'

const new = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={slideimg1} class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src={slideimg2} class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src={slideimg2} class="d-block w-100" alt="...">
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6"></div>
            </div>
        </div>
    </div>
  )
}

export default new
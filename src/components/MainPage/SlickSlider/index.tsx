import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'
import { url } from 'inspector';

class SlickSlider extends Component {



  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="sliderWrapper" style={{
              backgroundImage: 'url(img/byke.PNG)'
            }}>
              <div className="darkBackground"></div>
              <div className="sliderBanner">
                <div className="popular__postCategory text-left p-0"><span>Travel</span></div>
                <h3 className="sliderBanner__title text-left"><a href="#">The 20 Biggest Fintech Companies In America 2019</a></h3>
                <div className="postItem__description--author d-flex">
                  <div className="postItem__description--author--img">
                    <img src="img/byke.PNG" alt="" />
                  </div>
                  <span className="author mx-4">Author</span>
                  <span className="date">Date</span>
                </div>
              </div>
            </div>

          </div>
          <div>
          <div className="sliderWrapper" style={{
              backgroundImage: 'url(img/puma.PNG)'
            }}>
              <div className="darkBackground"></div>
              <div className="sliderBanner">
                <div className="popular__postCategory text-left p-0"><span>Travel</span></div>
                <h3 className="sliderBanner__title text-left"><a href="#">The 20 Biggest Fintech Companies In America 2019</a></h3>
                <div className="postItem__description--author d-flex">
                  <div className="postItem__description--author--img">
                    <img src="img/byke.PNG" alt="" />
                  </div>
                  <span className="author mx-4">Author</span>
                  <span className="date">Date</span>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div className="sliderWrapper" style={{
              backgroundImage: 'url(img/lake.PNG)'
            }}>
              <div className="darkBackground"></div>
              <div className="sliderBanner">
                <div className="popular__postCategory text-left p-0"><span>Travel</span></div>
                <h3 className="sliderBanner__title text-left"><a href="#">The 20 Biggest Fintech Companies In America 2019</a></h3>
                <div className="postItem__description--author d-flex">
                  <div className="postItem__description--author--img">
                    <img src="img/byke.PNG" alt="" />
                  </div>
                  <span className="author mx-4">Author</span>
                  <span className="date">Date</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SlickSlider
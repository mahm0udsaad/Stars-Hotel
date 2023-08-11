import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style/photoSlider.css'
import NavBar from './navBar';


const PhotoSlider = () => {
  return (
    <>
      <div className="relative">
    <Carousel
      className='relative carousel'
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={6000} 
    >
      <div className="slide">
        <img src="./assets/redcharlie-redcharlie1-og0qDovf2Ns-unsplash.jpg" alt="Slide 2" />
      </div>
      <div className="slide">
        <img src="./assets/edvin-johansson-rlwE8f8anOc-unsplash.jpg" alt="Slide 1" />
      </div>
      <div className="slide">
        <img src="./assets/sasha-kaunas-xEaAoizNFV8-unsplash.jpg" alt="Slide 2" />
      </div>
    </Carousel>
    <div className='top-0 absolute content-center w-full h-full bg-dark opacity-30 bg-slate-300'></div>
    <div className="container absolute topp-40 wheat text-center z-20">
       <h1 className='italic text-8xl font-meduim'>Stars Hotel</h1>
       <p className='text-xl'>Destinations to discover, journeys to remember</p>
      </div>
      </div>
    </>
  );
};
export default PhotoSlider;
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style/photoSlider.css'
import RestaurantSection from './resturantSection';
import NavBar from './navBar';
import Card from './viewCard';

const PhotoSlider = () => {
  const hotelServices = [
    {
      title: "Fine Dining",
      description: "Experience the art of fine dining in a sophisticated atmosphere. Our world-class chefs craft exquisite dishes that are a feast for both the eyes and the palate.",
      image: "https://images.unsplash.com/photo-1529832588601-c01e066263a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmluZSUyMERpbmluZyUyMERlbGlnaHRzfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
      title: "Relaxation Spa",
      description: "Indulge in the ultimate relaxation experience at our luxurious spa. Let our skilled therapists pamper you with a variety of treatments designed to rejuvenate your body and soul.",
      image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmVsYXhpbmclMjBTcGElMjBSZXRyZWF0fGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
      title: "Poolside Paradise",
      description: "Lounge by the poolside and savor refreshing cocktails and light bites in a tropical oasis.",
      image: "https://images.unsplash.com/photo-1539681607322-8e907b3682aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBvb2xzaWRlJTIwUGFyYWRpc2V8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=400&q=60"
    },
    {
      title: "Outdoor Adventure",
      description: "Embark on thrilling outdoor adventures in the heart of nature. Explore hiking trails, discover hidden gems, and experience the thrill of the great outdoors.",
      image: "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S2lkcyclMjBBZHZlbnR1cmUlMjBDbHVifGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60"
    }
  ];
  return (
    <>
      <div className="relative">
    <Carousel
      className='relative carousel'
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000} 
    >
      <div className="slide">
        <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdGVsfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=700&q=60" alt="Slide 2" />
      </div>
      <div className="slide">
        <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=700&q=60" alt="Slide 1" />
      </div>
      <div className="slide">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=700&q=60" alt="Slide 3" />
      </div>
    </Carousel>
    <div className='top-0 absolute content-center w-full h-full bg-dark opacity-30 bg-slate-300'></div>
    <div className="container absolute topp-40 text-white text-center z-20">
      <h1 className='italic text-8xl font-medium'>Luxury Retreat</h1>
      <p className='text-2xl my-5'>Unveiling a World of Elegance and Comfort</p>
    </div>
      </div>
    <div className="container mx-5 w-5/6 mt-10">
          {hotelServices.map(({description,title ,image}, index) => (
              <Card 
              key={index}
              description={description}
              title={title}
              image={image}
            />
            ))}
    </div>
    </>
  );
};
export default PhotoSlider;
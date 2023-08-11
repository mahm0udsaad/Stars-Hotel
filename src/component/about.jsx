import React from "react";
import Card from "./viewCard";
import TopSection from "./topSection";

const AboutPage = () => {
    const hotelOverview = [
        {
          title: "Welcome to Our Hotel",
          description:
            "Experience a world of comfort and luxury at our elegant hotel. With stunning views, exceptional service, and top-notch amenities, your stay with us will be truly unforgettable.",
          image: "https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlbGNvbWUlMjB0byUyMG91ciUyMGhvdGVsfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60",
        },
        {
          title: "Fine Dining Experience",
          description:
            "Indulge your senses in a culinary journey like no other. Our talented chefs craft exquisite dishes that blend local flavors with international cuisine, ensuring an unforgettable dining experience.",
          image: "https://images.unsplash.com/photo-1477120128765-a0528148fed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlbGNvbWUlMjB0byUyMG91ciUyMGhvdGVsfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60",
        }
      ];

  return (
    <>    
    <TopSection  
    paragraph={'Experience Luxury, Comfort, and Exceptional Service'}
    header={'About Our Hotel'}
    image={"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=400&q=60"}/>
      
      <div className="container w-4/5 mx-auto mt-10">
        {hotelOverview.map(({ description, title, image }, index) => (
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

export default AboutPage;

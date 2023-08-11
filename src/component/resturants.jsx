import NavBar from './navBar';
import RestaurantSection from './resturantSection';
import './style/photoSlider.css'

const Resturants = () => {
  const restaurantsData = [
    {
      name: "El Café Mexicano",
      description: "The lively El Café Mexicano serves locally-inspired regional cuisine for daily breakfast and lunch.",
      style: "Buffet",
      cuisine: "Regional",
      dressCode: "Casual",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHN8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=400&q=60"
    },
    {
      name: "Casitas",
      description: "Indulge in the delectable flavors of freshly caught seafood and the stunning scenery at our beachside restaurant.",
      style: "À la carte",
      cuisine: "Mexican",
      dressCode: "Casual",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=400&q=60"
    },
    {
      name: "The Club Grill",
      description: "Indulge in this 5-Diamond award-winning restaurant featuring the sophisticated ambiance of a live piano jazz bar while savoring delectable menu offerings.",
      style: "Fine dining",
      cuisine: "International",
      dressCode: "Smart Casual",
      image: "https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHN8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=400&q=60"
    },
    {
      name: "Fantino",
      description: "This 5-Diamond restaurant will take you into a sumptuous culinary experience with Mediterranean delights featuring the signature Timeless Elegance of Kempinski Hotel Cancún.",
      style: "Fine dining",
      cuisine: "International",
      dressCode: "Smart Casual",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnRzfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60"
    }
  ];
    return (
      <>
        <div className='block relative overflow-hidden'>
        <div className='top-section relative lg:h-screen lg:h-4/5 overflow-hidden'>
        <div className='wrap top-0 absolute  w-full h-screen bg-black opacity-20 z-10 overflow-hidden'></div>
          <img src="https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHN8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=400&q=60" className='h-full w-full' alt="Header Background" />
          <div className="container absolute topp-40 text-white text-center z-20">
            <h1 className="italic text-8xl font-medium">Fine Dining Delights</h1>
            <p className="text-xl my-5">Experience exquisite flavors and culinary artistry at our upscale fine dining restaurants.</p>
          </div>
        </div>
        <div className="container w-4/5 mx-auto mt-10">
          <h2 className="text-2xl font-semibold mb-4">Restaurants</h2>
          {restaurantsData.map((restaurant, index) => (
            <RestaurantSection
              id={index}
              key={index}
              name={restaurant.name}
              description={restaurant.description}
              style={restaurant.style}
              cuisine={restaurant.cuisine}
              dressCode={restaurant.dressCode}
              image={restaurant.image}
            />
          ))}
        </div>
      </div>
      </>
     );
}
 
export default Resturants;
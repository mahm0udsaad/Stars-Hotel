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
          image: "src/assets/resturnat1.avif"
        },
        {
          name: "Casitas",
          description: "Indulge in the delectable flavors of freshly caught seafood and the stunning scenery at our beachside restaurant.",
          style: "À la carte",
          cuisine: "Mexican",
          dressCode: "Casual",
          image: "src/assets/resturnat2.png"
        },
        {
          name: "The Club Grill",
          description: "Indulge in this 5-Diamond award-winning restaurant featuring the sophisticated ambiance of a live piano jazz bar while savoring delectable menu offerings.",
          style: "Fine dining",
          cuisine: "International",
          dressCode: "Smart Casual",
          image: "src/assets/resturnat3.png"
        },
        {
          name: "Fantino",
          description: "This 5-Diamond restaurant will take you into a sumptuous culinary experience with Mediterranean delights featuring the signature Timeless Elegance of Kempinski Hotel Cancún.",
          style: "Fine dining",
          cuisine: "International",
          dressCode: "Smart Casual",
          image: "src/assets/resturnat1.png"
        }
      ];
    return (
      <>
        <div className='block relative overflow-hidden'>
        <div className='top-section relative h-screen lg:h-4/5 overflow-hidden'>
        <div className='wrap top-0 absolute  w-full h-screen bg-black opacity-20 z-10 overflow-hidden'></div>
          <img src="./assets/head.png" className='h-full w-full' alt="Header Background" />
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center text-white w-3/4 mx-auto z-20">
            <h1 className='italic text-6xl font-medium mb-2'>Stars Hotel</h1>
            <p className='text-xl'>Destinations to discover, journeys to remember</p>
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
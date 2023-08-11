import React ,{useState} from 'react';
import RoomCard from './roomCard'; 
import BookForm from './bookForm';
import NavBar from './navBar';
 
const BookingPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false); 
  const hotelRooms = [
    {
      id: 1,
      name: 'Deluxe Room',
      description: 'Spacious room with a comfortable king-sized bed and a view of the city.',
      price: Math.floor(Math.random() * 200) + 100,
      image: 'src/assets/christopher-jolly-GqbU78bdJFM-unsplash.jpg',
    },
    {
      id: 2,
      name: 'Executive Suite',
      description: 'Luxurious suite with a separate living area and a stunning ocean view.',
      price: Math.floor(Math.random() * 300) + 200,
      image: 'src/assets/markus-spiske-g5ZIXjzRGds-unsplash.jpg',
    },
    {
      id: 3,
      name: 'Junior Suite',
      description: 'Elegant suite with a private balcony and modern amenities.',
      price: Math.floor(Math.random() * 250) + 150,
      image: 'src/assets/mky-moody-AUF6Gl4wwzA-unsplash - Copy.jpg',
    },
    {
      id: 4,
      name: 'Standard Room',
      description: 'Cozy room with a queen-sized bed and all the essential amenities.',
      price: Math.floor(Math.random() * 150) + 50,
      image: 'src/assets/point3d-commercial-imaging-ltd-GUno-FetWJM-unsplash.jpg',
    },
    {
      id: 5,
      name: 'Presidential Suite',
      description: 'The ultimate luxury experience with multiple bedrooms, a private pool, and more.',
      price: Math.floor(Math.random() * 500) + 300,
      image: 'src/assets/sasha-kaunas-67-sOi7mVIk-unsplash.jpg',
    },
    {
      id: 6,
      name: 'Family Room',
      description: 'Spacious room with two double beds, perfect for a family getaway.',
      price: Math.floor(Math.random() * 180) + 80,
      image: 'src/assets/sasha-kaunas-xEaAoizNFV8-unsplash.jpg',
    },
    {
      id: 7,
      name: 'Penthouse Suite',
      description: 'Top-floor suite with breathtaking city views, a private terrace, and a jacuzzi.',
      price: Math.floor(Math.random() * 600) + 400,
      image: 'src/assets/sidekix-media-EoTUCbv9Jrs-unsplash.jpg',
    },
    {
      id: 8,
      name: 'Economy Room',
      description: 'Budget-friendly option with essential amenities for a comfortable stay.',
      price: Math.floor(Math.random() * 120) + 30,
      image: 'src/assets/visualsofdana-T5pL6ciEn-I-unsplash.jpg',
    },
  ];
    const openModal = () => {
      setModalIsOpen(true);
    };
      const closeModal = () => {
          setModalIsOpen(false)
      }

  return (
    <>
    <div className='block relative overflow-hidden'>
        <div className='top-section relative h-screen lg:h-4/5 overflow-hidden'>
        <div className='wrap top-0 absolute  w-full h-screen bg-black opacity-20 z-10 overflow-hidden'></div>
          <img src="src\assets\istockphoto-1205771787-612x612.jpg" className='h-full w-full' alt="Header Background" />
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center text-white w-3/4 mx-auto z-20">
            <h1 className='italic text-6xl font-medium mb-2'>Stars Hotel</h1>
            <p className='text-xl'>Destinations to discover, journeys to remember</p>
          </div>
        </div>
      </div>
    <div className="container mx-auto py-8">
    <h1 className="text-3xl font-semibold mb-4">Hotel Rooms</h1>
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {hotelRooms.map((room) => (
        <RoomCard
          key={room.id}
          id={room.id}
          name={room.name}
          description={room.description}
          price={room.price}
          image={room.image}
          openModal={openModal}
        />
      ))}
      <BookForm className={`${modalIsOpen ? 'overflow-hidden':''}`} isOpen={modalIsOpen} closeModal={closeModal}/>
    </div>
  </div>
    </>
  );
};

export default BookingPage;
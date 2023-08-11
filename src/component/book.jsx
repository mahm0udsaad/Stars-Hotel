import React ,{useState} from 'react';
import RoomCard from './roomCard'; 
import BookForm from './bookForm';
 
const BookingPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false); 
  const hotelRooms = [
    {
      id: 1,
      name: 'Deluxe Room',
      description: 'Spacious room with a comfortable king-sized bed and a view of the city.',
      price: Math.floor(Math.random() * 200) + 100,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 2,
      name: 'Executive Suite',
      description: 'Luxurious suite with a separate living area and a stunning ocean view.',
      price: Math.floor(Math.random() * 300) + 200,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 3,
      name: 'Junior Suite',
      description: 'Elegant suite with a private balcony and modern amenities.',
      price: Math.floor(Math.random() * 250) + 150,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 4,
      name: 'Standard Room',
      description: 'Cozy room with a queen-sized bed and all the essential amenities.',
      price: Math.floor(Math.random() * 150) + 50,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 5,
      name: 'Presidential Suite',
      description: 'The ultimate luxury experience with multiple bedrooms, a private pool, and more.',
      price: Math.floor(Math.random() * 500) + 300,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjByb29tfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 6,
      name: 'Family Room',
      description: 'Spacious room with two double beds, perfect for a family getaway.',
      price: Math.floor(Math.random() * 180) + 80,
      image: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 7,
      name: 'Penthouse Suite',
      description: 'Top-floor suite with breathtaking city views, a private terrace, and a jacuzzi.',
      price: Math.floor(Math.random() * 600) + 400,
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsJTIwcm9vbXxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      id: 8,
      name: 'Economy Room',
      description: 'Budget-friendly option with essential amenities for a comfortable stay.',
      price: Math.floor(Math.random() * 120) + 30,
      image: 'https://images.unsplash.com/photo-1630660664869-c9d3cc676880?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsJTIwcm9vbXxlbnwwfDB8MHx8fDI%3D%3D&auto=format&fit=crop&w=400&q=60',
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
        <div className='wrap top-0 absolute  w-full h-full bg-black opacity-20 z-10 overflow-hidden'></div>
          <img src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGhvdGVsJTIwcm9vbXxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=400&q=60" className='h-full w-full' alt="Header Background" />
          <div className="container absolute topp-40 text-white text-center z-20">
          <h1 className="text-5xl font-semibold mb-2">Book Your Stay</h1>
          <p className="text-lg my-5">Choose from a variety of luxurious rooms for a comfortable and memorable stay.</p>
        </div>
        </div>
      </div>
    <div className="container w-4/5 mx-auto py-8">
    <h1 className="text-3xl font-semibold mb-4">Hotel Rooms</h1>
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <BookForm
          modalClassName={`modal lg:w-4/5 w-5/6 relative transition-opacity duration-300 ${modalIsOpen ? 'opacity-100' : 'opacity-0 hidden'}`}
          isOpen={modalIsOpen}
          closeModal={closeModal}
        />
      {hotelRooms.map((room) => (
        <RoomCard
          key={room.id}
          id={room.id}
          name={room.name}
          description={room.description}
          image={room.image}
          price={room.price}
          openModal={openModal}
          />
          ))}
    </div>
  </div>
    </>
  );
};

export default BookingPage;
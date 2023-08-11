import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import BookForm from './bookForm';
const RoomCard = ({ id, name, description, price, image ,openModal}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-green-600 font-semibold">${price} per night</p>
        <button onClick={openModal} className="mt-4 block text-center text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
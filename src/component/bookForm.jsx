import { useState } from "react";
import Modal from "react-modal";
import './style/photoSlider.css'
const BookForm = ({isOpen ,closeModal ,price}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false); 
    const [bookingData, setBookingData] = useState({
        name: '',
        startingDate: '',
        endingDate: '',
        rooms:1,
        hasChildren: false,
        numberOfChildren: 0,
        numberOfAdults: 1,
      });
      const [isBookingSuccessful, setIsBookingSuccessful] = useState(false);
      const [isInputEmpty,setIsInputEmpty] =useState(false)
      const handleFormSubmit = (event) => {
        event.preventDefault();
        if(bookingData.name && bookingData.startingDate && bookingData.endingDate){
            setIsInputEmpty(false)
            setIsBookingSuccessful(true);
        }else{
            setIsInputEmpty(true)
        }
      };
      const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;
    
        setBookingData({
          ...bookingData,
          [name]: inputValue,
        });
        console.log(value);
      };
 

    return ( 
        <>

            <Modal
              isOpen={isOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              className={'modal relative'}
            >
                 <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
              <h1 className="text-2xl font-semibold mb-4 text-center">Booking Form</h1>
              <form className="p-6 border rounded-md shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    price:
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={price}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <label htmlFor="rooms" className="block text-gray-700 font-bold mb-2">
                    How many Rooms:
                    </label>
                    <select
                    onChange={handleInputChange}
                    id="rooms"
                    name="rooms"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    >
                    <option value="1">1 Room</option>
                    <option value="2">2 Rooms</option>
                    <option value="3">3 Rooms</option>
                    <option value="4">4 Rooms</option>
                    </select>
                <div className="mb-4">
                  <label htmlFor="startingDate" className="block text-gray-700 font-bold mb-2">
                    From :
                  </label>
                  <input
                    type="date"
                    id="startingDate"
                    name="startingDate"
                    value={bookingData.startingDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="endingDate" className="block text-gray-700 font-bold mb-2">
                    To :
                  </label>
                  <input
                    type="date"
                    id="endingDate"
                    name="endingDate"
                    value={bookingData.endingDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Children:
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="hasChildren"
                      checked={bookingData.hasChildren}
                      onChange={handleInputChange}
                      className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  {bookingData.hasChildren && (
                    <input
                      type="number"
                      name="numberOfChildren"
                      value={bookingData.numberOfChildren}
                      onChange={handleInputChange}
                      className="w-full mt-2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="numberOfAdults" className="block text-gray-700 font-bold mb-2">
                    Adults:
                  </label>
                  <input
                    type="number"
                    id="numberOfAdults"
                    name="numberOfAdults"
                    value={bookingData.numberOfAdults}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <button
                  onClick={handleFormSubmit}
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Book Now
                </button>
                {isBookingSuccessful && (
                  <div className="mt-4 p-3 bg-green-200 text-green-800 rounded-md flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Booking Successful!
                  </div>
                )}
                {isInputEmpty && (
                  <div className="mt-4 p-3 bg-red-200 text-red-800 rounded-md flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                  Please fill out the required inputs.
                  </div>
                )}
              </form>
        </Modal>
        </>
     );
}
 
export default BookForm;


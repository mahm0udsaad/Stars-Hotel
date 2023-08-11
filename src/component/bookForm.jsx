import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import './style/photoSlider.css'
const BookForm = ({isOpen ,closeModal,modalClassName}) => {
    const [bookingData, setBookingData] = useState({
        name: '',
        startingDate: '',
        endingDate: '',
        rooms:1,
        hasChildren: false,
        numberOfChildren: null,
        numberOfAdults: 1,
      });
      const currentDate = new Date()
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
      };
      const cancelBooking =()=>{
        setIsBookingSuccessful(false)
        closeModal()
        setBookingData({
          name: '',
          startingDate: '',
          endingDate: '',
          rooms:1,
          hasChildren: false,
          numberOfChildren: null,
          numberOfAdults: 1,
        })
      }

    return ( 
        <>
            <Modal
              isOpen={isOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              className={modalClassName}
            >
                 <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
              {isBookingSuccessful ? (
                <>
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
                  <div className="relative styled-div border-2 border-gray-300 p-4 mt-4 bg-gray-100 rounded">
                    <p>Booking Date :{currentDate.toLocaleString()}</p>
                    <p>Name: {bookingData.name}</p>
                    <p>Starting Date: {bookingData.startingDate}</p>
                    <p>Ending Date: {bookingData.endingDate}</p>
                    <p>Rooms: {bookingData.rooms}</p>
                    {bookingData.hasChildren ? <p>{'yes'}</p>: null}
                    {bookingData.numberOfChildren? <p>Number of Children: {bookingData.numberOfChildren}</p>: null}
                    <p>Adults: {bookingData.numberOfAdults}</p>
                    <button className="border-solid text-white bg-rose-600 rounded absolute right-2 bottom-2 p-2" onClick={cancelBooking}>Cancel</button>
                </div>
                </>
                ):(
                  <>   
                    <h1 className="text-2xl font-semibold mb-4 text-center">Booking Form</h1>
                  <form className="p-6 rounded-md">
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
                  </>
                )}
        
        </Modal>
        </>
     );
}
 
export default BookForm;


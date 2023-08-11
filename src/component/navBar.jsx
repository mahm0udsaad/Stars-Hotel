import { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [onScroll , setScroll] =useState(false)
  const navigate = useNavigate();
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      };
      
    window.addEventListener('scroll', handleScroll);
  },[])
  const handleMenuToggle = () => {
    setToggle(true);
  };
  const toggleClose =()=>{
    setToggle(false)
  }

  const menuClassName = toggle
  ? "translate-x-0 ease-out duration-300 opacity-100"
  : "-translate-x-full ease-in duration-300 opacity-0 pointer-events-none";

  return (
    <>
      <nav className={`w-full z-50 py-3 ${onScroll ? 'fixed bg-white text-black':'absolute bg-transparent text-white'}`}>
        <div className="container flex justify-between items-center">
          <button onClick={handleMenuToggle} className="text-4xl ml-5 mb-18">
            ☰
          </button>
          <Link to={'/'} className="logo text-center">
            <h1 className="italic text-4xl font-medium">Azure Waves</h1>
            <p className="text-xs">HOTELIERS SINCE 1997</p>
          </Link>
          <div className={`sm:flex mt-4 sm:mt-0`}>
            <Link to={'/book'} className=" p-3 text-lg mr-4 border-solid border-2 border-opacity-50 border-stone-300 hover:bg-opacity-50 hover:bg-orange-300 hover:text-white ease-in duration-200">
              Book
            </Link>
          </div>
        </div>
        <div
        className={`fixed top-0 left-0 h-full bg-white transform md:w-1/2 w-full bg-opacity-50 ${menuClassName}`}
      >
        <ul className="text-black flex flex-col bg-wheat items-center justify-center m:w-full h-full">
          <button className="absolute top-5 right-5 text-4xl" onClick={toggleClose}>X</button>
          <Link onClick={toggleClose} to={'/book'} className="p-3 text-5xl mb-8  hover:animate-bounce  ease-in duration-200">
              Book
            </Link>
            <Link onClick={toggleClose} to={'/Resturants'} className="p-3 text-5xl mb-8  hover:animate-bounce  ease-in duration-200">
              Resturants
            </Link>
          <Link onClick={toggleClose} to={'/overview'} className="p-3 text-5xl mb-8  hover:animate-bounce  ease-in duration-200">
              Overview
            </Link>
          <Link onClick={toggleClose} to={'/about'} className="p-3 text-5xl mb-8 hover:animate-bounce  ease-in duration-200">
              About
            </Link>
        </ul>
      </div>
      </nav>
    </>
  );
};

export default NavBar;
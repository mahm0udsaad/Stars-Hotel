import './style/photoSlider.css';

const TopSection = ({image , header , paragraph}) => {
    return ( 
        <div className="block relative overflow-hidden">
        <div className="top-section relative lg:h-screen lg:h-4/5 overflow-hidden">
          <div className="wrap top-0 absolute w-full lg:h-screen bg-black opacity-20 z-10 overflow-hidden"></div>
          {image ? <img src={image} className="h-full w-full" alt="Header Background"/>:''}
  
          <div className="container absolute topp-40 text-white text-center z-20">
            <h1 className="italic text-6xl font-medium">{header}</h1>
            <p className="text-2xl my-5">
              {paragraph}
            </p>
          </div>
        </div>
        </div>
     );
}
 
export default TopSection;
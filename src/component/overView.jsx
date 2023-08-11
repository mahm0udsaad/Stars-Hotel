const Overview = () => {
    return ( 
        <>
            <div className='top-section relative lg:h-4/5 h-screen overflow-hidden'>
            <div className='top-0 absolute  w-full h-screen bg-black opacity-20 z-10 overflow-hidden'></div>
                <img src="./assets/head.png" className='h-full w-full' alt="Header Background" />
                    <div className="absolute top-1/3 left-1/2 z-20 transform -translate-x-1/2 text-center text-white w-3/4 mx-auto">
                    <h1 className='italic text-6xl font-medium mb-2'>Stars Hotel</h1>
                    <p className='text-xl'>Destinations to discover, journeys to remember</p>
                    </div>
            </div>
        </>
     );
}
 
export default Overview;
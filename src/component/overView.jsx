import RestaurantSection from "./resturantSection";
import Card from './viewCard'
import './style/photoSlider.css'
import TopSection from './topSection'

const Overview = () => {
    const hotelOverview = [
        {
          title: "Welcome to Paradise",
          description: "Discover a world of luxury and comfort in our exquisite resort. With breathtaking views, exceptional service, and a range of premium amenities, your stay with us will be truly unforgettable.",
          image: "https://images.unsplash.com/photo-1619620585568-98801b9c6137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2VsY29tZSUyMHRvJTIwUGFyYWRpc2V8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=400&q=60"
        },
        {
          title: "Unwind in Style",
          description: "Indulge in relaxation at our state-of-the-art spa. Let our skilled therapists rejuvenate your body and mind with a variety of treatments designed to leave you feeling refreshed and revitalized.",
          image: "https://images.unsplash.com/photo-1627358935766-4d4ceb5f8590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VW53aW5kfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60"
        },
        {
          title: "Exquisite Dining",
          description: "Savor a diverse array of culinary delights at our world-class restaurants. From international cuisine to local specialties, our chefs create dishes that will satisfy even the most discerning palates.",
          image: "https://images.unsplash.com/photo-1603298573248-3e98441a0d6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RXhxdWlzaXRlJTIwRGluaW5nfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60"
        },
        {
          title: "Adventure Awaits",
          description: "Embark on thrilling excursions and explore the natural beauty of the surrounding area. Whether you're a nature enthusiast or seeking adrenaline-pumping activities, we have something for everyone.",
          image: "https://images.unsplash.com/photo-1688668712585-1d14dd33ac8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWR2ZW50dXJlJTIwQXdhaXRzfGVufDB8MHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60"
        },
        {
          title: "Unforgettable Events",
          description: "Host your special occasions in style with our elegant event spaces and expert planning services. From weddings to corporate gatherings, we ensure every detail is perfect.",
          image: "https://images.unsplash.com/photo-1659189648777-5ec9b55bc4f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFVuZm9yZ2V0dGFibGUlMjBFdmVudHN8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=400&q=60"
        },
        {
          title: "Family Fun",
          description: "Create lasting memories with your loved ones through a variety of family-friendly activities. Our dedicated kids' club and engaging entertainment options ensure fun for all ages.",
          image: "https://images.unsplash.com/photo-1595239094789-4e00e532528a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhbWlseSUyMGZ1bnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=400&q=60"
        },
        {
          title: "Stay Fit",
          description: "Maintain your fitness routine in our well-equipped gym. Whether you prefer a cardio workout or strength training, we offer modern facilities to keep you active during your stay.",
          image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3RheSUyMEZpdHxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=400&q=60"
        },
        {
          title: "Relax by the Pool",
          description: "Escape to our inviting pools and lounging areas, where you can bask in the sun, take refreshing dips, and enjoy poolside service for drinks and snacks.",
          image: "https://images.unsplash.com/photo-1470376619031-a6791e534bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UmVsYXglMjBieSUyMHRoZSUyMFBvb2x8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60"
        }
      ];
    return ( 
        <>
                <TopSection  
                  header={'Luxury Retreat Hotel'}
                  paragraph={'Unforgettable Experiences Await You'}
                  image={"https://images.unsplash.com/photo-1466499855940-3d95a5277898?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvdGVsJTIwb3ZlcnZpZXd8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=400&q=60"}
                  />
                <div className="container w-11/9 lg:w-4/5 mx-auto mt-10">
                    {hotelOverview.map(({description,title ,image}, index) => (
                           <Card 
                            key={index}
                            description={description}
                            title={title}
                            image={image}
                           />
                    ))}
                    </div>
        </>
     );
}
 
export default Overview;

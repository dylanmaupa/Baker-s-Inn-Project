import FactoryTour from "../components/FactoryTour";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import HomeKids from "../components/HomeKids";
import HomeProducts from "../components/HomeProducts";
import RequestDonation from "../components/RequestDonation";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <HomeAbout />
      <HomeProducts />
      <FactoryTour />
      <RequestDonation />
      <HomeKids />
    </div>
  )
  
};

export default Home;
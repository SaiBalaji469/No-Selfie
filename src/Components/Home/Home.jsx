import React,{ useContext }from "react";
import "./home.css";
import bike from "../../Assets/home_img_new.webp";
import safetyOverviewImage from "../../Assets/safety-overview-header.png";
import whoWe1 from "../../Assets/who_we_1.webp";
import whoWe2 from "../../Assets/who_we_2.webp";
import presence1 from "../../Assets/presence_1.webp"
import presence2 from "../../Assets/presence_2.webp"
import presence3 from "../../Assets/presence_3.webp"
import presence4 from "../../Assets/presence_4.webp"
import business1 from "../../Assets/Rapido4business1.png"
import business2 from "../../Assets/Rapido4business2.png"
import Toggle from "../Toggle/Toggle";
import DataContext from '../../Context/Context'
import Desc from "../Toggle/Desc";
import { customerDesc , captainDesc ,homeFeedback , feedCaptains} from "../../Assets/Data";
import Temp1 from "./Temp1";
import Slider1 from "../Slider/Slider";
import Footer from "../Footer/Footer";

const Home = () => {
  const {toggleActive,setToggleActive} = useContext(DataContext)
  const {toggleActive1,setToggleActive1} = useContext(DataContext)
  return (
    <div className="home-container">
      <div className="row home-row" >
        <div className="col-lg-5 home-left text-center text-lg-start" >
          <div className="px-4">
            <h1>NoSelfie - Professional Photography Service</h1>
            <p>
              NoSelfie is India's premier photography service where professional photographers
              capture your perfect moments. With over 25 Million+ photos captured, we're serving
              clients across 100+ cities.
            </p>
            <div className="d-flex gap-2 gap-md-5 my-4 justify-content-center align-items-center">
              <a href="https://play.google.com/store/apps/details?id=com.noselfiee&pli=1" target="_blank" rel="noopener noreferrer">
                <button className="home-btn">Book a Photographer</button>
              </a>
              <button className="home-btn">Join as Photographer</button>
            </div>
          </div>
        </div>
        <div  className="col-lg-7 home-right d-none d-lg-block"  >
        <div class="background_image ">
                <div class="page_one_image">
                    <img src={bike} alt="bike-img" loading="lazy" />
                </div>
            </div>
        </div>
   
      </div>
      <div className="safety-img-container">
        <img src={safetyOverviewImage} alt="safety-img" className="img-fluid" loading="lazy" />
      </div>
      <div className="bike-img-mobile d-lg-none">
        <img src={bike} alt="bikeimg" className="img-fluid" loading="lazy" />
      </div>
      <div className="row know-us-container">
        <div className="col-lg-6 order-2 order-lg-1 ">
          <Temp1 img1={whoWe1} img2={whoWe2}/>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 text-center text-lg-start py-3 py-lg-0 ">
          <div className="d-flex flex-column align-items-center align-items-lg-start">
            <h2>Know Us Better</h2>
            <span className="head-line"></span>
          </div>
          <p className="know-us-text mx-auto mx-lg-0">
            We've captured 10 million precious moments and 100 million frames.
            NoSelfie is revolutionizing photography by bringing professional photographers
            to capture your perfect moments, ensuring every shot is picture-perfect.
          </p>
          <button className="read-more-btn" >Read more here</button>
        </div>
      </div>

      <div className="our-impact-container">
        <div className="container-1 text-center">
          <div className="d-flex flex-column align-items-center">
            <h2>Our Impact</h2>
            <span className="head-line"></span>
          </div>
          <p className="impact-text mx-auto px-4 px-md-0">
            Our presence in the country has transformed the way people get their photos taken.
            We make professional photography accessible to everyone, ensuring you never have to
            settle for a selfie again.
          </p>
        </div>
        <div className="container-2">
          <div className="box-1" >
          <div className="box">
            <img src={presence1} alt="presence-img" className="presence-img" loading="lazy" />
            <bold>25 M</bold>
            <p>Professional Photos</p>
          </div>
          </div>
          <div className="box-1"  >
          <div className="box">
          <img src={presence2} alt="presence-img" className="presence-img" />
            <bold>100 +</bold>
            <p>Service Cities</p>
          </div>
          </div> <div className="box-1" >
          <div className="box">
          <img src={presence3} alt="presence-img" className="presence-img" />
            <bold>1 M+</bold>
            <p>Photographers</p>
          </div>
          </div> <div className="box-1" >
          <div className="box">
          <img src={presence4} alt="presence-img" className="presence-img" />
            <bold>10 M+</bold>
            <p>Satisfied Clients</p>
          </div>
          </div>
        </div>
      </div>

      <div className="what-for-you-container mt-2 py-2">
      <div className="container-1 text-center">
          <div className="d-flex flex-column align-items-center">
            <h2>What's in it for you</h2>
            <span className="head-line"></span>
          </div>
          <Toggle toggleActive={toggleActive} setToggleActive={setToggleActive}/>
          {<Desc desc={(toggleActive === "Customers") ? customerDesc : captainDesc} />}
        </div>
      </div>

      <div className="customer-feed-container mt-2 py-2">
      <div className="container-1 text-center">
          <div className="d-flex flex-column align-items-center">
            <h2 className="px-5 ">Client Testimonials</h2>
            <span className="head-line"></span>
          </div>
          <Toggle toggleActive={toggleActive1} setToggleActive={setToggleActive1}/>
           <Slider1
feedback={(toggleActive1 === "Customers") ? homeFeedback : feedCaptains}
            />
        </div>
      </div>
      <div className="row know-us-container">
    
        <div className="col-lg-6 text-center  py-3 py-lg-0 " >
          <div 
          className="d-inline-flex flex-column align-items-center align-items-lg-start"
          >
            <h2 className="mx-auto">NoSelfie Business Solutions</h2>
            <span className="head-line"></span>
          </div>
          <p className="know-us-text mx-auto text-center text-lg-start ps-2">
          Partner with NoSelfie for your business photography needs. Our network of professional
          photographers delivers exceptional quality for corporate events, product shoots, and
          professional headshots. Join us as a business partner for premium photography services.
          </p>
  
        </div>
        <div className="col-lg-6 ">
          <Temp1 img1={business1} img2={business2}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

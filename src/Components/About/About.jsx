import React from "react";
import "./about.css";
import about1 from "../../Assets/about_us_1.png";
import about2 from "../../Assets/about_us_2.png";
import pos1 from "../../Assets/rishi.png";
import pos3 from "../../Assets/aravind.png";
import pos2 from "../../Assets/pavan.png";
import Temp1 from "../Home/Temp1";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div className="about-container">
      <div className="row">
        <div
          className="col-lg-6 home-left text-center text-lg-start"
        
        >
          <div className="px-4 mx-auto">
            <h1>India's Beloved</h1>
            <h1>Photography Service</h1>
            <p className="m-0 p-0" style={{ fontWeight: "600" }}>
              We are not just photographers, we are memory makers
            </p>
            <p className="m-0 p-0">
              We're #1 choice of 10 Million people because we capture life's precious moments
              with perfection. With professional expertise, we also provide affordable
              photography services for all occasions.
            </p>
            <p className="m-0 p-0" style={{ fontWeight: "600" }}>
              What makes us different?
            </p>
            <p className="m-0 p-0">
              Our photographers can capture the perfect moment in any situation and deliver
              memories that last a lifetime! So when you think photography, think
              CaptureLife.
            </p>
          </div>
        </div>
        <div className="col-lg-6 home-right mt-5 mt-lg-0">
          <Temp1 img1={about1} img2={about2} />
        </div>
      </div>

      <div className="row my-3">
        <div className="col-lg-6 text-center  py-3 py-lg-0 ">
          <div className="d-inline-flex flex-column align-items-center align-items-lg-start">
            <h3 className="mx-auto">Masters behind the lens</h3>
            <span className="head-line"></span>
          </div>
          <p className="know-us-text mx-auto text-center text-lg-start ">
            CaptureLife has come a long way ever since its inception in 2015. With a
            lot of passion and creativity we have made a place for ourselves
            in the photography industry. As a brand and as a service, it is our constant
            endeavour to capture moments beautifully.
          </p>
        </div>
        <div className="col-lg-6 ">
          <div className="row h-100 d-flex align-items-center">
            <div className="col-lg-4 text-center">
              <div className="about-design">
                <div className="about-img">
                  <img src={pos1} alt="founder-img" className="img-fluid" loading="lazy" />
                </div>
              </div>
              <span className="about-name">Rishikesh S R</span>
              <br />
              <span className="about-pos">Founder</span>
            </div>
            <div className="col-lg-4 text-center">
              <div className="about-design">
                <div className="about-img">
                  <img src={pos2} alt="founder-img" className="img-fluid" loading="lazy" />
                </div>
              </div>
              <span className="about-name">Pavan Guntupalli</span>
              <br />
              <span className="about-pos">Founder</span>
            </div>
            <div className="col-lg-4 text-center">
              <div className="about-design ">
                <div className="about-img">
                  <img src={pos3} alt="founder-img" className="img-fluid" loading="lazy" />
                </div>
              </div>
              <span className="about-name">Aravind Sanka</span>
              <br />
              <span className="about-pos">Founder</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rapido-team py-5 ">
        <h1>Join Our Photography Team</h1>
        <p>
          Join us in capturing a world of beautiful moments. Let's find a place for your
          creative vision.
        </p>
        <button className="work-btn">Work with us</button>
      </div>
      <Footer />
    </div>
  );
};

export default About;

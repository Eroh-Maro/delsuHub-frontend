import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero from "../assets/International-Event.jpg";
import microsoft from "../assets/micro.png";
import embold from "../assets/embold.png";
import mtn from "../assets/mtn.png";
import shell from "../assets/shell.png";
import Benefits from "../components/benefits";
import delsu from "../assets/delsuLogo.png";
import { FaBook, FaTools, FaLightbulb } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

const benefitsData = [
  {
    icon: FaPeopleGroup,
    text: "Unlock opportunities to collaborate with influential thought leaders and build meaningful relationships with like-minded individuals, expanding your professional network effortlessly.",
  },
  {
    icon: FaTools,
    text: "Acquire practical skills that translate into real-world impact, empowering you to tackle challenges and drive tangible results in your personal and professional life with ease.",
  },
  {
    icon: FaBook,
    text: "Gain unparalleled insights from seasoned experts who share their experiences and wisdom, helping you refine your ideas, overcome obstacles, and achieve success in your endeavors.",
  },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="heroSection">
          <div className="heroText">
            <h1 className="heading" data-aos="zoom-out">
              Delsu Event hub
            </h1>
            <h2 className="heading2" data-aos="fade-up" data-aos-delay="200">
              Never miss out
            </h2>
          </div>
          <img src={hero} className="hero" alt="event" />
        </div>
      </div>

<div className="delsuContainer" data-aos="fade-up-left" >
<h1 className="delsuText">Delta State University Abraka</h1>
<img src={delsu} className="delsuLogo"   data-aos-delay="200"alt="delsuLogo" />

</div>
      <div className="about" >
        <p className="aboutText" data-aos="fade-up">
          <span className="aboutTitle">Every year, </span>Delsu partners with
          numerous companies to provide her students with quality opportunities
          to grow and learn outside the classroom. <p>These events are designed to
          provide students with the opportunity to connect learn and grow</p>
          <Link to='/events' className='seeEvents'><p>see events</p></Link>
        </p>
        <img
          src="https://images.pexels.com/photos/3321791/pexels-photo-3321791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="conference"
          className="conference"
          data-aos="zoom-in"
        />
      </div>
     <div className="benefitSection">
     <h2 className="benefitsTitle">Benefits</h2>
      <div
        className="benefitsContainer"
        data-aos="fade-left"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
     {
      benefitsData.map((benefit, index) => (
        <Benefits key={index} icon={benefit.icon} text={benefit.text} />
      ))
     }
      </div>
     </div>
     <div className="callToAction">
      <h2  data-aos="fade-left" data-aos-delay="200">Join The <span className="experience">Experience</span></h2>
      <h3  data-aos="fade-left" data-aos-delay="400">Gain valueable Insights</h3>
        <p data-aos="fade-left" data-aos-delay="600">Our university's annual events are a culmination of talent, innovation, and community spirit. From cultural festivals to academic conferences, we offer a diverse range of activities that cater to all interests. Join us for an unforgettable experience that will leave you inspired, motivated, and eager for more</p>
    <div className="buttonContainer">
    <button className="learn" data-aos="zoom-out" data-aos-delay="800">Learn more</button>
    <Link to='/events' className="seeLink" data-aos="zoom-out" data-aos-delay="800"><button className="see">See events</button> </Link>
    </div>
     </div>
      <div className="collaborations">
          <h2  data-aos="fade-up" >Companies We've <span className="partnered">Partnered</span> With</h2>
          <div className="logos"  data-aos="fade-right">
            <img src={microsoft} alt="microsoft" className="partner" />
            <img src={embold} alt="embold" className="partner"  />
            <img src={mtn} alt="mtn" className="partner mtn"  />
            <img src={shell} alt="shell" className="partner" />
            </div>
            </div>
           
      <Footer />
    </div>
  );
};

export default Home;

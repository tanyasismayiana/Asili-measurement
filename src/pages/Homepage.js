import React from "react";
import ai from "../images/dress-blue.png";
import dress from "../images/dress-blue.png";
import jacket from "../images/dress-blue.png";
import tshirt from "../images/dress-blue.png";
import trouser from "../images/dress-blue.png";
import fashion from "../images/dress-blue.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    axios
      .get("https://desolate-spire-47070.herokuapp.com/", {
        query: { category: value },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigateUser = () => {
    navigate("/selected");
  };
  const navigateSignup = () => {
    navigate("/SignUp");
  };
  return (
    <div className="nav">
      <nav>
        <div className="nav-list">
          <div className="asili-logo">
            <img src={ai} />
          </div>
          <div className="people-category">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
          </div>
        </div>
        <div className="nav-search">
          {/* <input onChange={handleChange} type='text' placeholder='Search...' className='Search'/> */}
          <input onChange={handleChange} type="text" placeholder="Search" />
          <button className="btnRegiste" onClick={navigateSignup}>
            <a>SignUp</a>
          </button>
        </div>
      </nav>
      <div className="landing-page">
        <div className="intro">
          <h1>Asili wear</h1>
          <p>
            Asili Wear the leading cloth brand which brings you high quality
            products at affordable prices.<br></br>Visit our website today and
            get the best design for you!
          </p>
          <button className="btnRegister" onClick={navigateUser}>
            <a>Explore</a>
          </button>
        </div>
        <div className="image">
          <img src={fashion} />
        </div>
      </div>

      <div className="top-categories">
        <h1>Top Categories</h1>
        <p className="parag-one">
          Asili Active Wear the leading cloth brand which brings you high
          quality products at affordable prices
        </p>
        <p className="parag-two">
          Choose your perfect cloth, checkout how you amazing you look in them,
          sharew with a designer and get the job done. You are happy we are
          happy.{" "}
        </p>
      </div>
      <div className="cloth-categories">
        <img></img>
      </div>
      <div className="cloth-categories">
        <div className="clothes">
          {/* <img src={dress}/> */}
          <a href="/explore"><img src={dress}/></a>

          <p className="cloth-name"> Dress</p>
        </div>
        <div className="clothes">
          {/* <img src={jacket} /> */}
          <a href="/explore"><img src={jacket}/></a>
          <p className="cloth-name"> Jacket</p>
        </div>
        <div className="clothes">
          {/* <img src={trouser} /> */}
          <a href="/explore"><img src={trouser} /></a>
          <p className="cloth-name"> Trousers</p>
        </div>
        <div className="clothes">
          {/* <img src={tshirt} /> */}
          <a href="/explore"><img src={tshirt}/></a>

          <p className="cloth-name"> T-shirts</p>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
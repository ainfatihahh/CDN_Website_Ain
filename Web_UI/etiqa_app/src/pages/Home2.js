import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/sky.jpg";
import "../styles/Home.css"

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> COMPLETE DEVELOPER NETWORK </h1>
        <p> Looking For Freelancer</p>
        <Link to="/Freelancer">
          <button> Freelancer </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center pb-5">
          <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5"/>
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="btn btn-primary p-2 fs-5 fw-medium">Sign up for free</button>
      </div>
    </div>
  );
}

export default Hero;

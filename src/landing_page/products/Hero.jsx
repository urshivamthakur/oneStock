import React from "react";

function Hero() {
  return (
    <div className="container my-5 py-5 text-center border-bottom">
      <h1 style={{ fontSize: "2.8rem" }}>Zerodha Products</h1>
      <p className="my-4 fs-4">
        Sleek, modern, and intuitive trading platforms
      </p>
      <p className="pb-5">
        Check out our &nbsp;
        <a class="text-decoration-none" href="#">
          investment offerings <i class="fa-solid fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
}

export default Hero;

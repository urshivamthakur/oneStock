import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 pb-5">
      <div className="row">
        <div className="col-4">
          <h2 className="mb-4">Unbeatable Pricing</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            modi deserunt quam rerum quod
          </p>
          <a className="text-decoration-none" href="#">
            See Pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col border py-3">
              <h1 className="py-3">&#8377;0</h1>
              <p className="px-5">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col border py-3">
              <h1 className="py-3">&#8377;20</h1>
              <p>Intraday and f&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

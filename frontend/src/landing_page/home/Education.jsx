import React from "react";

function Education() {
  return (
    <div className="container pt-5">
      <div className="row pb-5">
        <div className="col-6">
          <img src="media/images/education.svg" style={{ width: "80%" }} />
        </div>
        <div className="col-6 p-5">
          <h2 className="mb-4">Unbeatable Pricing</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            modi deserunt quam rerum quod
          </p>
          <a className="text-decoration-none" href="#">
            Versity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            modi deserunt quam rerum quod
          </p>
          <a className="text-decoration-none" href="#">
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;

import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid 
    support-hero-style p-5"
    >
      <div className="container">
        <div className="d-flex justify-content-between mx-5 px-4">
          <h5>Support Portal</h5>
          <a href="#">Track tickets</a>
        </div>
        <div className="row p-4 mx-5 align-items-center">
          <div className="col-6 py-4 pe-5 ps-0">
            <h5 className="pe-5 fs-4">
              Search for an answer or browse help topics to create a ticket
            </h5>
            <div className="pt-5 pb-3">
              <input
                className="form-control w-100 p-3"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
              ></input>
            </div>
            <div className="d-flex pt-2">
              <p className="pe-4">
                <a href="#">Track account opening</a>
              </p>
              <p>
                <a href="#">Track segment activation</a>
              </p>
            </div>
            <div className="d-flex">
              <p className="pe-4">
                <a href="#">Kite user manual</a>
              </p>
              <p>
                <a href="#">Intraday margins</a>
              </p>
            </div>
          </div>
          <div className="col-6 py-4 pe-5">
            <h5 className="pe-5 fs-4">Featured</h5>
            <ol>
              <li className="p-3">
                <a href="#">Quarterly Settlement of Funds - July 2025</a>
              </li>
              <li className="p-2">
                <a href="#">
                  Exclusion of F&O contracts on 8 securities from August 29,
                  2025
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

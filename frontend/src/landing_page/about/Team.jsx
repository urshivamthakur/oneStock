import React from "react";

function Team() {
  return (
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col-6 p-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          pOver 1.6+ crore clients place billions of orders every year through
          our powerful ecosystem of investment platforms, contributing over 15%
          of all Indian retail trading volumes
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <span style={{ color: "#0D6EFD" }}>Rainmatter,</span> our fintech
            fund and incubator, has invested in several fintech startups with
            the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product{" "}
            <span style={{ color: "#0D6EFD" }}>philosophies.</span>
          </p>
        </div>
      </div>
      <div className="text-center">
        <h2>People</h2>
        <div className="row mt-5">
          <div className="col-6 border p-5">oneStock</div>
          <div className="col-6 border p-5">oneStock</div>
        </div>
      </div>
    </div>
  );
}

export default Team;

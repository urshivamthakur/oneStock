import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row pb-5">
        <div className="col-6">
          <img src="media/images/largestBroker.svg" style={{width:"80%"}}/>
        </div>
        <div className="col-6 p-5">
          <h2>Largest Stock broker in India</h2>
          <p className="mb-3 pe-5 pt-1">
            2+ million oneStock clients contribute to over 15% of all retail
            order volums in India daily by trading and investing in:
          </p>
          <div className="row p-4 pe-5">
            <ul className="col-6 p-2">
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>
            <ul className="col-6 p-2">
              <li>Stock & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Gold</li>
            </ul>
            <img
              src="media\images\pressLogos.png"
              alt="Press Logo"
              style={{ width: "85%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;

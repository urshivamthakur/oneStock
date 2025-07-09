import React from "react";

function Hero() {
  return (
    <div className="container pb-5">
      <div className="text-center my-5 py-5">
        <h1 style={{ fontSize: "2.8rem" }}>Charges</h1>
        <p className="fs-4 pt-2 text-muted">List of all charges and taxes</p>
      </div>
      <div className="row my-5 text-center">
        <div className="col-4">
          <img
            className="py-5"
            style={{ width: "60%" }}
            src="media/images/pricingEquity.svg"
          />
          <h2>Free equity delivery</h2>
          <p className="p-5 fs-5 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img
            className="py-5 "
            style={{ width: "60%" }}
            src="media/images/intradayTrades.svg"
          />
          <h2>Intraday and F&O trades</h2>
          <p className="p-5 fs-5 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img
            className="py-5"
            style={{ width: "60%" }}
            src="media/images/pricingMF.svg"
          />
          <h2>Free direct MF</h2>
          <p className="p-5 fs-5 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h2 className="pt-4 pb-2">The Zerodha Universe</h2>
        <p className="fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-4">
          <img
            className="pb-3"
            style={{ width: "65%" }}
            src="media/images/zerodhaFundhouse.png"
          />
          <br />
          <span>
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </span>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            className="pb-3"
            style={{ height: "4rem" }}
            src="media/images/sensibullLogo.svg"
          />
          <br />
          <span>
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </span>
        </div>

        <div className="col-4 p-3 mt-3">
          <img
            className="mb-3"
            style={{ height: "5rem" }}
            src="media/images/tijori.svg"
          />
          <br />
          <span>
            Investment research platform <br />
            that offers detailed insights on stocks, <br />
            sectors, supply chains, and more.
          </span>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            className="pb-3"
            style={{ height: "4.2rem" }}
            src="media/images/streakLogo.png"
          />
          <br />
          <span>
            Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding.
          </span>
        </div>

        <div className="col-4 p-3 mt-5">
          <img className="pb-3" src="media/images/smallcaseLogo.png" />
          <br />
          <span>
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals.
          </span>
        </div>

        <div className="col-4 p-3 my-5">
          <img
            className="pb-3"
            style={{ height: "4.2rem" }}
            src="media/images/dittoLogo.png"
          />
          <br />
          <span>
            Personalized advice on life
            <br />
            and health insurance. No spam
            <br />
            and no mis-selling.
          </span>
        </div>

        <button className="btn btn-primary p-2 fs-5 fw-medium my-5">Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;

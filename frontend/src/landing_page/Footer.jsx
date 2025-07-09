import React from "react";
import "../index.css";
function Footer() {
  return (
    <footer className="bg-light pt-4 mt-5 pb-4">
      <div className="container">
        <div className="row px-5">
          <div className="col-3">
            <img
              src="media/images/logo.svg"
              alt="logo"
              style={{ width: "9rem" }}
              className="my-2"
            />
            <p style={{ fontSize: "12.8px" }}>
              © 2010 - 2025, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
            <div className="fs-4">
              <i class="fa-brands fa-square-facebook pe-2"></i>
              <i class="fa-brands fa-square-instagram pe-2"></i>
              <i class="fa-brands fa-square-x-twitter pe-2"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="col-9">
            <div class="row">
              <div class="col">
                <ul class="list-style list-inline pb-2">
                  <li class="nav-head ">Account</li>
                  <li>
                    <a href="/">Open demat account</a>
                  </li>
                  <li>
                    <a href="/">Minor demat account</a>
                  </li>
                  <li>
                    <a href="/">NRI demat account</a>
                  </li>
                  <li>
                    <a href="/">Commodity</a>
                  </li>
                  <li>
                    <a href="/">Dematerialisation</a>
                  </li>
                  <li>
                    <a href="/">Fund transfer</a>
                  </li>
                  <li>
                    <a href="/">MTF</a>
                  </li>
                  <li>
                    <a href="/">Referral program</a>
                  </li>
                </ul>
              </div>
              <div class="col">
                <ul class="list-style list-inline">
                  <li class="nav-head">Support</li>
                  <li>
                    <a href="/">Contact us</a>
                  </li>
                  <li>
                    <a href="https://support.zerodha.com">Support portal</a>
                  </li>
                  <li>
                    <a target="_blank" href="/">
                      How to file a complaint?
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="/">
                      Status of your complaints
                    </a>
                  </li>
                  <li>
                    <a href="/">Bulletin</a>
                  </li>
                  <li>
                    <a href="/">Circular</a>
                  </li>
                  <li>
                    <a href="/">Z-Connect blog</a>
                  </li>
                  <li>
                    <a href="/">Downloads</a>
                  </li>
                </ul>
              </div>
              <div class="col">
                <ul class="list-style list-inline">
                  <li class="nav-head">Company</li>
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Philosophy</a>
                  </li>
                  <li>
                    <a href="/">Press &amp; media</a>
                  </li>
                  <li>
                    <a href="/">Careers</a>
                  </li>
                  <li>
                    <a href="/">Zerodha Cares (CSR)</a>
                  </li>
                  <li>
                    <a href="h/">Zerodha.tech</a>
                  </li>
                  <li>
                    <a href="/">Open source</a>
                  </li>
                </ul>
              </div>
              <div class="col">
                <ul class="list-style list-inline">
                  <li class="nav-head">Quick links</li>
                  <li>
                    <a href="/">Upcoming IPOs</a>
                  </li>
                  <li>
                    <a href="/">Brokerage charges</a>
                  </li>
                  <li>
                    <a href="/">Market holidays</a>
                  </li>
                  <li>
                    <a href="/">Economic calendar</a>
                  </li>
                  <li>
                    <a href="/">Calculators</a>
                  </li>
                  <li>
                    <a href="/">Markets</a>
                  </li>
                  <li>
                    <a href="/">Sectors</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-2" style={{ fontSize: "12.8px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            <a className="text-decoration-none" href="/">
              Smart Online Dispute Resolution
            </a>{" "}
            &nbsp; | &nbsp;
            <a className="text-decoration-none" href="/">
              {" "}
              Grievances Redressal Mechanism
            </a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1 Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2 Update your e-mail and phone number with
            your stock broker / depository participant and receive OTP directly
            from depository on your e-mail and/or mobile number to create
            pledge. 3 Check your securities / MF / bonds in the consolidated
            account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className="d-flex justify-content-center footer-style">
          <div>
            <a rel="nofollow" href="https://nseindia.com">
              NSE
            </a>
          </div>
          <div>
            <a rel="nofollow" href="https://www.bseindia.com/">
              BSE
            </a>
          </div>
          <div>
            <a rel="nofollow" href="https://www.mcxindia.com/">
              MCX
            </a>
          </div>
          <div>
            <a href="/">Terms & conditions</a>
          </div>
          <div>
            <a href="/">Policies & procedures</a>
          </div>
          <div>
            <a href="/">Privacy policy</a>
          </div>
          <div>
            <a href="/">Disclosure</a>
          </div>
          <div>
            <a href="/">For investor's attention</a>
          </div>
          <div>
            <a href="/">Investor charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

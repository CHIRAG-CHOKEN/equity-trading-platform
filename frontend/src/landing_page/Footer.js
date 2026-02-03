import React from "react";

function Footer() {
  const prevent = (e) => e.preventDefault();

  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="Zerodha trading platform logo"
              style={{ width: "50%" }}
            />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p>Company</p>
            <a href="#" onClick={prevent}>About</a><br />
            <a href="#" onClick={prevent}>Products</a><br />
            <a href="#" onClick={prevent}>Pricing</a><br />
            <a href="#" onClick={prevent}>Referral programme</a><br />
            <a href="#" onClick={prevent}>Careers</a><br />
            <a href="#" onClick={prevent}>Zerodha.tech</a><br />
            <a href="#" onClick={prevent}>Press & media</a><br />
            <a href="#" onClick={prevent}>Zerodha cares (CSR)</a><br />
          </div>

          <div className="col">
            <p>Support</p>
            <a href="#" onClick={prevent}>Contact</a><br />
            <a href="#" onClick={prevent}>Support portal</a><br />
            <a href="#" onClick={prevent}>Z-Connect blog</a><br />
            <a href="#" onClick={prevent}>List of charges</a><br />
            <a href="#" onClick={prevent}>Downloads & resources</a><br />
          </div>

          <div className="col">
            <p>Account</p>
            <a href="#" onClick={prevent}>Open an account</a><br />
            <a href="#" onClick={prevent}>Fund transfer</a><br />
            <a href="#" onClick={prevent}>60 day challenge</a><br />
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

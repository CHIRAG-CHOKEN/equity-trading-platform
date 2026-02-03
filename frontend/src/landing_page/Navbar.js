import React from "react";

function Navbar() {
  const prevent = (e) => e.preventDefault();

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <a className="navbar-brand" href="#" onClick={prevent}>
          <img
            src="media/images/logo.svg"
            alt="Zerodha logo"
            style={{ width: "25%" }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#" onClick={prevent}>
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={prevent}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={prevent}>
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={prevent}>
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={prevent}>
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

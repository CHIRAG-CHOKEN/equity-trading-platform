import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>

        {/* Button instead of empty href */}
        <button className="btn btn-link p-0">Track Tickets</button>
      </div>

      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            placeholder="Eg. how do I activate F&O"
            className="form-control my-3"
          />

          {/* Internal navigation – safe placeholders */}
          <ul className="list-unstyled">
            <li>
              <Link to="#">Track account opening</Link>
            </li>
            <li>
              <Link to="#">Track segment activation</Link>
            </li>
            <li>
              <Link to="#">Intraday margins</Link>
            </li>
            <li>
              <Link to="#">Kite user manual</Link>
            </li>
          </ul>
        </div>

        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <Link to="#">
                Current Takeovers and Delisting – January 2024
              </Link>
            </li>
            <li>
              <Link to="#">Latest Intraday leverages – MIS & CO</Link>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;

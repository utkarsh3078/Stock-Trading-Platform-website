import React from "react";

function HeroSection() {
  return (
    <section className="container-fluid" id="supportPage">
      <div
        className="p-3 mr-3 ml-3 pl-3"
        style={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h4>Support Portal</h4>
        <a id="TTa" href="#" style={{ textDecoration: "none", color: "white" }}>
          Track Tickets
        </a>
      </div>
      <div className="row p-3 mt-3">
        <div className="col-1"></div>
        <div className="col-5">
          <h3 className="mb-3 pb-3">
            Search for an answer or browser help topics to create a ticket
          </h3>
          <input
            id="SupportInput"
            placeholder="How do I activate F&O, why is my order getting rejected..."
          />
          <br />
          <a href="#" id="supporta">
            Track account openning
          </a>
          <a href="#" id="supporta">
            Track Segment activation
          </a>
          <a href="#" id="supporta">
            Intradaty margins
          </a>
          <a href="#" id="supporta">
            Kite user manual
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-3">
          <h3>Featured</h3>
          <p>1. Current TakeOvers and delisting - January 2024</p>
          <p>2. Latest Intraday leverages - MIS & CO</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

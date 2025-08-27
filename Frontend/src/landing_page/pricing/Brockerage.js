import React from "react";

function Brockerage() {
  return (
    <div className="container pt-3 mt-3">
      <div className="row text-center pt-3 mt-3 pb-3 mb-3">
        <br />
        <h2>Charges</h2>
        <p className="text-muted">List of all charges and taxes</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="row mt-3 rt-3">
        <div className="col-4 text-center">
          <img
            src="./assets/pricingEquity.svg"
            alt="pricing-equity"
            style={{ width: "60%", height: "auto" }}
          ></img>
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center">
          <img
            src="./assets/pricing20.svg"
            alt="pricing-equity"
            style={{ width: "60%", height: "auto" }}
          ></img>
          <h2>Intraday and F&O trades</h2>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-center">
          <img
            src="./assets/pricingMF.svg"
            alt="pricing-equity"
            style={{ width: "60%", height: "auto" }}
          ></img>
          <h2>Free direct MF</h2>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brockerage;

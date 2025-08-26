import React from "react";

function Universe() {
  return (
    <div className="container mt-3 pt-3 mb-3 pb-3">
      <div className="row text-center mt-3 pt-3">
        <p className="fs-5">
          Want to know more about our technology stack? Check out the{" "}
          <a
            href="https://zerodha.tech/"
            style={{
              textDecoration: "none",
              color: "#387ed1",
              fontWeight: "bold",
            }}
          >
            Zerodha.tech
          </a>{" "}
          {/* for space after a tag */}
          blog.
        </p>
      </div>
      <div className="row pt-3 mt-3">
        <br />
        <br />
      </div>
      <div className="row text-center">
        <h3>The Zerodha Universe</h3>
        <br />
        <br />
        <br />
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mt-3 pt-3">
        <div className="col-4  text-center">
          <a
            about="_blank"
            href="https://www.zerodhafundhouse.com/"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              src="./assets/zerodhaFundhouse.png"
              alt="zerodhaFundHouse"
              style={{ width: "50%", height: "auto" }}
            ></img>
            <br />
            <br />
            <span className="mt-3 pt-3" style={{ opacity: "0.7" }}>
              <p>
                Our assets managment venture
                <br /> that is creating simple and transparent index
                <br /> funds to help you save for your goals.
              </p>
            </span>
          </a>
          <br />
          <br />
          <br />
          <a
            about="_blank"
            href="https://www.streak.tech/home"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              src="./assets/streak-logo.png"
              alt="Streak"
              style={{ width: "50%", height: "auto" }}
            ></img>
            <br />
            <br />
            <span className="mt-3 pt-3" style={{ opacity: "0.7" }}>
              <p>
                Systematic trading platform
                <br /> that allows you to create and backtest
                <br /> strategies without coding.
              </p>
            </span>
          </a>
        </div>
        <div className="col-4  text-center">
          <a
            about="_blank"
            href="https://sensibull.com/"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              src="./assets/sensibull-logo.svg"
              alt="sensibull"
              style={{ width: "80%", height: "auto" }}
            ></img>
            <br />
            <br />
            <span className="mt-3 pt-3" style={{ opacity: "0.7" }}>
              <p>
                Options trading platform that lets you
                <br /> create strategies, analyze positions, and examine
                <br /> data points like open interest, FII/DII, and more.
              </p>
            </span>
          </a>
          <br />
          <br />
          <br />
          <a
            about="_blank"
            href="https://www.streak.tech/home"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              src="./assets/smallcaseLogo.png"
              alt="Streak"
              style={{ width: "65%", height: "auto" }}
            ></img>
            <br />
            <br />
            <span className="mt-3 pt-3" style={{ opacity: "0.7" }}>
              <p>
                Thematic investing platform
                <br /> that helps you invest in diversified
                <br /> baskets of stocks on ETFs.
              </p>
            </span>
          </a>
        </div>
        <div className="col-4  text-center">
          <a
            about="_blank"
            href="https://www.tijorifinance.com/ideas-dashboard/"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              src="./assets/tijori.svg"
              alt="zerodhaFundHouse"
              style={{ width: "40%", height: "auto" }}
            ></img>
            <br />
            <br />
            <span className="mt-3 pt-3" style={{ opacity: "0.7" }}>
              <p>
                Investment research platform
                <br /> that offers detailed insights on stocks,
                <br /> sectors, supply chains, and more.
              </p>
            </span>
          </a>
          <br />
          <br />
          <br />
          <a
            about="_blank"
            href="https://joinditto.in/"
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              src="./assets/ditto-logo.png"
              alt="Streak"
              style={{ width: "45%", height: "auto" }}
            ></img>
            <br />
            <br />
            <span className="mt-3 pt-3" style={{ opacity: "0.7" }}>
              <p>
                Personalized advice on life
                <br /> and health insurance. No spam
                <br /> and no mis-selling.
              </p>
            </span>
          </a>
        </div>
      </div>
      <div className="text-center mt-3 pt-3 mb-3 pb-3">
        <button className="btn btn-primary fs-5">Sign Up for free</button>
      </div>
      <br />
    </div>
  );
}

export default Universe;

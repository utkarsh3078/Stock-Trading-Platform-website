import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">People</h2>
        <div className="col-6 mt-3 pt-3">
          <div className="text-center">
            <img
              src="/assets/nithinKamath.jpg"
              style={{ width: "50%", height: "auto", borderRadius: "50%" }}
              alt="nithin-Kamath"
            ></img>
            <br />
            <br />
            <h5>Nithin Kamath</h5>
            <p>Founder, CEO</p>
          </div>
        </div>
        <div className="col-6 mt-3 pt-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="pt-3">Playing basketball is his zen.</p>

          <p className="pt-3">
            Connect on{" "}
            <a
              href="https://nithinkamath.me/"
              style={{ textDecoration: "none", color: "#387ed1" }}
            >
              Homepage
            </a>{" "}
            /{" "}
            <a
              href="https://tradingqna.com/u/nithin/summary"
              style={{ textDecoration: "none", color: "#387ed1" }}
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="https://x.com/Nithin0dha"
              style={{ textDecoration: "none", color: "#387ed1" }}
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="row mt-3 pt-3">
        <div className="col-4 text-center">
          <img
            src="/assets/Nikhil.jpg"
            alt="Nikhil-Kamath"
            style={{ width: "45%", height: "auto", borderRadius: "50%" }}
          ></img>
          <h5>Nikhil Kamath</h5>
          <p>Co-founder & CFO</p>
          <p>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              Bio <i class="fa-solid fa-caret-down"></i>
            </a>
          </p>
          <div className="text-left" style={{ display: "block" }}>
            <p>
              Nikhil is an astute and experienced investor, and he heads
              financial planning at Zerodha. An avid reader, he always
              appreciates a good game of chess.
            </p>
          </div>
        </div>
        <div className="col-4 text-center">
          <img
            src="/assets/Kailash.jpg"
            alt="Nikhil-Kamath"
            style={{ width: "45%", height: "auto", borderRadius: "50%" }}
          ></img>
          <h5>Dr. Kailash Nadh</h5>
          <p>CTO</p>
          <p>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              Bio <i class="fa-solid fa-caret-down"></i>
            </a>
          </p>
          <div>
            <p>
              Kailash has a PhD in Artificial Intelligence & Computational
              Linguistics, and is the brain behind all our technology and
              products. He has been a developer from his adolescence and
              continues to write code every day.
            </p>
          </div>
        </div>
        <div className="col-4 text-center">
          <img
            src="/assets/Venu.jpg"
            alt="Nikhil-Kamath"
            style={{ width: "45%", height: "auto", borderRadius: "50%" }}
          ></img>
          <h5>Venu Madhav</h5>
          <p>COO</p>
          <p>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              Bio <i class="fa-solid fa-caret-down"></i>
            </a>
          </p>
          <div>
            <p>
              Venu is the backbone of Zerodha taking care of operations and
              ensuring that we are compliant to rules and regulations. He has
              over a dozen certifications in financial markets and is also
              proficient in technical analysis. Workouts, cycling, and
              adventuring is what he does outside of Zerodha.
            </p>
          </div>
        </div>
        {/* 2nd line*/}
        <div className="col-4 text-center">
          <img
            src="/assets/Hanan.jpg"
            alt="Hanan Delvi"
            style={{ width: "45%", height: "auto", borderRadius: "50%" }}
          ></img>
          <h5>Hanan Delvi</h5>
          <p>CCO</p>
          <p>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              Bio <i class="fa-solid fa-caret-down"></i>
            </a>
          </p>
          <div>
            <p>
              We take pride in the way we support our clients, and Hanan is
              responsible for this with his never ending flow of energy. He is
              the man behind many of our support initiatives that have helped us
              stay ahead of the game. A free thinker, Hanan can be seen posing
              as one in his free time.
            </p>
          </div>
        </div>
        <div className="col-4 text-center">
          <img
            src="/assets/Seema.jpg"
            alt="Seema-Patil"
            style={{ width: "45%", height: "auto", borderRadius: "50%" }}
          ></img>
          <h5>Seema Patil</h5>
          <p>Director</p>
          <p>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              Bio <i class="fa-solid fa-caret-down"></i>
            </a>
          </p>
          <div>
            <p>
              Seema who has lead the quality team since the beginning of
              Zerodha, is now a director. She is an extremely disciplined
              fitness enthusiast.
            </p>
          </div>
        </div>
        <div className="col-4 text-center">
          <img
            src="/assets/karthik.jpg"
            alt="Karthik-Rangapa"
            style={{ width: "45%", height: "auto", borderRadius: "50%" }}
          ></img>
          <h5>Karthik Rangapa</h5>
          <p>Cheif of Education</p>
          <p>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              Bio <i class="fa-solid fa-caret-down"></i>
            </a>
          </p>
          <div>
            <p>
              Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's
              massive educational program. He heads investor education
              initiatives at Zerodha and loves stock markets, classic rock,
              single malts, and photography.
            </p>
          </div>
        </div>
        {/*3rd Line*/}
        <div className="col-4 text-center">
          <img
            src="/assets/Austin.jpg"
            alt="Austin-Prakash"
            style={{ width: "45%", height: "auto", borderRadius: "50%" }}
          ></img>
          <h5>Austin Prakash</h5>
          <p>Director Strategy</p>
          <p>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>
              Bio <i class="fa-solid fa-caret-down"></i>
            </a>
          </p>
          <div>
            <p>
              Austin is a successful self-made entrepreneur from Singapore. His
              area of specialty revolves around helping organisations including
              grow by optimizing revenue streams and creating growth strategies.
              He is a boxing enthusiast and loves collecting exquisite watches.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

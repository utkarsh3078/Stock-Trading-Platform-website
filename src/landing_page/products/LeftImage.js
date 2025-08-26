import React from "react";

function LeftImage({
  imageURL,
  productName,
  productDescription,
  link1,
  link1name,
  arrow1,
  link2,
  link2name,
  arrow2,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 p-3">
          <a href="#" style={{ width: "30" }}>
            <img
              src={imageURL}
              alt="product-kite"
              style={{ width: "100%", height: "auto" }}
            ></img>
          </a>
        </div>
        <div className="col-1"></div>
        {/* for creating extra col between image and right content */}
        <div className="col-6 p-3">
          <h1>{productName}</h1>
          <p style={{ fontSize: "1rem" }}>{productDescription}</p>
          <div className="mb-3">
            <a
              target="_blank"
              href={link1}
              style={{
                textDecoration: "none",
                color: "#387ed1",
                marginRight: "64px",
              }}
            >
              {link1name}
              {arrow1}
            </a>
            <a
              target="_blank"
              href={link2}
              style={{
                textDecoration: "none",
                color: "#387ed1",
              }}
            >
              {link2name}
              {arrow2}
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href={googlePlay}
              style={{ marginRight: "36px" }}
            >
              <img src="./assets/googleplayBadge.svg" />
            </a>
            <a target="_blank" href={appStore}>
              <img src="./assets/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;

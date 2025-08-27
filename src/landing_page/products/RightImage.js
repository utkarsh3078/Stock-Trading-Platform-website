import React from "react";

function RightImage({
  productName,
  productDescription,
  link,
  linkName,
  imgURL,
  altImageName,
}) {
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-5 p-3">
          <h1 className="pt-3 mt-3">{productName}</h1>
          <p>{productDescription}</p>
          <a
            target="_blank"
            rel="noreferrer"
            href={link}
            style={{
              textDecoration: "none",
              color: "#387ed1",
            }}
          >
            {linkName} <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6 p-3">
          <img
            src={imgURL}
            alt={altImageName}
            style={{ width: "100%", height: "auto" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default RightImage;

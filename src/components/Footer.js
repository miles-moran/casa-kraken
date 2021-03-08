import React from "react";

export default ({ backgroundColor = "rgb(153, 190, 250)" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor,
        padding: "5%",
      }}
    >
      <div>
        <a
          target="_blank"
          style={{ margin: "1rem" }}
          href="https://www.instagram.com/krakenhostel/"
        >
          <i className="fab white fa-2x fa-instagram"></i>
        </a>
        <a
          target="_blank"
          style={{ margin: "1rem" }}
          href="https://www.facebook.com/krakenhostel"
        >
          <i className="fab white fa-2x fa-facebook-square"></i>
        </a>
        <a style={{ margin: "1rem" }} href="mailto:casakrakenhostel@gmail.com">
          <i className="fas white fa-2x fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

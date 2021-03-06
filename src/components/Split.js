import React from "react";
import sample1 from "../assets/sample1.jpg";
export default ({ backgroundColor = "#eaeaea" }) => {
  const pictures = [
    {
      picture: sample1,
      caption: "Two Bed",
    },
    {
      picture: sample1,
      caption: "Four Bed",
    },
    {
      picture: sample1,
      caption: "Six Bed",
    },
    {
      picture: sample1,
      caption: "Eight Bed",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: '4rem',
        backgroundColor: backgroundColor
      }}
    >
      {pictures.map((pic) => (
        <div style={{ flex: "1 0 30%", width: "100%", maxHeight: "25rem", padding: "2rem"}}>
          <img src={pic.picture} style={{ width: "100%", height: "100%" }} />
          <div style={{textAlign: "center", marginBottom: "1rem", fontSize: "30px", fontWeight: "bold"}}>{pic.caption}</div>
        </div>
      ))}
    </div>
  );
};

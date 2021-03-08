import React from "react";
export default ({ backgroundColor = "#eaeaea", pictures, slant }) => {
  let tablet = false
  if (window.innerWidth <= 768){
    tablet = true
  }
  return (
    <div
      className={slant}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div style={{width: '80%',display: "flex",
        flexWrap: "wrap", margin: 'auto'}}>
      {pictures.map((pic) => (
        <div
          style={{
            flex: tablet ? "1 0 100%":  "1 0 20%",
            width: "100%",
            maxHeight: "25rem",
            padding: ".5rem",
            marginBottom: (pic.caption || tablet) && "3rem",
          }}
        >
          <img
            src={pic.picture ? pic.picture : pic}
            style={{ width: "100%", height: "100%" }}
          />

          <span
            style={{
              fontWeight: '300',
              fontSize: "2.2rem",
            }}
          >
            {pic.caption}
          </span>
        </div>
      ))}
      </div>
    </div>
  );
};

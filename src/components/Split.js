import React, {useState} from "react";
export default ({ backgroundColor = "#eaeaea", pictures, slant }) => {
  
  return (
    <div
      className={slant}
      style={{
        backgroundColor: backgroundColor,
        paddingTop: !slant && "4rem",
        paddingBottom: !slant && "4rem",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          flexWrap: "wrap",
          margin: "auto",
        }}
      >
        {pictures.map((pic) => (
          <div
            className={pic.caption ? "pics-with-caption" : "pics"}
            style={{
              width: "100%",
              maxHeight: "25rem",
              padding: ".5rem",
            }}
          >
            <img
              src={pic.picture ? pic.picture : pic}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onClick={() => console.log('tits')}
            />

            {pic.caption && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "2.2rem",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {pic.caption.primary}
                </span>
                <span
                  style={{
                    fontWeight: "300",
                    fontSize: "2.2rem",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {pic.caption.secondary}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

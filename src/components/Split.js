import React from "react";
export default ({ backgroundColor = "#eaeaea", pictures}) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "4rem",
        backgroundColor: backgroundColor,
      }}
    >
      {pictures.map((pic) => (
        <div
          style={{
            flex: "1 0 20%",
            width: "100%",
            maxHeight: "25rem",
            padding: ".5rem",
            marginBottom: pic.caption && '2rem'
          }}
        >
          <img src={pic.picture ? pic.picture : pic} style={{ width: "100%", height: "100%" }} />
  
            <span style={{marginBottom: "5rem", fontWeight: "bold", fontSize: '25px'}}>{pic.caption}</span>
      
        </div>
      ))}
    </div>
  );
};

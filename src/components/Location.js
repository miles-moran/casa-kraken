import Slide from "./Slide";

import image4 from "../assets/location.jpg";
import Frame from "./Frame";

const Location = () => {
  const locs = ["Bar Morelos", "The Malecon", "Church of Guadalaupe"];
  return (
    <>
      <Slide header={"Location"} image={image4} height="70vh" />
      <Frame
        header={"What's Nearby?"}
        subheader={
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              flexWrap: "wrap",
            }}
          >
            {locs.map((l) => (
              <div style={{ margin: "1rem" }}>{l}</div>
            ))}
          </div>
        }
      />
      <iframe
        width="100%"
        height="450"
        loading="lazy"
        style={{border: 'none'}}
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ___L_E5FIYQRt-IjRJ90ILk&key=AIzaSyBTGx2w44cRprSpx83XMTumzg4vx4w0q6M"
      />
    </>
  );
};

export default Location;

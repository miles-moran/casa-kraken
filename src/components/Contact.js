import Slide from "./Slide";

import image4 from "../assets/sample4.jpg"
import Frame from "./Frame";

const Gallery = () => {
  return (
    <>
    <Slide
      header={"Booking"}
      image={image4}
      height="70vh"
    />
    <Frame
        header={"Facilities"}
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
           Under Construction
          </div>
        }
      />
    </>
  );
};

export default Gallery;

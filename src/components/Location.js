import Slide from "./Slide";

import image4 from "../assets/location.jpg";
import Frame from "./Frame";
import Slanted from "./Slanted";
import pv from "../assets/pv.jpg";

const Location = () => {
  const locs = ["Bar Morelos", "The Malecon", "Church of Guadalaupe", "Bar Morelos", "The Romantic Zone", "La Cappella", "Los Muertos Beach", "Mirador Cerro de La Cruz", "Mandela", "Zoo", "La Vaquita", "Starbucks"];
  return (
    <>
      <Slide header={"Location"} image={image4} height="70vh" />
      <Slanted
        header={'In the Heart of Puerto Vallarta'}
        subheader={'Five minutes from everywhere in Downtown, Hostel Kraken is the place to be. We are located two blocks from the Malecon boardwalk and nearly touch the border of the famed Romantic Zone of Vallarta. Nearly the entirety of Vallarta can be soon from our rooftop bar.'}
        slant={'bottom'}
      />
      <Slide image={pv} height={'50vh'}/>
      <Slanted
      slant={'top'}
        header={"What's Nearby?"}
        backgroundColor={'Lightblue'}
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
            {locs.map((f) => (
              <div style={{ margin: ".5rem", width: "40%" }}>{f}</div>
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

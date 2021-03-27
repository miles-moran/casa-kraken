import Slide from "./Slide";

import image4 from "../assets/sample4.jpg";
import Frame from "./Frame";
import image1 from "../assets/sample1.jpg";
import Split from "./Split";
import Slanted from "./Slanted";

const Gallery = () => {
  const pictures = [
    {
      picture: image1,
      caption: {
        primary: "Mixed 8 Dorm",
        secondary: "$200",
      },
    },
    {
      picture: image1,
      caption: {
        primary: "Mixed 10 Dorm",
        secondary: "$200",
      },
    },
    {
      picture: image1,
      caption: {
        primary: "Female Dorm",
        secondary: "$200",
      },
    },
  ];

  return (
    <>
      <Slide header={"Booking"} image={image4} height="70vh" />
      <Slanted
        slant={"bottom"}
        header={"Pricing"}
        subheader={
          <>
            <p>
              Pricing can vary throughout the year. <br /> 100 pesos deposit is
              required.
            </p>
            <p>
              Reservations can be made online.
              <br/>
              Cash only for walk-ins.
            </p>
          </>
        }
      />
      <Split pictures={pictures} />
      <Frame
        header={"Terms & Conditions"}
        subheader={
          <ul>
            <li>Payment in cash</li>
            <li>Check-outs at 11AM</li>
            <li>Cancellations with 48 hours notice</li>
            <li>Reception is open from 8AM to 10PM</li>
            <li>Check-ins can be made before 8AM and after 10PM with advanced notice</li>
            <li>No curfew</li>
            <li>No customers younger than 18</li>
            <li>No customers older than 50</li>
            <li>A valid national ID is required for Mexican nationals</li>
            <li>A passport is required for foreign citizens</li>
          </ul>
        }
        backgroundColor={"#fadadd"}
      />
    </>
  );
};

export default Gallery;

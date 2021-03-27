import Slide from "./Slide";

import image4 from "../assets/sample4.jpg";
import Split from "./Split";
import insta1 from "../assets/insta1.jpg";
import insta2 from "../assets/insta2.jpg";
import insta3 from "../assets/insta3.jpg";
import insta4 from "../assets/insta4.jpg";
import insta5 from "../assets/insta5.jpg";
import insta6 from "../assets/insta6.jpg";
import insta7 from "../assets/insta7.jpg";
import insta8 from "../assets/insta8.jpg";
import insta9 from "../assets/insta9.jpg";
import insta10 from "../assets/insta10.jpg";
import insta11 from "../assets/insta11.jpg";
import insta12 from "../assets/insta12.jpg";
import insta13 from "../assets/insta13.jpg";
import insta14 from "../assets/insta14.jpg";
import insta15 from "../assets/insta15.jpg";
import insta16 from "../assets/insta16.jpg";
import insta17 from "../assets/insta17.jpg";
import insta18 from "../assets/insta18.jpg";
import insta19 from "../assets/insta19.jpg";

import Slanted from "./Slanted";
const Gallery = () => {
  const pictures = [
    insta1,
    insta2,
    insta3,
    insta4,
    insta5,
    insta6,
    insta7,
    insta8,
    insta9,
    insta10,
    insta11,
    insta12,
    insta13,
    insta14,
    insta15,
    insta16,
    insta17,
    insta18,
    insta19,
  ];
  return (
    <>
      <Slide header={"Gallery"} image={image4} height="70vh" />
      <Slanted
        slant={"bottom"}
        header={"Make memories!"}
        subheader={"Below are a few pictures from our adventures at the hostel."}
        backgroundColor="lightblue"
      />
      <Split pictures={pictures} />
    </>
  );
};

export default Gallery;

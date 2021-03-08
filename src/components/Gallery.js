import Slide from "./Slide";

import image4 from "../assets/sample4.jpg"
import Split from "./Split";
import insta1 from "../assets/insta1.jpg"
import insta2 from "../assets/insta2.jpg"
import insta3 from "../assets/insta3.jpg"
import insta4 from "../assets/insta4.jpg"
const Gallery = () => {
  const pictures = [insta1, insta2, insta3, insta4, insta1, insta2, insta3, insta4, insta1, insta2, insta3, insta4, insta1, insta2, insta3, insta4]
  return (
    <>
    <Slide
      header={"Gallery"}
      image={image4}
      height="70vh"
      
    />
    <Split pictures={pictures} />
    </>
  );
};

export default Gallery;

import Slide from "./Slide";

import image4 from "../assets/sample4.jpg"

const Gallery = () => {
  return (
    <Slide
      header={"Gallery"}
      image={image4}
      height="50vh"
    />
  );
};

export default Gallery;

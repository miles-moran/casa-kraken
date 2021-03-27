import Slide from "./Slide";
import image1 from "../assets/DSC2642_1.jpg";
import Frame from "./Frame";
import image2 from "../assets/sample1.jpg";
import image3 from "../assets/sample2.jpg";
import image4 from "../assets/sample4.jpg";
import Split from "./Split";
import Slanted from "./Slanted";
const Home = () => {
  const fac = [
    "Internet",
    "Free Breakfast",
    "Linen Included",
    "Bar",
    "Hot Showers",
    "BBQ",
    "Board Games",
    "Security Lockers",
    "Microwave",
    "Common Room",
    "Book Exchange",
    "Card Phones",
    "Follows Covid-19 sanitation guidance",
    "Iron / Ironing Board",
    "Towels Not Included",
    "Utensils",
    "Housekeeping",
    "Reception (limited hours)",
    "Luggage Storage",
    "Late check-out",
  ];
  const act = ["Board Games", "Barbeques", "Painting Classes", "Sightseeing", "Spanish Classes", "Hikes"];
  const trips = ["Los Colomitos Beach", "El Mirador", "Playa Gemelas", "Playa Palmares", "Bar Aloha", "Paco's Ranch"];
  const pictures = [
    {
      picture: image2,
      caption: {
        primary: "Mixed 8 Dorm",
        secondary: "$200",
      },
    },
    {
      picture: image3,
      caption: {
        primary: "Mixed 10 Dorm",
        secondary: "$200",
      },
    },
    {
      picture: image3,
      caption: {
        primary: "Female Dorm",
        secondary: "$200",
      },
    },
  ];
  return (
    <>
      <Slide
        header={<>EXPERIENCE PUERTO VALLARTA</>}
        subheader={""}
        image={image1}
        button={true}
      />
      <Slanted
        slant={"bottom"}
        header={"RELEASE THE KRAKEN!"}
        subheader={
          "Formerly called Oasis Downtown Hostel, this is one of the few youth hostels in downtown Puerto Vallarta. Welcome to your temporal refuge in Mexico. Our location is one of the best: we are in between the main church (Parish of Our Lady of Guadalupe) and the main square (Plaza de Armas which is adjacent to the city hall). We are located in one of the most privileged weather with almost 300 suny day per year. 26° Celsius pretty much all year long and in a bay where you will enjoy every day an unforgettable sunset. Feel safe while you experience the wonders of this magical beach paradise called Puerto Vallarta. "
        }
      />
      <Slide
        header={"ROOMS"}
        subheader={
          "We have three room types available: Our basic mixed dorm for eight, our basic mixed dorm for ten, and a standard female dorm for ten."
        }
        height={"50%"}
        image={image2}
        button={true}
        scale={0.6}
      />
      <Split
        backgroundColor="#FFE4E1"
        slant={"top bottom"}
        pictures={pictures}
      />
      <Slide
        header={"THE EXPERIENCE"}
        subheader={
          "We provide a fully equipped kitchen for you to be able to save some money and make your favourite dishes, though breakfast is included free. We have multiple lounge areas with free wifi, a rooftop bar, and hot showers."
        }
        image={image3}
        height={"50%"}
        scale={0.6}
      />
      <Slanted
        slant={"top bottom"}
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
            {fac.map((f) => (
             <div className={"list-item"} style={{ margin: ".5rem" }}>{f}</div>
            ))}
          </div>
        }
      />
      <Slide
        header={"OUR STAFF"}
        subheader={
          "Our friendly and experienced staff will help you with everything you need, from showing you the best spots, restaurants, bars, clubs and shops to helping you plan your next trip. We know how to fulfill your needs, as we are travelers too."
        }
        image={image4}
        height={"50%"}
        scale={0.6}
      />
      <Slanted
        header={"Activities"}
        slant={"top bottom"}
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
            {act.map((a) => (
               <div className={"list-item"} style={{ margin: ".5rem" }}>{a}</div>
            ))}
          </div>
        }
      />
      <Frame
        header={"Trips to:"}
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
            {trips.map((a) => (
              <div className={"list-item"} style={{ margin: ".5rem" }}>{a}</div>
            ))}
          </div>
        }
      />
    </>
  );
};

export default Home;

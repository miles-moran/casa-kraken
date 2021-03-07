import Slide from "./Slide";
import image1 from "../assets/DSC2642_1.jpg";
import Frame from "./Frame";
import image2 from "../assets/sample1.jpg";
import image3 from "../assets/sample2.jpg";
import image4 from "../assets/sample4.jpg";
import Split from "./Split";
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
  const pictures = [
    {
      picture: image2,
      caption: "Two Bed",
    },
    {
      picture: image3,
      caption: "Four Bed",
    },
    {
      picture: image3,
      caption: "Six Bed",
    },
  ];
  return (
    <>
      <Slide
        header={"COLLECT MOMENTS NOT THINGS"}
        subheader={"Welcome to Hostel Kraken!"}
        image={image1}
        button={true}
      />
      <Frame
        header={"360 – PURE ENJOYMENT IN A WARM CITY CALLED BARCELONA…"}
        subheader={
          " 360 Hostel Barcelona is located only a few blocks away from the main Plaza Cataluña. We’re right next to the cosy Borne neighborhood, within walking distance of all the main attractions, bars and shops, from the luxurious Paseo de Gracia Avenue to the historical Gothic and the vibrant Raval. Our daily activities agenda will make it easy to meet fellow travelers."
        }
      />
      <Slide
        header={"ROOMS"}
        subheader={
          "We have five different room types. You can choose between our two-bed (with private terrace), four-bed, six-bed, eight-bed or ten-bed dorm. Bed sheets and linen are provided and all rooms come with big security lockers, reading lights and air-conditioning units."
        }
        height={"50%"}
        image={image2}
        button={true}
      />
      <Split pictures={pictures} />
      <Slide
        header={"THE EXPERIENCE"}
        subheader={
          "We provide a fully equipped kitchen for you to be able to save some money and make your favourite dishes. In the big lounge area with comfy sofas you can meet travelers from all around the world, share experiences and make new friends. Our hostel also offers plenty of computers with 24 hours free internet access and Wi-Fi all over the hostel for you to keep in touch, or plan your next trips."
        }
        image={image3}
        height={"50%"}
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
            {fac.map((f) => (
              <div style={{ margin: "1rem", width: "40%" }}>{f}</div>
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
      />
    </>
  );
};

export default Home;

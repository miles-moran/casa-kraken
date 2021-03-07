const Slide = ({ height = "100vh", width = "100vw", image, header, subheader, footer, button=false }) => {
  return (
    <div
      id="banner"
      style={{
        height: height,
        width: width,
        backgroundColor: "black",
        display: "block",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${image})`,
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(51, 51, 51, 0.25)",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div id="slide-content" style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "5%", paddingBottom: "5%" }}>
            <div
              style={{
                textAlign: "center",
                fontSize: "75px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "800",
                color: "white",
              }}
            >
              {header}
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "35px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "400",
                color: "white",
                marginTop: "2rem",
              }}
            >
              {subheader}
            </div>
            {button && <div style={{ textAlign: "center", marginTop: "4rem" }}>
              <a
                className="book-now pointer"
                target="_blank"
                href="https://www.hostelworld.com/hosteldetails.php/Casa-Kraken-Hostel/Puerto-Vallarta/286111"
                style={{
                  borderRadius: "25px",
                  fontFamily: "Montserrat, sans-serif",
                  padding: "9px 23px",
                  fontSize: "20px",
                }}
              >
                Book Now
              </a>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;

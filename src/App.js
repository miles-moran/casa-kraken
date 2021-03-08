import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Location from "./components/Location";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
const App = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      const innerHeight = document.getElementById("banner").offsetHeight;
      const scrollTop = document.documentElement.scrollTop;
      let percent = scrollTop / innerHeight;
      if (percent > 1) {
        percent = 1;
      }
      if (window.innerWidth > 768){
        document.getElementById("slide-content").style.opacity = 1 - percent;
      }
      if (percent >= 1) {
        document.getElementById("nav").style.backgroundColor = "black";
      } else {
        document.getElementById("nav").style.backgroundColor = "transparent";
      }
    };
  }, []);
  return (
    <Router>
      <nav>
        <ul className="nav-links" id="nav">
          <span className="left">
            <li className="nav-link logo">Hostel Kraken</li>
          </span>

          <li>
            <NavLink
              className="nav-link mobile-hidden"
              to="/"
              activeStyle={{ color: "#0099ff" }}
              exact
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{ color: "#0099ff" }}
              className="nav-link mobile-hidden"
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{ color: "#0099ff" }}
              className="nav-link mobile-hidden"
              to="/location"
            >
              Location
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{ color: "#0099ff" }}
              className="nav-link mobile-hidden"
              to="/contact"
            >
              Booking
            </NavLink>
          </li>
        

          <li
            className="mobile-visible pointer"
            onClick={() => setModal(!modal)}
          >
            <i class="fas fa-2x fa-bars"></i>
          </li>
        </ul>
      </nav>
      {modal && (
        <div
          onClick={() => setModal(false)}
          className="modal mobile-visible"
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            backgroundColor: "black",
            transition: ".5s",
            zIndex: 50,
            top: 0,
          }}
        >
          <ul
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <li style={{ marginTop: "1rem" }}>
              <NavLink
                className="nav-link"
                to="/"
                activeStyle={{ color: "#0099ff" }}
                exact
              >
                About
              </NavLink>
            </li>
            <li style={{ marginTop: "1rem" }}>
              <NavLink
                activeStyle={{ color: "#0099ff" }}
                className="nav-link"
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>
            <li style={{ marginTop: "1rem" }}>
              <NavLink
                activeStyle={{ color: "#0099ff" }}
                className="nav-link"
                to="/location"
              >
                Location
              </NavLink>
            </li>
            <li style={{ marginTop: "1rem" }}>
              <NavLink
                activeStyle={{ color: "#0099ff" }}
                className="nav-link "
                to="/contact"
              >
                Booking
              </NavLink>
            </li>
        
          </ul>
        </div>
      )}
      <Switch>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/location">
          <Location />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

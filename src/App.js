import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import { useEffect } from "react";
import Footer from "./components/Footer";
const App = () => {
  useEffect(() => {
    window.onscroll = () => {
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;
      let percent = scrollTop / innerHeight;
      if (percent > 1) {
        percent = 1;
      }
      console.log(percent);
      document.getElementById("slide-content").style.opacity = 1 - percent;
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
            <NavLink className="nav-link" to="/">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-link">BOOK NOW</li>
        </ul>
      </nav>
      <Switch>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;

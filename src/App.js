import "./Assets/Styles/styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Event from "./Components/pages/Event";
import Header from "./Components/UI/Header";
import Gallery from "./Components/pages/Gallery/Gallery";
import Album from "./Components/pages/Gallery/Album";
import NavBar from "./Components/UI/navbar/NavBar";

function App() {
  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Event />} />
            <Route exact path="/galleries" element={<Gallery />} />
            <Route path="galleries/:albumName" element={<Album />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

import Header from "./Components/Header";
import "./Assets/Styles/styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ToTopButton from "./Components/ToTopButton";
import Home from "./Components/Home";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Event from "./Components/Event";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Event />} />
          <Route path="/galleries" element={<Gallery />} />
        </Routes>
        <ToTopButton />
      </div>
    </Router>
  );
}

export default App;

import "./Assets/Styles/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContactUs } from "./pages/contact/ContactUs";
import Header from "./Components/header/Header";
import NavBar from "./Components/navbar/NavBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Album from "./pages/album/Album";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route exact path="/galleries" element={<Gallery />} />
            <Route path="galleries/:albumName" element={<Album />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

import Header from "./Components/Header";
import "./Assets/Styles/styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ToTopButton from "./Components/ToTopButton";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>

        <ToTopButton />
      </div>
    </Router>
  );
}

export default App;

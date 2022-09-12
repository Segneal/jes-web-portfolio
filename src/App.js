import "./Assets/Styles/styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/header/Header";
import NavBar from "./Components/navbar/NavBar";
import AnimatedRoutes from "./pages/AnimatedRoutes";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <NavBar />
          <AnimatedRoutes />
        </Router>
      </div>
    </>
  );
}

export default App;

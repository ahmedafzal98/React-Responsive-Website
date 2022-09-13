import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import Products from "./Components/Pages/Products";
import Signup from "./Components/Pages/Signup";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/signUp" exact element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

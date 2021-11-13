import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MyNavbar from "./components/MyNavbar.js";
import MyFooter from "./components/MyFooter.js";
// import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/home/contact" element={<Contact />} />
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App;

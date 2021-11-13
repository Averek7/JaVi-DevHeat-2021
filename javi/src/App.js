import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MyNavbar from "./components/MyNavbar.js";
import Caro from "./components/Caro.js";
import MyFooter from "./components/MyFooter.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Caro />
      <Routes>
        <Route exact path="\home" element={<Home />} />
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App;

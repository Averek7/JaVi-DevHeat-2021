import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MyNavbar from "./components/MyNavbar.js";
// import { Alert } from "react-bootstrap";c
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/home'element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;

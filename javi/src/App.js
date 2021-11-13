<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import MyNavbar from './components/MyNavbar';
import Login from './components/Login';
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MyNavbar from "./components/MyNavbar.js";
import Caro from "./components/Caro.js";
// import { Alert } from "react-bootstrap";
>>>>>>> c9714db8b2d57afe7c81b4483c79f8304ab035ac
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <MyNavbar />
<<<<<<< HEAD
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route exact path='/home'element={<Home/>}/>
=======
      <Caro />
      <Routes>
        <Route exact path="\home" element={<Home />} />
>>>>>>> c9714db8b2d57afe7c81b4483c79f8304ab035ac
      </Routes>
    </Router>
  );
}

export default App;

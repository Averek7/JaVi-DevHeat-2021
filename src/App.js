import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MyNavbar from "./components/MyNavbar.js";
import MyFooter from "./components/MyFooter.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";
import ChatRoom from "./components/ChatRoom";
import { AnimatePresence } from "framer-motion";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";

function App() {
  const apiKey = "a6502704ab5b43fdaea331253fffd24a";
  const country = "in";

  return (
    <Router>
      <MyNavbar />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard  country={country} apiKey={apiKey} category="health" key="health"/>} />
          <Route exact path="/chatroom" element={<ChatRoom />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <MyFooter />
    </Router>
  );
}

export default App;

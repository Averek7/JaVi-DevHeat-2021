import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MyNavbar from "./components/MyNavbar.js";
import MyFooter from "./components/MyFooter.js";
// import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";
import ChatRoom from "./components/ChatRoom";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <AnimatePresence>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/home/contact" element={<Contact />} />
          <Route exact path="/home/chatroom" element={<ChatRoom />} />
        </AnimatePresence>
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App;

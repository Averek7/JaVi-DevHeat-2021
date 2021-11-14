import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MyNavbar from "./components/MyNavbar.js";
import MyFooter from "./components/MyFooter.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";
import ChatRoom from "./components/ChatRoom";
import { AnimatePresence } from "framer-motion";
import Dashboard from "./components/Dashboard";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Welcome />
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/home/dashboard" element={<Dashboard />} />
          <Route exact path="/home/chatroom" element={<ChatRoom />} />
          <Route exact path="/home/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <MyFooter />
    </Router>
  );
}

export default App;

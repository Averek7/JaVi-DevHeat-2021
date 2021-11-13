import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import MyNavbar from './components/MyNavbar';
import Login from './components/Login';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route exact path='/home'element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Appoint from './components/BookAppointment';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <Navbar/>
    {/* <Home/> */}
    <Routes>
    <Route element={<><Home/> <About/> <Contact/><Appoint/></>} path="/"/>
    <Route element={<><About/></>} path="/about"/>
    <Route element={<><Contact/></>} path="/Contact"/>
    <Route element={<><Appoint/></>} path="/Appointment"/>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;

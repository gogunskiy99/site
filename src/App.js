import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home"
import Contacts from "./pages/Contacts"
import About from "./pages/About"
import MyCarousel from "./Components/Carousel"
import "./App.css"

function App() {
  return (
  <Router>
    <Header/>
      <div>
        <Routes>
          <Route path="/" element={<><MyCarousel/> <Home/></>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contacts/>}/>
        </Routes>
      </div>
  </Router>
    
  );
}

export default App;

// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

// COMPONENTS
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import DisplayAllPlaces from "./Components/DisplayAllPlaces";
import DisplayOnePlace from "./Components/DisplayOnePlace";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<DisplayAllPlaces />} />
        <Route path="/places/:id" element={<DisplayOnePlace />} />
      </Routes>
    </Router>
  );
}

export default App;

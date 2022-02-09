// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

// COMPONENTS
import DisplayAllPlaces from './Components/DisplayAllPlaces';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/places" element={ <DisplayAllPlaces /> } />
      </Routes>
    </Router>
  );
}

export default App;

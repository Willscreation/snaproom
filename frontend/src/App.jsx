import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css'
import Hero from "./components/Homepage/Herosec";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero/>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/start" element={<h1>Start for Free</h1>} />
        <Route path="/subscriptions" element={<h1>Subscriptions</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

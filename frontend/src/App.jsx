import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ImageUploader from "./components/ImageUploader";
import Subscription from "./components/subscription/Subscription";
import Hero from "./components/Homepage/Herosec";
import Loader from "./components/loader/Loader";

const App = () => {
  return (
    <>
    <Loader />
    <Router>
      <Navbar />
      <Hero/>
      <Subscription />
      {/* <div>
        <ImageUploader />
      </div> */}
      {/* 🔹 Wrap Routes inside <Routes> */}
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/start" element={<h1>Start for Free</h1>} />
        <Route path="/subscriptions" element={<h1>Subscriptions</h1>} />
      </Routes>
    </Router>
    </>
  );
};

export default App;

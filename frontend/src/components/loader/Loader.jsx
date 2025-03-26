import React, { useState, useEffect } from "react";
import "./Loader.css";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to remove the loader after a delay
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 600); // 60 seconds delay
    };

    // If the page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return isLoading ? (
    <div className="loader-container">
      <div className="loader"></div>
      <p className="loading-text">Loading, please wait...</p>
    </div>
  ) : null;
};

export default Loader;

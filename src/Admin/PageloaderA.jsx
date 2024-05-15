import React, { useState, useEffect } from "react";
import "./PageLoader.css"; // Import your CSS file for styling

const PageLoaderA = () => {
  // State to manage the visibility of the loader
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Set the desired delay in milliseconds (e.g., 2000ms = 2 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-loader ${loading ? "visible" : "hidden"}`}>
      <div className="loader"></div>
    </div>
  );
};

export default PageLoaderA;

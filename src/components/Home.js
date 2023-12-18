import React from "react";
import Navbar from './Navbar';
import "./Home.css";
import DsaTracker from "./DSAtracker";

const Home = () => {
  
 
  return (
    <>
      
      <div className="App">
      <div className=""><Navbar /></div>
      <div className=""><DsaTracker /></div>
    </div>
     
      
    </>
  );
};

export default Home;

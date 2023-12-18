// Navbar.js

import React from 'react';
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { Button } from "react-bootstrap";
import "./Navbar.css"

const Navbar = () => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
  // Handle the logout function when the button is clicked
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (

      <nav className="navbar">
        <h1>DSA<span>Quest</span></h1>
       
      <Button className="btn" variant="primary" onClick={handleLogout}>
          Log out
        </Button>
    </nav>
  );
};

export default Navbar;


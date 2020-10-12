import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

  return (
    <div>
      <div className="App">
        <h1>Water My Plants</h1>
        <div className="container">
          <Link to="/" style={{ textDecoration: 'none', color: "gray", margin: "5px", padding: "5px" }}>Home</Link>
          <Link to="/about"style={{ textDecoration: 'none', color: "gray", margin: "5px", padding: "5px" }}>About</Link>
          <Link to="/contact"style={{ textDecoration: 'none', color: "gray", margin: "5px", padding: "5px" }}>Contact</Link>
        </div>
        <div className="container">
          <Link to="/PlantsList"style={{ textDecoration: 'none', color: "gray", margin: "5px", padding: "5px" }}>PlantsList</Link>
        </div>
        <div className="container">
          <Link to="/LogIn"style={{ textDecoration: 'none', color: "gray", margin: "5px", padding: "5px" }}>LogIn</Link>
          <Link to="/LogOut"style={{ textDecoration: 'none', color: "gray", margin: "5px", padding: "5px" }}>LogOut</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

  return (
    <div>
      <div className="App">
        <h1>Water My Plants</h1>
        <div class="container">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div class="container">
          <Link to="/PlantsList">PlantsList</Link>
        </div>
        <div class="container">
          <Link to="/LogIn">Log In</Link>
          <Link to="/LogOut">Log Out</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>Water My Plants</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <Link to="/PlantsList">PlantsList</Link>
        </div>
        <div>
          <Link to="/LogIn">Log In</Link>
        </div>
        <div>
          <Link to="/LogOut">Log Out</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = ({isLoggedIn}) => {

  return (
    <div>
      <div className="App">
        {isLoggedIn ?
          <div className="ncontainer" style={{ backgroundImage: "linear-gradient(white, rgb(143, 185, 143))", }}>
            <h2>Water My Plants</h2>
            <div className="links">
              <GreenLink to="/">Home</GreenLink>
              <GreenLink to="/PlantsList">PlantsList</GreenLink>
              <GreenLink to="/LogOut">LogOut</GreenLink>
            </div>
          </div> :
          <div className="ncontainer" style={{ backgroundImage: "linear-gradient(white, pink)", }}>
          <h2>Water My Plants</h2>
          <div className="links">
            <PinkLink to="/">Home</PinkLink>
            <PinkLink key="signup" to="/SignUp">SignUp</PinkLink>
            <PinkLink key="login" to="/LogIn">LogIn</PinkLink>
          </div>
        </div>
        }
      </div>
    </div>
  );
};

const PinkLink = styled(Link)`
  text-decoration: none;
  color: gray;
  margin: 5px;
  padding: 5px;
  &:hover {
    background-color: pink;
    color: white;
  }
`

const GreenLink = styled(Link)`
  text-decoration: none;
  color: gray;
  margin: 5px;
  padding: 5px;
  &:hover {
    background-color: green;
    color: white;
  }
`

const EmptyLink = styled(Link)`
  text-decoration: none;
  color: gray;
  margin: 5px;
  padding: 5px;
`

export default Navigation;

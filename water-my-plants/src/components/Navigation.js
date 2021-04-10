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
              <GreenLink to="/about">About</GreenLink>
              <GreenLink to="/contact">Contact</GreenLink>
              {isLoggedIn ?
                <GreenLink to="/PlantsList">PlantsList</GreenLink> :
                <GreenLink />
              }
              {isLoggedIn ?
                <GreenLink to="/LogOut">LogOut</GreenLink> :
                [<GreenLink to="/LogIn">LogIn</GreenLink>,
                <GreenLink to="/SignUp">SignUp</GreenLink>]
              }
            </div>
          </div> :
          <div className="ncontainer" style={{ backgroundImage: "linear-gradient(white, pink)", }}>
          <h2>Water My Plants</h2>
          <div className="links">
            <PinkLink to="/">Home</PinkLink>
            <PinkLink to="/about">About</PinkLink>
            <PinkLink to="/contact">Contact</PinkLink>
            {isLoggedIn ?
              <PinkLink to="/PlantsList">PlantsList</PinkLink> :
              <PinkLink />
            }
            {isLoggedIn ?
              <PinkLink to="/LogOut">LogOut</PinkLink> :
              [<PinkLink to="/LogIn">LogIn</PinkLink>,
              <PinkLink to="/SignUp">SignUp</PinkLink>]
            }
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

export default Navigation;

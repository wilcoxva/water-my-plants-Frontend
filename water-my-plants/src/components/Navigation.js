import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = ({isLoggedIn}) => {

  return (
    <div>
      <div className="App">
        <div className="ncontainer">
          <h2>Water My Plants</h2>
          <div className="links">
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
            {isLoggedIn ?
              <StyledLink to="/PlantsList">PlantsList</StyledLink> :
              <StyledLink />
            }
            {isLoggedIn ?
              <StyledLink to="/LogOut">LogOut</StyledLink> :
              [<StyledLink to="/LogIn">LogIn</StyledLink>,
              <StyledLink to="/SignUp">SignUp</StyledLink>]
            }
          </div>
        </div>
      </div>
    </div>
  );
};

const StyledLink = styled(Link)`
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

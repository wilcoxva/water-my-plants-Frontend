import React, { useEffect, useState } from 'react';
import { Home, Plant, PlantsList, SignUp, LogIn, LogOut } from './components';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

const App = () => {

  let token = localStorage.getItem("token");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [token]);

  return (
    <div>
      <Route exact path="/" render={props => (<Home {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />)} />
      <PrivateRoute path="/plantslist" component={props => (<PlantsList {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />)} />
      <Route exact path="/login" render={props => (<LogIn {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />)} />
      <Route path="/signup" render={props => (<SignUp {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />)} />
      <Route path="/logout" render={props => (<LogOut {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />)} />
      <PrivateRoute path="/:userid/:plantid" component={props => (<Plant {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />)} />     
    </div>
  )
  };

export default App;
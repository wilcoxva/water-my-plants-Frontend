import React, { useEffect, useState } from 'react';
import './css/main.css';
import { Home, About, Contact, Navigation, Plant, SignUp } from './components';
import { Route } from 'react-router-dom';
import LogIn from './components/Login';
import PlantsList from './components/PlantsList';
import LogOut from './components/Logout';
import 'antd/dist/antd.css';
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
      {/* <Navigation isLoggedIn={isLoggedIn}/> */}
      <Route exact path="/" render={props => (<Home {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />)} />
      <Route path="/about" render={props => (<About {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />)} />
      <Route path="/contact" render={props => (<Contact {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />)} />
      <PrivateRoute path="/PlantsList" component={props => (<PlantsList {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />)} />
      <Route exact path="/LogIn" render={props => (<LogIn {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />)} />
      <Route path="/SignUp" render={props => (<SignUp {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />)} />
      <Route path="/LogOut" render={props => (<LogOut {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />)} />
      <PrivateRoute path="/:userId/:plantId" component={props => (<Plant {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />)} />     
    </div>
  )
  };

export default App;
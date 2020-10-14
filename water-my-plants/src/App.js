import React, { useEffect, useState } from 'react';
import './css/main.css';
import { Home, About, Contact, Navigation, Plant } from './components';
import { Route } from 'react-router-dom';
import LogIn from './components/Login';
import PlantsList from './components/PlantsList';
import LogOut from './components/Logout';

const App = () => {

  let token = localStorage.getItem("token");

  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [token]);

  return (
    <div>
      <Navigation isLoggedIn={isLoggedIn}/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/PlantsList" component={PlantsList} />
      <Route path="/LogIn" render={props => (<LogIn {...props} setIsLoggedIn={setIsLoggedIn} />)} />
      <Route path="/LogOut" render={props => (<LogOut {...props} setIsLoggedIn={setIsLoggedIn} />)} />
      <Route path="/:userId/:plantId" component={Plant} />
    </div>
  )
  };

export default App;

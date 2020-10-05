import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';
import LogIn from './components/Login';
import PlantsList from './components/PlantsList';
import LogOut from './components/Logout';

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/PlantsList" component={PlantsList} />
    <Route path="/LogIn" component={LogIn} />
    <Route path="/LogOut" component={LogOut} />
  </div>
);

export default App;

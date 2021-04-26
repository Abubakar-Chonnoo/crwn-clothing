import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage-Compo';
import { Switch, Route } from 'react-router-dom';


const Hats = () => (
  <div>
  <h1>Hello</h1>
  </div>
);

function App() {
  return (
    // <div>
    //   <HomePage />
    // </div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route  path='/hats' component={Hats} />
    </Switch>
  );
}

export default App;

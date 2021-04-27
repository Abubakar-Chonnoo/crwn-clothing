import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage-Compo';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shoppage/shop-Compo';


const Hats = () => {
  return (
  <div>
  <h1>Hello</h1>
  </div>
);}

function App() {
  return (

    <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>

      <Route path="/shop">
        <ShopPage/>
      </Route>
    </Switch>
    
  );
}

export default App;

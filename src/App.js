import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage-Compo';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shoppage/shop-Compo';
import Header from './components/header/header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>

      <Route path="/shop">
        <ShopPage/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;

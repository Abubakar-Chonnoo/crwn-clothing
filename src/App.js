import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage-Compo';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shoppage/shop-Compo';
import Header from './components/header/header';
import SignPage from './pages/sign/sign';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {

    // Anything in here is fired on component mount (componentDidMount)...
    const setUnsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { 
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          console.log({currentUser});
        });
      }
      setCurrentUser(userAuth);
    });

    return () => {
        // Anything in here is fired on component unmount (componentWillUnmount)..
        setUnsubscribeFromAuth();
    };

    },[]);
    

  return (
    <div className='box-container'>
      <Header currentUser={currentUser} />
      <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>

      <Route path="/shop">
        <ShopPage/>
      </Route>

      <Route path="/signin">
        <SignPage/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;

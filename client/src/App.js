import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import Orders from './components/Orders';
import Footer from './components/Footer';

const promise = loadStripe('pk_test_51HlzmZBqekqPCRsWSRqot8SFEdyuUGMmG9EvjhJVx2xLSkzN8RpGnzg5vmKdhoBxGGK5JGK8T2oOekuDPfr4C9Au00mmq1Tnec');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('the user is -->', authUser);

      if(authUser) {
        //the user was logged in or user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } 
      else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM 
    <Router>
      <div className="app">
        
        <Switch>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>

          <Route path='/orders'>
            <Header />
            <Orders />
            <Footer />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

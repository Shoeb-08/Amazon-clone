import React,{ useEffect } from "react";
import "./App.css";
import Header from './Header';
import Home from './Home';
import{BrowserRouter as Router,Switch,Route}
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from './Payment';
import Orders from "./Orders";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";;


const promise=loadStripe('pk_test_51J8nM4SJwsXcce7B7BvNQJcv9LToUSVBQ7GobupMBU3TvWmGQo3hRllT04U2m4kRYtWx4l0Yh0j33h33EGai4Wk700WUvimzYt');
function App(){
const[{},dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } 
      else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //bem
    <Router>
    <div className="app">
      <Switch>
      
        <Route path="/login">
              <Login/>
        </Route>
        
      <Route path="/checkout">
      <Header />
             <Checkout />
          </Route>

          <Route path="/payment">
                <Header />


                <Elements stripe={promise}>

                <Payment/>
                </Elements>
                
          </Route>

        <Route path="/">
        <Header />
            
      {/*home*/}
              <Home/>
          </Route>
      </Switch>
    </div>
     
    </Router>
  );
}

export default App;

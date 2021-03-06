import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51JOhEJB3nmyJKnm1UOyjkcWD4Z82itHmKYVJ3Bo00vda2P7yP9V4rOGEwnSHtR6iGzDt02pGVKXXAfcflvVO1Ds7003eQD4HB8"
);

function App() {
  const [state, dispatch] = useStateValue();
  console.log(state)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>> ", authUser);
      if (authUser) {
        //user just logged in / was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/orders">
            <Header />
            <Orders/>
            
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

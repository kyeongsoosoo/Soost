/* eslint-disable no-nested-ternary */
import firebase from 'firebase';
import React, { Suspense, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../features/Home/container/Home';
import LogIn from '../features/LogIn/container/LogIn';
import Register from '../features/Register/container/Register';
import { loginSuccess } from '../redux/Auth/actions';

function App() {
  const dispatch = useDispatch();
  const [loggedIn, setLogIn] = useState(false);
  const [loading, setLoading] = useState(true);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setLogIn(true);
      dispatch(loginSuccess(user));
    } else {
      setLogIn(false);
    }
    setLoading(false);
  });

  return (
    <Suspense fallback={<div>Loadig...</div>}>
      {loading ? (
        <div>Loading...</div>
      ) : loggedIn ? (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:test" exact component={Home} />

          <Route path="/account/register" exact component={Register} />

          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact component={LogIn} />

          <Route path="/account/register" exact component={Register} />

          <Redirect to="/" />
        </Switch>
      )}
      {}
    </Suspense>
  );
}

export default App;

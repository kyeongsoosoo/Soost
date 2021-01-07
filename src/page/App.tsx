/* eslint-disable no-nested-ternary */
import firebase from 'firebase';
import React, { Suspense, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { db } from '../../firebase';
import Header from '../component/Header/Header';
import Home from '../features/Home/container/Home';
import LogIn from '../features/LogIn/container/LogIn';
import Register from '../features/Register/container/Register';
import Setting from '../features/Setting/Edit/Setting';
import { IUser } from '../lib/type';
import { loginSuccess } from '../redux/Auth/actions';

function App() {
  const dispatch = useDispatch();
  const [loggedIn, setLogIn] = useState(false);
  const [loading, setLoading] = useState(true);

  firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      setLogIn(true);
      const profile = await db.collection('user').doc(user.uid).get();

      dispatch(loginSuccess(profile.data() as IUser));
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
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:userid" exact component={Home} />

            <Route path="/account/edit" exact component={Setting} />

            <Redirect to="/" />
          </Switch>
        </>
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

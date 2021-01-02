import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogIn from '../features/LogIn/container/LogIn';
import Register from '../features/Register/container/Register';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={LogIn} />
      <Route path="/account/register" exact component={Register} />
    </Switch>
  );
}

export default App;

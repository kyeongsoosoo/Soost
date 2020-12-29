import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogIn from '../features/LogIn/container/LogIn';

function App() {
  return (
    <Switch>
      <Route to="/" component={LogIn} />
    </Switch>
  );
}

export default App;

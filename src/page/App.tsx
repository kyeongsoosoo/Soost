import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route to="/" render={() => <div>HdiH</div>} />
    </Switch>
  );
}

export default App;

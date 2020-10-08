import React from 'react';
import MainPage from './components/MainPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;

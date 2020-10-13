import React from 'react';
import MainPage from './components/MainPage/MainPage'
import GListPage from './components/GListpage/GListPage'
import RoomPage from './components/RoomPage/RoomPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/glist" component={GListPage}></Route>

        <Route path="/room/:roomid" component={RoomPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;

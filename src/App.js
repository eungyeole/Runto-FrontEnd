import React from 'react';
import { 
  Main,
  Room,
  Study,
  Myroom,
  CreateGroup,
} from "./components"
import {
  GroupList,
} from "./containers/index"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route path="/glist" component={GroupList}></Route>
        <Route path="/room/:roomid" component={Room}></Route>
        <Route path="/study/:roomid" component={Study}></Route>
        <Route path="/myroom" component={Myroom}></Route>
        <Route path="/create" component={CreateGroup}></Route>
      </Switch>
    </Router>
  );
}

export default App;

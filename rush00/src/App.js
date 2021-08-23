import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Main from './components/Main';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Board from './components/Board';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <PublicRoute restricted={false} exact path="/" component={Main} />
        <PublicRoute restricted exact path="/account/login" component={Login} />
        <PublicRoute
          restricted
          exact
          path="/account/signup"
          component={SignUp}
        />
        <PrivateRoute exact path="/account/profile" component={Profile} />
        <PrivateRoute exact path="/board" component={Board} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

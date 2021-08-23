import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import PublicRoute from './components/route/PublicRoute';
// import PrivateRoute from './components/PrivateRoute';
import Main from './components/Main';
import Login from './components/account/Login';
import SignUp from './components/account/SignUp';
import Profile from './components/profile/Profile';
import Board from './components/board/Board';
import WriteBoard from './components/board/WriteBoard';
import BoardContent from './components/board/BoardContent';

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
        <PublicRoute
          restricted
          exact
          path="/account/profile"
          component={Profile}
        />
        <PublicRoute restricted exact path="/board" component={Board} />
        <PublicRoute
          restricted
          exact
          path="/board/write"
          component={WriteBoard}
        />
        <PublicRoute
          restricted
          exact
          path="/board/content"
          component={BoardContent}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import PublicRoute from './components/route/PublicRoute';
import PrivateRoute from './components/route/PrivateRoute';
import Main from './components/Main';
import Login from './components/account/Login';
import Logout from './components/account/Logout';
import SignUp from './components/account/SignUp';
import Profile from './components/profile/Profile';
import Board from './components/board/Board';
import WriteBoard from './components/board/WriteBoard';
import BoardContent from './components/board/BoardContent';
import WriteComment from './components/comment/WriteComment';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <PublicRoute restricted={false} exact path="/" component={Main} />
        <PublicRoute restricted exact path="/account/login" component={Login} />
        <PrivateRoute exact path="/account/logout" component={Logout} />
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
        <PrivateRoute exact path="/board" component={Board} />
        <PrivateRoute exact path="/board/write" component={WriteBoard} />
        <PrivateRoute
          exact
          path="/board/content/:contentId"
          component={BoardContent}
        />
        <PrivateRoute exact path="/comment/write" component={WriteComment} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React, {Component} from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import Profiles from './Profiles';
import Profile from './Profile'
import ShowUser from './ShowUser';
import Items from './Items';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/users' component={Profiles} />
            <Route exact path='/users/:id' component={ShowUser} />
            <Route exact path='/users/:id/items' component={Items} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;

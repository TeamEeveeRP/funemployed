import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './containers/HomeContainer';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Switch, NavLink, Link, useRouteMatch, useParams } from 'react-router-dom';
import './sass/styles.scss';

const App = () => {
  return (
    <Router> 
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={HomeContainer} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './containers/HomeContainer';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Routes, NavLink, Link, useRouteMatch, useParams } from 'react-router-dom';
import './sass/styles.scss';

const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<HomeContainer/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));

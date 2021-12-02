import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './containers/HomeContainer';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Routes, NavLink, Link, useRouteMatch, useParams } from 'react-router-dom';
import './sass/styles.scss';

const App = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ userState, setUserState ] = useState({
    userId: null,
    username: null,
    fullName: null,
  });
  
  const getIsLoggedIn = () => isLoggedIn;
  const getUserState = () => userState;

  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} setUserState={setUserState}/>} />
        <Route path="/home" element={<HomeContainer getIsLoggedIn={getIsLoggedIn} setIsLoggedIn={setIsLoggedIn} getUserState={getUserState} setUserState={setUserState}/>} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} setUserState={setUserState}/>} />
      </Routes>
    </Router>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));

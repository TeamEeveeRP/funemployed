import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'regenerator-runtime/runtime';

import logo from '../../media/fe-logo.png';

const Login = (props) => {
    const [usernameInput, setUsername] = useState('');
    const [passwordInput, setPassword] = useState('');
    const navigate = useNavigate();
    
    const { setIsLoggedIn, setUserState } = props;
    
    const loginObj = {
      usernameInput,
      passwordInput
    }
    
    const fetchData = () => {
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': "application/JSON"
        },
        body: JSON.stringify(loginObj)
      })
      .then(res => res.json())
      .then(data => {
        console.log('data: ', data);
        alert(`Welcome, ${data.name}`);
        // setUserId(data.userId);
        setIsLoggedIn(true);
        setUserState({
          userId: data.userId,
          username: data.username,
          fullName: data.name,
        })
        navigate('/home', {
          state: data.userId
        });
      })
      .catch(err => {
        console.log(err);
        return alert("Invalid login");
      })
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      fetchData(loginObj);
    };

    return (
      <div id="login-container">
        <header className="logo-header">
          <img src={logo} alt="funemployed logo" />
        </header>
        <input
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button name="login" onClick={handleSubmit}>
          Log In
        </button>
        <div>
          Don't have an account?
          <Link to="/signup" className="log-in-sign-up">
            Sign Up
          </Link>
        </div>
      </div>
    );
};

export default Login;
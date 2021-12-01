import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'regenerator-runtime/runtime';

import logo from '../../media/fe-logo.png';

const Login = () => {
    const [usernameInput, setUsername] = useState('');
    const [passwordInput, setPassword] = useState('');
    const [userVerified, setUserVerified] = useState(false);
    const [userID, setUserID] = useState('');

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
        window.location.replace('/home');
      })
      .catch(err => {
        console.log(err);
        return alert("Invalid login");
      })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetchData(loginObj);
    };

    return (
      <>
        <header>
          <img src={logo} alt="funemployed logo"></img>
        </header>
        <input
          name="username"
          placeholder="username"
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
        />
        <button
          name="login"
          onClick={handleSubmit}>
          Log In
        </button>
        <div className="mt-4">
          Don't have an account?
          <Link to="/signup">
            Sign Up
          </Link>
        </div>
      </>   
    )
}

export default Login;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'regenerator-runtime/runtime';



const Login = () => {
    const [usernameInput, setUsername] = useState('');
    const [passwordInput, setPassword] = useState('');
    const [userVerified, setUserVerified] = useState(false);
    const [userID, setUserID] = useState('');

    const loginObj = {
      usernameInput,
      passwordInput
    }

    const fetchData = (body) => {
      fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': "application/JSON"
        },
        body: JSON.stringify(body)
      })
      .then(res => {
        if(res) {
            setUserVerified(true);
            setUserID(res.userID);
        } else {
            setUserVerified(false);
        }
      })
      .catch(err => {
        console.log(err);
        return alert("Invalid login");
      })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetchData(loginObj);
        if (userVerified === true){
            return (
                <Link to={{pathname: '/home', state: {userID}}}></Link>
            )
        }
    
    }

    return (
      <>
          <input name="username" placeholder="username" onChange={e => setUsername(e.target.value)}></input>
          <input name="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
          <button name="login" onClick={handleSubmit}>Sign In</button>
          <div className="mt-4">Don't have an account? <Link to="/signup">Sign Up</Link></div>
      </>   
    )
}

export default Login;
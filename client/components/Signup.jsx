import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Signup = (props) => {
  const [ fullName, setFullName ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ userId, setUserId] = useState('');
  
  const navigate = useNavigate();

  const { setIsLoggedIn, setUserState } = props;

  const loginObj = {
    fullName,  
    username,
    password,
  }

  const postData = () => {
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'content-type': "application/JSON"
      },
      body: JSON.stringify(loginObj)
    })
    .then(res => res.json())
    .then(data => {
      console.log('data: ', data);
      setIsLoggedIn(true)
      setUserState({
        userId: data.userId,
        username: data.username,
        fullName: data.name,
      })
      useNavigate("/home", {state: userId});
    })
    .catch((err) => {
        console.log(err);
        return alert("Username already taken");
    })
}


 return (
   <>
    <input name="name" placeholder="Full Name" onChange={e => setFullName(e.target.value)}></input>  
     <input name="username" placeholder="Username" onChange={e => setUsername(e.target.value)}></input>
     <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
    <br/>
     <button onClick={postData}>Sign up</button>
     <div className="mt-4">Have an account? <Link to="/">Log In</Link></div>
  </>
 )
}

export default Signup;
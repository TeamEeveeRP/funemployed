import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Signup = () => {
  const [ fullName, setFullName ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const loginObj = {
    fullName,  
    username,
    password,
  }

  const postData = (body) => {
      fetch('/api/signup', {
          method: 'POST',
          headers: {
            'content-type': "application/JSON"          
        },
        body: JSON.stringify(body)
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
     <input name="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
    <br/>
     <button onSubmit={postData(loginObj)}>Sign up</button>
     <div className="mt-4">Have an account? <Link to="/">Log In</Link></div>
  </>
 )
}

export default Signup;
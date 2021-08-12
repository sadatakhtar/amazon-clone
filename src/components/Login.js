import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div className="login">
      <Link to="/">
        <img
          src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon"
          className="login_logo"
        />
      </Link>

      <div className="login_container">
          <h1>Sign-In</h1>
          <form>
              <h5>E-mail</h5>
              <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
              <h5>Password</h5>
              <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
             
          </form>
          <button className='login_signInButton'>Sign In</button>
          <p>
              By signing-in you agree to Amazon's FAKE CLONE Conditions of Use & Sale. 
              Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice
          </p>
          <button className='login_registerButton'>Create your Amazon Account</button>

         
      </div>
    </div>
  );
}

export default Login;

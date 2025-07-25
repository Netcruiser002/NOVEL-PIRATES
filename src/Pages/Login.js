import React from 'react'
import './log.css'
document.querySelector("#log-useremail-det").style.opacity = 0;

function Login() {
  return (
    <div className='body'>
      <div className='Log-box'>
        <h1 className='log-header'>Login</h1>
        <div id='log-username-det'>
          <h2>Username</h2>
          <input />
        </div>
        <div id='log-useremail-det'>
          <h2>User-email</h2>
          <input />
        </div>
        <div id='log-user-pass'>
          <h2>Password</h2>
          <input />
        </div>
        <div><p>Forgot Password<button>Click Here</button></p></div>
        <div><p>Wanna Use e-mail?<button>Click Here</button></p></div>
      </div>
    </div>
  )
}

export default Login

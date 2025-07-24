import React from 'react'

function Login() {
  return (
    <div className='login-box'>
      <h1>Login</h1>
      <div>
        <p>Username</p>
        <input type='string' placeholder='Username' id='log-user' />
      </div>
{/* Username input ends */}
      <div>
        <p>Password</p>
        <input type='string' placeholder='Password' id='log-pass' />
      </div>      
    </div>
  )
}

export default Login

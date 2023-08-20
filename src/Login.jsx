import { Link } from 'react-router-dom'
import './Login.css'

import React from 'react'

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form action=""></form>
      </div>
    </div>
  )
}

export default Login

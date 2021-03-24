import React from 'react'
const Login = ({
  handleLogin,
  username,
  handleUsernameChange,
  password,
  handlePasswordChange
}) => {
  return(
    <div>
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <label>username</label>
        <input
          id='username'
          type="text"
          value={username}
          name="Username"
          onChange={handleUsernameChange}
        />
        <label>password</label>
        <input
          id='password'
          type="password"
          value={password}
          name="password"
          onChange={handlePasswordChange}
        />
        <button id="login-button" type="submit">log in</button>
      </form>
    </div>
  )
}
export default Login
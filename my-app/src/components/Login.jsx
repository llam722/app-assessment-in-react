import React from 'react';

function Login() {
  return (
    <div>
      <form id="login">
        <label>Username:</label>
        <br></br>
        <input id="username" type="text"></input>
        <br></br>
        <br></br>
        <label>Password:</label>
        <br></br>
        <input id="password" type="text"></input>
        <br></br>
        <br></br>
        <input type="submit"></input>
      </form>
    </div>
  );
}
export default Login;

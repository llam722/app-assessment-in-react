import React from 'react';

function Login() {
  return (
    <div>
      <form id="login">
        <label for="username">Username:</label>
        <br></br>
        <input id="username" type="text"></input>
        <br></br>
        <label for="password">Password:</label>
        <br></br>
        <input id="password" type="text"></input>
      </form>
    </div>
  );
}
export default Login;

// TODO: Not doing this right now. Authentication comes later after I finish React learning.

import React from "react";

const Login = (props) => {
  return (
    <nav className="Login">
      <h2>Inventory Login</h2>
      <p>Sign in to manage your store's inventory</p>
      <button className="github" onClick={() => props.authenticate('Github')}>Log In with GitHub</button>
      <button className="facebook" onClick={() => props.authenticate('Facebook')}>Log In with Facebook</button>
      <button className="twitter" onClick={() => props.authenticate('Twitter')}>Log In with Twitter</button>
    </nav>
  );
};

export default Login;

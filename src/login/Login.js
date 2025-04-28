import React from "react";

const Login = () => {
  return (
    <>
      <label>Username</label>
      <br />
      <input type="text" value={"MyUserNameHere"}></input>
      <br />
      <label>Password</label>
      <br />
      <input type="text" value={"MyPasswordHere"}></input>
      <br />
      <button>login</button>
    </>
  );
};

export default Login;

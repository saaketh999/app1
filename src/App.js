//import logo from "./logo.svg";
//import { useState } from "react";
import "./App.css";
import Login from "./login/Login";
import UseEffectDemo from "./useeffect/UseEffectDemo";
//import UseEffectDemo from "./useeffect/UseEffectDemo";

function App() {
  return (
    <>
      <label>Login Enter your credentials</label>
      <br />

      <Login></Login>
      <UseEffectDemo></UseEffectDemo>
    </>
  );
}

export default App;

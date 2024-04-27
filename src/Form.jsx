import React, { useState, useEffect } from "react";
function FormUi() {
  // create state for username and password and
  // we give it empty string as start value

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // create function that handle username and password
  // these functions will be passed as value for the onChange in the input tag

  function handleName(e) {
    setUserName(e.target.value);
  }
  function handlePass(e) {
    setPassword(e.target.value);
  }
  // create function that will send username and password
  // once the user click on submit

  function onSend() {
    // api call and send the password and username
    // console.log(userName, password, "name&pass");
  }
  useEffect(() => {}, []);
  return (
    <div>
      {/* user name input */}
      <label>UserName</label>
      <input type="text" onChange={handleName} />
      {/* password input */}
      <label>Password</label>
      <input type="password" onChange={handlePass} />

      <button onClick={onSend}>Login</button>

      <p>the name is {userName}</p>
    </div>
  );
}

export default FormUi;

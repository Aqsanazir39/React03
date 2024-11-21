import React, { useState } from "react";

function LoginForm() {
  // Track the input values for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the data (like send it to an API)
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update the state as the user types
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update the state as the user types
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginForm
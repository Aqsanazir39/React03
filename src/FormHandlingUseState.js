import React, { useState } from 'react'

function FormHandlingUseState() { // Corrected function name to start with uppercase "F"
  const [username, setUsername] = useState("");  // Initialized state with empty string
  const [password, setPassword] = useState("");  // Initialized state with empty string

  const handleForm = (e) => {
    e.preventDefault();
    console.log("username:", username);
    console.log("password:", password);
  }

  return (
    <form onSubmit={handleForm}>
      <div>
        <label htmlFor="">Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      <div>
        <label htmlFor="">Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default FormHandlingUseState;  // Export the corrected function name

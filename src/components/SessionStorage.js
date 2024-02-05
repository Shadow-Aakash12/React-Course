import React from 'react'
import { useState } from 'react';

function SessionStorage() {

     // Use the useState hook to store the name and password in state
     const [name, setName] = useState('');
     const [password, setPassword] = useState('');
     // Define a function to handle the form submit
     const handleSubmit = () => {
         // Store the name and password in local storage
         sessionStorage.setItem('name', name);
         sessionStorage.setItem('password', password);
 
         // Clear the form
     setName('');
     setPassword('');
     };
 
     // Define a function to handle the logout button click
     const handleLogout = () => {
             // Remove the name and password from local storage
         sessionStorage.removeItem('name');
         sessionStorage.removeItem('password');
         
     };
  return (
    <div>
        <h1>Session Storage in React JS</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> <br/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br></br>
            <button type="submit">Submit</button>
        </form>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default SessionStorage
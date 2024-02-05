import React, { useState } from 'react';

function LocalStorage() {
     // Use the useState hook to store the name and password in state
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    // Define a function to handle the form submit
    const handleSubmit = () => {
        // Store the name and password in local storage
        localStorage.setItem('name', name);
        localStorage.setItem('password', password);

        // Clear the form
    setName('');
    setPassword('');
    };

    // Define a function to handle the logout button click
    const handleLogout = () => {
            // Remove the name and password from local storage
        localStorage.removeItem('name');
        localStorage.removeItem('password');
        
    };

  return (
    <div>
        <h1>Local Storage in React JS</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> <br/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br></br>
            <button type="submit">Submit</button>
        </form>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
};

export default LocalStorage;
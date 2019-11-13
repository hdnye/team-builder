import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
  
  // Set default value in state for tm's inputs //

  const [user, setUser] = useState[{
    id: '',
    name: '',
    email: '',
    role:''
  }];

  // Set function to handle new user member inputs and create new unique id //

 const addNewMember = users => {
  const newUserMmbr = {
    id: Date.now(),
    name: name.name,
    email: email.email,
    role: role.role
   };

  // Add & set useState to add new tm's to the array using the spread operator so as not to mutilate the data & add the data at the end //

  setUser([...user, newUserMmbr])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Form addNewMember={newUserMmbr} />
      </header>
    </div>
  );
}

export default App;

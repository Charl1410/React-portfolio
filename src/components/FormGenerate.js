import React, { useState } from 'react';

function FormGenerate() {


//create a user state to hold the value of the name text holder 
const [name, setName] = useState('');
//create a user state to hold the value of the email text holder
const [email, setEmail] = useState('');
//create a user state to hold the value of the message text holder
const [message, setMessage] = useState('');


//is this getting the value from the name text entry and saving this into the 
//var set name in the hook
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  
  function handleMessageChange(event) {
    setMessage(event.target.value)
  }

//tests the triggering even and if name has not been entered then alerts the user and draws focus to entery
  function handleNameBlur(event) {
    if (!name) {
    alert('Name field is required!');
    }
    }

    function handleEmailBlur(event) {
      if (!email) {
      alert('Email field is required!');
      }
      }
          
      function handleMessageBlur(event) {
      if (!message) {
      alert('Message field is required!');
      }
      }

      function handleSubmit(event) {
        event.preventDefault();
        
        }


  return (
    <form onSubmit={handleSubmit}>
<label >Name:</label>
<input type="text" id="name" name="name" value={name} onChange={handleNameChange} onBlur={handleNameBlur} required />
<br />
<label >Email:</label>
<input type="email" id="email" name="email" value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} required />
<br />
<label >Message:</label>
<input  id="message" name="message" value={message} onChange={handleMessageChange} onBlur={handleMessageBlur} required />
<br />
<button type="submit">Submit</button>
</form>
    
  );
}

export default FormGenerate;
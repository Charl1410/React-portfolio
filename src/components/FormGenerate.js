import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

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
  function handleNameCheck(event) {
    if (!name) {
    alert('Name field is required!');
    }
    return
    }

    function handleEmailCheck() {
      if (!email) {
      alert('Email field is required!');
      }
      return
      }
          
      function handleMessageCheck() {
      if (!message) {
      alert('Message field is required!');
      }
      return
      }

      function handleSubmit(event) {
        event.preventDefault();
        
        }


  return (
    <form onSubmit={handleSubmit}>
<label >Name:</label>
<input type="text" id="textbox-style" name="name" value={name} onChange={handleNameChange} onBlur={handleNameCheck} required />
<br />
<label >Email:</label>
<input type="email" id="textbox-style" name="email" value={email} onChange={handleEmailChange} onBlur={handleEmailCheck} required />
<br />
<label >Message:</label>
<input  id="textbox-style " className="message-input" name="message" value={message} onChange={handleMessageChange} onBlur={handleMessageCheck} required />
<br />
<Button type="submit">Submit</Button>
</form>
    
  );
}

export default FormGenerate;
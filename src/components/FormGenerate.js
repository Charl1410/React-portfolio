import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
    event.target.focus();
    }
    }




  return (
    <div className='form-container'>
    <Form >
    <Form.Group className="form-box" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Name" />
      </Form.Group>

      <Form.Group className="form-box" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>

      </Form.Group>
      <Form.Group className="form-box message" controlId="formBasicEmail">
        <Form.Label>Message</Form.Label>
        <Form.Control type="message" placeholder="Enter message" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

   
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default FormGenerate;
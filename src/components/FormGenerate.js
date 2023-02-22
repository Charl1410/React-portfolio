import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormGenerate() {
  return (
    <div className='form-container'>
    <Form>
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
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-primary mt-4'>Please Registration!!!!</h2>
        
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" />
  </Form.Group>
  <p>Already have an account?<span className='ps-2'><Link className='text-decoration-none' to='/login'> Login</Link></span></p>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            
        </div>
    );
};

export default Registration;

import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Googlesign from '../Googlesign/Googlesign';

const Registration = () => {
  const nameRef=useRef('');
  const emailRef = useRef('');
  const passRef = useRef('');
  const confirmPassRef = useRef('');
  const [error, setError] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error2,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name=nameRef.current.value;
    const email = emailRef.current.value;
    const password = passRef.current.value;
    const confirmPassword = confirmPassRef.current.value;
    console.log(name,email);

    if (password !== confirmPassword) {
      setError('Your password does not match');
      return;

    }

    if (password.length <= 6) {

      setError('password should be more than 6 chracters or long');
      return;
    }
    createUserWithEmailAndPassword(email, password);



  }

  if (user) {
    navigate('/home');

  }



  return (
    <div className='w-50 mx-auto'>
      <h2 className='text-center text-primary mt-4'>Please Registration!!!!</h2>

      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Email Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
          <Form.Text className="text-muted">

          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">

          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passRef} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control ref={confirmPassRef} type="password" placeholder="Confirm Password" />
        </Form.Group>
        <p>Already have an account?<span className='ps-2'><Link className='text-decoration-none' to='/login'> Login</Link></span></p>
        <p className='text-danger'>{error}</p>
        <p className='text-danger'> {error2?.message}</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Googlesign></Googlesign>

    </div>
  );
};

export default Registration;

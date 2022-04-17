
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Googlesign from '../Googlesign/Googlesign';


const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        signInWithEmailAndPassword(email, password);

    }


    if (user) {
        navigate('/home');

    }
    return (

        <div className='w-50 mx-auto'>
            <h2 className='text-center text-primary mt-4'>Please Login!!!!</h2>
            <Form onSubmit={handleSubmit}>
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
                <p>New in Cricket academy?<span className='ps-2'><Link className='text-decoration-none' to='/registration'> Register</Link></span></p>
                <p className='text-danger'> {error?.message}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Googlesign></Googlesign>
        </div>





    );
};

export default Login;
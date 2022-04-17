
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
    return (

        <div className='w-50 mx-auto'>
            <h2 className='text-center text-primary mt-4'>Please Login!!!!</h2>
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
                <p>New in Cricket academy?<span className='ps-2'><Link className='text-decoration-none' to='/registration'> Register</Link></span></p>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>





    );
};

export default Login;
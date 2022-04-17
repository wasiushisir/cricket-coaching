
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Googlesign from '../Googlesign/Googlesign';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location=useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error3] = useSendPasswordResetEmail(
        auth
      );

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        signInWithEmailAndPassword(email, password);

    }


    if (user) {
        navigate(from, { replace: true });

    }

    const handleResetPassword= async()=>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email');

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
                <p>Forget Password<span className='ps-2'><button onClick={handleResetPassword} className='text-decoration-none btn btn-link text-primary' > Reset Password</button></span></p>
                 <p className='text-danger'> {error?.message}</p> 
                <p className='text-danger'> {error3?.message}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Googlesign></Googlesign>
            <ToastContainer />
        </div>





    );
};

export default Login;
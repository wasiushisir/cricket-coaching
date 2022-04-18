import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CheckoutSuccess from '../CheckoutSuccess/CheckoutSuccess';



const Checkout = () => {
    const { checkId } = useParams();

    const [toggle,setToggle]=useState(false);
    const submit=(event)=>
    {
        event.preventDefault();
    }
    
   
   
   /*  const handleCheckOutForm = (event) => {
        event.preventDefault();
        console.log('v');
         */
        /*  <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Well done!</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr />
            <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </div>  */
       /*  alert('thank you for booking');
        return;
 */
    
    return (
        <div>
            {toggle&&<CheckoutSuccess></CheckoutSuccess>}

            <h2 className='text-center text-primary my-4'>This is checkout:{checkId}</h2>
            <div className='w-50 mx-auto my-4'>
                <Form onSubmit={submit} >
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Email Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" required />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Phone No</Form.Label>
                        <Form.Control type="number" placeholder="Enter Phone No" required />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Enter Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address" required />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>



                    <Button onClick={()=>setToggle(!toggle)} variant="primary" type="submit">
                        Submit
                    </Button>
                    
                </Form>


            </div>

        </div>
    );
};

export default Checkout;
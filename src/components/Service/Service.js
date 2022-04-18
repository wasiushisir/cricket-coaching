import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    console.log(service);
    const navigate=useNavigate();

    const handleCheckOut=(id)=>
    {
       navigate(`/check/${id}`);
    }
    const { name, price, img, description,id } = service;
    return (
        <div class="card col-12 col-lg-4 mx-4 mt-4  rounded-top-left  rounded-bottom-right" style={{ width: '24rem' }}>
            <img style={{ width: '23rem' }} src={img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5>Name: {name}</h5>
                <h5>Price: ${price}</h5>
                <p ><b>Description:</b>{description}</p>
                 <button onClick={()=>handleCheckOut(id)} className=' btn btn-primary' >CheckOut</button> 

            </div>
        </div>
    );
};

export default Service;
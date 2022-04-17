import React from 'react';

const Service = ({ service }) => {
    console.log(service);
    const { name, price, img, description } = service;
    return (
        <div class="card col-12 col-lg-4 mx-4 mt-4  rounded-top-left  rounded-bottom-right" style={{ width: '24rem' }}>
            <img style={{ width: '23rem' }} src={img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5>Name: {name}</h5>
                <h5>Price: ${price}</h5>
                <p ><b>Description:</b>{description}</p>
                 <button className=' btn btn-primary' >CheckOut</button> 

            </div>
        </div>
    );
};

export default Service;
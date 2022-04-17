import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Service from '../components/Service/Service';
import img1 from '../img/crick1.jpg'
import img2 from '../img/crick2.jpg'
import img3 from '../img/crick3.jpg'


const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('servicess.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img height={600}
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={600}
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={600}
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

           
            <div id='services'  className='container'>
            <h1  className='text-primary text-center mb-4 mt-4'>My Services</h1>
                <div className='row'>
                


                {
                    services.map(service => <Service service={service} key={service.id}></Service>)
                }
                    
                    
                    
                  


                </div>
                

                 
            </div>



        </div>
    );
};

export default Home;
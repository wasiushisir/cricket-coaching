import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Feedback from '../components/Feedback/Feedback';
import Service from '../components/Service/Service';
import img1 from '../img/crick1.jpg'
import img2 from '../img/crick2.jpg'
import img3 from '../img/crick3.jpg'


const Home = () => {
    const [services, setServices] = useState([]);
    const [feedbacks, setFeedback] = useState([]);
    useEffect(() => {
        fetch('servicess.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        fetch('feedback.json')
            .then(response => response.json())
            .then(data => setFeedback(data))
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
                        <h3>Batting Practice</h3>
                        <p>Batting is so important practice more and more</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={600}
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Bowling Practice </h3>
                        <p>keep patience and work hard</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={600}
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Stadium scenary</h3>
                        <p>stadium place where everyone dream to play</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


            <div id='services' className='container'>
                <h1 className='text-primary text-center mb-4 mt-4'>My Services</h1>
                <div className='row'>



                    {
                        services.map(service => <Service service={service} key={service.id}></Service>)
                    }






                </div>



            </div>



            <div id='feedbacks' className='container'>
                <h1 className='text-primary text-center mb-4 mt-4'>Feedback</h1>
                <div className='row'>



                    {
                        feedbacks.map(feedback => <Feedback key={feedback.id} feedback={feedback}></Feedback>)

                    }






                </div>



            </div>



        </div>
    );
};

export default Home;
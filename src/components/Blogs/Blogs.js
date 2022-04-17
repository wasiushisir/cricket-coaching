import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center text-primary my-3'>Blogs</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication?</Accordion.Header>
                    <Accordion.Body>
                    Authentication:1)Authentication verifies the user mainly.2)Authentication hecks  identity and access management process.
                    3)Authentication is visible to and few parts are changed by the user.

                    Authorization:1)Authorization defines what resources a user can access.
                    2)user can not change authorization and its not visible
                    3)Authorization always count after authentication
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                       I use firebase because  for its simplcity easy to understand and few code and very much useful for authentication.So Many software industry using firebase for authentication.
                       Cloud Messaging for Cross-Platform Apps.Optimized App Performance.
                       other option of using authentication
                       1)Mongodb
                       2)occaeca
                       3)Auth0
                       4)Passport
                       5)Keycloack
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                    <Accordion.Body>
                        1)Cloud Firestore
                        2)Cloud Storage
                        3)Hosting
                        4)Prediction
                        5)Dynamic Links
                        6)Realtime Database Hooks
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default Blogs;
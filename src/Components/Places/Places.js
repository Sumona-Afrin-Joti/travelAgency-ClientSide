import React from 'react';
import { Container, Row} from 'react-bootstrap';
import usePlaces from '../Hooks/usePlaces/usePlaces';
import Place from '../Place/Place';
import './Places.css';


const Places = () => {
   const places = usePlaces();
    return (
        <div   className="mb-3">
            <Container className="mt-5">

                <h6 className="service-header" >Tour To Euro <button><a href="#">Find More</a></button> </h6>

                <Row xs={1} md={2} lg={3} className="justify-content-center align-items-center">
                    {
                        places.map(place => <Place key={place._id} place={place}></Place>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Places;
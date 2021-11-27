import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const MyBooking = ({ bookingPlace }) => {
    console.log("my booking",bookingPlace);
    const {status}= bookingPlace;
    const { img, place_name, description} = bookingPlace.booked;


    return (
        <div>
            <Container className="my-5">

                <Row className="mt-2">
                    <Col md={5}>
                        <img width="100%" src={img} alt="" />
                    </Col>

                    <Col md={7}>
                        <h2> {bookingPlace.Email} </h2>
                        <h3> {place_name} </h3>
                        <p> {description} </p>
                        <small> Status:  {status} </small>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default MyBooking;
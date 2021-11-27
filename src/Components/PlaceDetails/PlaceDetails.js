import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import MenuBar from '../MenuBar/MenuBar';
import Shipping from '../Shipping/Shipping';

const PlaceDetails = () => {
    const {id} = useParams();
    const [details,setDetails] = useState({});

    useEffect(() => {
        fetch("https://pacific-reef-35293.herokuapp.com/places")
            .then(res => res.json())
            .then(data =>{
                const matchedPlace = data.find(place=>place._id === id);
                setDetails(matchedPlace);
            })
    }, [id])   

    const { place_name, description, img } = details;

    return (
        <div>
            <MenuBar></MenuBar>
            <Container className="my-5">
                <Row xs={1} md={2} className="my-5 d-flex justify-content-center align-items-center">
                    <Col>

                        <h2 style={{ fontWeight: "500", marginBottom: "20px" }}>{place_name}</h2>
                        <p>{description}</p>

                    </Col>
                    <Col className="">
                        <div>
                            <img width="100%" className=" details-img img-fluid" src={img} alt="" />
                        </div>

                    </Col>

                </Row>

                <Shipping _id={id}></Shipping>
            </Container>
        </div>
    );
};

export default PlaceDetails;
import React from 'react';
import { Button, Card, Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Place.css';


const Place = ({ place }) => {
    const {img, place_name, description,_id } = place;

    return (
        <Col className="card-col">
            <Card className="col-card div-height">
                <div className="img-div">
                    <Card.Img variant="top" className="img-fluid img" src={img} />
                </div>



                <Card.Body>
                    <Card.Title className="title">
                        {place_name}
                    </Card.Title>
                    <Card.Text>
                        <small className="text"> {description.slice(0,100)}...</small>
                    </Card.Text>

                    <NavLink to={`/placeDetails/${_id}`}>

                        <Button className="button-bg">Book Now</Button>

                    </NavLink>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Place;
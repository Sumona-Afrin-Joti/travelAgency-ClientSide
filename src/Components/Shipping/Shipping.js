import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../Hooks/useAuth';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Shipping.css'
import { useHistory } from 'react-router';

const Shipping = (props) => {
    const history = useHistory();
    const { user } = useAuth();
    const { _id } = props;
    console.log(_id)
    const [orderedItem, setOrderedItem] = useState({});

    useEffect(() => {

        fetch(`https://pacific-reef-35293.herokuapp.com/places/${_id}`)
            .then(res => res.json())
            .then(data => setOrderedItem(data))

    }, [_id])



    const { register, reset, formState: { errors }, handleSubmit } = useForm();

    
    const onSubmit = data => {
        data.booked = orderedItem;
        data.status = "Pending"
        console.log('data from shipping', data);

        fetch('https://pacific-reef-35293.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                alert('booking processed successfully');
                history.push('/myBookings')
                reset();
            });

           
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col md={3} >

                    </Col>
                    <Col md={6} >
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <Row>
                                <Col>
                                    <input className="w-100 form-control mb-3" defaultValue={user.displayName} {...register("name")} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input className="w-100 form-control mb-3" defaultValue={user.email} {...register("email", { required: true })} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input required placeholder="Country" className="w-100 form-control mb-3" {...register("country", { required: true })} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input required placeholder="City" className="w-100 form-control mb-3" {...register("city", { required: true })} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input required placeholder="Phone" className="w-100 form-control mb-3" {...register("phone", { required: true })} />
                                </Col>
                            </Row>
                            <Button variant="success" type="submit">
                                Place Order
                            </Button>
                        </form>
                    </Col>
                    <Col md={3} >

                    </Col>
                </Row>

            </Container>

        </div>

    );
};

export default Shipping;
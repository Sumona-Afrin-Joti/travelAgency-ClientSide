import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './AddPlace.css'

const AddPlace = () => {
    const { register,reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data =>{ 
        
        console.log(data);
        fetch("https://pacific-reef-35293.herokuapp.com/places",{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('New Place Added Successfully');
                reset() ;
            }
        })

    
    };
    return (
        <div>
            <MenuBar></MenuBar>
            <Container className="my-5">
                <Row>
                    <Col md={3} >

                    </Col>
                    <Col md={6} >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col>
                                    <input required placeholder="img url" className="w-100 form-control mb-3" {...register("img", { required: true })} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input required placeholder="place name" className="w-100 form-control mb-3" {...register("place_name", { required: true })} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input required placeholder="place details" className="w-100 form-control mb-3" {...register("description", { required: true })} />
                                </Col>
                            </Row>
                            <Button className="button" type="submit">
                                Add New Place
                            </Button>
                        </form>
                    </Col>
                    <Col md={3} >

                    </Col>
                </Row>

            </Container>
            <Footer></Footer>
        </div>

    );
};

export default AddPlace;
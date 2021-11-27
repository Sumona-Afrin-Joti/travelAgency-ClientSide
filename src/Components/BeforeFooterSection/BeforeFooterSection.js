import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './BeforeFooterSection.css'

const BeforeFooterSection = () => {
    return (
        <div className="beforeFooter-part">
        <Container>
            <Row  className="d-flex align-items-center " >
                <Col md={6} xs={12} className="mt-4" >
                    <Row className="d-flex align-items-center">
                        <Col md={2} xs={3}>
                            <FontAwesomeIcon className="beforeFooter-locaton-icon" icon={faLocationArrow} ></FontAwesomeIcon>
                        </Col>
                        <Col md={10} xs={9}>
                            <h6 className="text-white fw-bold mb-0" >SUBMIT YOUR NEWSLETTER</h6>
                            <small className="text-white  mb-0">Register now! We will send you best offers for your trip.</small>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} xs={12}  className="mt-4">
                    <Row >
                        <Col md={8} xs={7}>
                            <input className="w-100 input" type="text" placeholder="Your email.." />
                        </Col>
                        <Col md={3} xs={5}>
                            <button className="submit-button">   <FontAwesomeIcon icon={faLocationArrow} ></FontAwesomeIcon><span  className="">SUBMIT</span> </button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <div>

            </div>
        </Container>

    </div >
    );
};

export default BeforeFooterSection;
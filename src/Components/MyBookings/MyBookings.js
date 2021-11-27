import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import useAuth from '../Hooks/useAuth';
import MenuBar from '../MenuBar/MenuBar';
import MyBooking from '../MyBooking/MyBooking';

const MyBookings = () => {
    const { user } = useAuth();
    const [myBookings, setMybookings] = useState([]);

    useEffect(() => {
        fetch(`https://pacific-reef-35293.herokuapp.com/bookings/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('myBookings', data);
                setMybookings(data)

            })
    }, [])
    return (
        <div>
            <MenuBar></MenuBar>

            <Row>

                {
                    myBookings.map(bookingPlace => <MyBooking key={bookingPlace._id} bookingPlace={bookingPlace} ></MyBooking>)
                }
            </Row>

            <Footer></Footer>

        </div>
    );
};

export default MyBookings;
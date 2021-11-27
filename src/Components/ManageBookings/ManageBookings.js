import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const ManageBookings = () => {
    const [allBookings,setAllBookings] = useState([])

    useEffect(()=>{
        fetch(`https://pacific-reef-35293.herokuapp.com/bookings`)
        .then(res=>res.json())
        .then(data=>setAllBookings(data));

    },);

    const handleDelete = (id) => {
        fetch(`https://pacific-reef-35293.herokuapp.com/bookings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingBookings = allBookings.filter(booking => booking._id !== id);
                    setAllBookings(remainingBookings);
                }
            })
    }

    const handleUpdate = ({_id, ...rest}) =>{
        const previousData = {...rest};
        previousData.status = "Approved";

        fetch(`https://pacific-reef-35293.herokuapp.com/bookings/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(previousData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount >0){
            alert('Approved successfully.');
            console.log(data);
            setAllBookings(allBookings);
            }
        })

    }

    return (
        <div>
            <MenuBar></MenuBar>
           {
               allBookings.map(bookingPlace=> <Container className="my-5">

               <Row
                className="mt-2">
                   <Col xs={12} md={5}>
                       <img width="100%" src={bookingPlace.booked.img} alt="" />
                   </Col>

                   <Col xs={12} md={7}>

                       <h4 className="my-3"> {bookingPlace.booked.place_name} </h4>
                       <div className="mt-3">
                           <h6> User Email: {bookingPlace.email} </h6>
                           <h6> User Phone: {bookingPlace.phone} </h6>
                           <small> Status:  {bookingPlace.status} </small>
                       </div>

                       <p className="mt-4">
                           <button onClick={() => handleDelete(bookingPlace._id)} className="button me-3"> Cancel </button>
                           <button onClick={() => handleUpdate(bookingPlace)} className="button me-3"> Approve </button>
                       </p>

                   </Col>
               </Row>
           </Container> )
           }

           <Footer></Footer>
        </div>
    );
};

export default ManageBookings;
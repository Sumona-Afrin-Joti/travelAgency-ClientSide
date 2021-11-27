import React, { useReducer } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import logo from '../../images/footer-logo.png';
import blackProfile from '../../images/blank-profile-picture-973460_1280.png'
import './MenuBar.css';


const MenuBar = () => {

  const { user, handleSignOut } = useAuth();
  console.log(user)

  const img = <img style={{ width: '50px', height: "50px", borderRadius: "50%" }} src={user.photoURL} alt=""></img>

  const img1 = <img style={{ width: '50px', height: "50px", borderRadius: "50%" }} src={blackProfile} alt=""></img>


  return (


    <Navbar sticky="top" bg="light" expand="lg" className="p-3 bg-white menu ">
      <Container >
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto d-flex justify-content-center align-items-center"
          >

            <Nav.Link as={NavLink} activeStyle={{
              fontWeight: "bold",
              color: "#A47355"
            }} to="/home">Home</Nav.Link>


            {

              user?.email &&

              <>

                <Nav.Link as={NavLink} activeStyle={{
                  fontWeight: "bold",
                  color: "#A47355"
                }} to="/myBookings">My Bookings</Nav.Link>


                <Nav.Link as={NavLink} activeStyle={{
                  fontWeight: "bold",
                  color: "#A47355"
                }} to="/manageBookings">Manage All Bookings</Nav.Link>

                <Nav.Link as={NavLink} activeStyle={{
                  fontWeight: "bold",
                  color: "#A47355"
                }} to="/addPlace">Add  New Place</Nav.Link>

              </>
            }

            {
              !user?.email &&
              <Nav.Link as={NavLink} activeStyle={{
                fontWeight: "bold",
                color: "#A47355"
              }} to="/signIn">Sign in</Nav.Link>
            }
            {
              !user?.email &&
              <Nav.Link as={NavLink} activeStyle={{
                fontWeight: "bold",
                color: "#A47355"
              }} to="/signUp">Sign up</Nav.Link>

            }
            {
              user.email && <NavDropdown title={user.photoURL ? img : img1} id="collasible-nav-dropdown">
                <NavDropdown.Item to="#action/3.1">{user.displayName}</NavDropdown.Item>
                <NavDropdown.Item onClick={handleSignOut}>Log Out</NavDropdown.Item>

              </NavDropdown>
            }


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default MenuBar;

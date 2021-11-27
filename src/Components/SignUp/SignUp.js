import React from 'react';
import { Form } from 'react-bootstrap';
import { NavLink ,useHistory} from 'react-router-dom';
import Footer from '../Footer/Footer';
import useAuth from '../Hooks/useAuth';
import MenuBar from '../MenuBar/MenuBar';
import './SignUp.css'

const SignUp = () => {
    const {createNewUser, handleNameChange, handleEmailChange, handlePasswordChange ,error,setUserName,setError} = useAuth();

    const history = useHistory();
    const handleRegistration = (e) =>{
        e.preventDefault();
        createNewUser()
        .then(() => {
            alert('successfully signed up');
            setUserName();
            history.push('/signIn');
        })
        .catch(error => {
            setError(error.message)
        })
    }

    return (
        <div>
            <MenuBar></MenuBar>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Form  onSubmit={handleRegistration} className="form">
                    <p className="text-primary">Please Sign Up </p>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter Name" required />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                    </Form.Group>
                    <small className="text-danger">{error} </small>
                    <small>Already Have An Account ?</small><NavLink to="/signIn">Sign In</NavLink>
                    <p className="mt-2">
                        <button type="submit" className="button">
                            Sign Up
                        </button>
                    </p>

                </Form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;
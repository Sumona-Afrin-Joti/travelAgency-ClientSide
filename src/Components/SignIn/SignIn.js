import React from 'react';
import { Form } from 'react-bootstrap';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import useAuth from '../Hooks/useAuth';
import MenuBar from '../MenuBar/MenuBar';

const SignIn = () => {
    const { handleSignIn, handleEmailChange, handlePasswordChange, error, setIsLoading, setError, handleGoogleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleSignInUsingEmail = (e) => {
        e.preventDefault()
        handleSignIn()
            .then(() => {
                alert('successfuly signed in')
                history.push(redirect_uri);
               
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    const handleSignInUsingGoogle = (e) => {
        e.preventDefault()
        handleGoogleSignIn()
            .then(() => {
                alert('successfuly signed in');
                history.push(redirect_uri);
               
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <div>
            <MenuBar></MenuBar>
            <div className="d-flex justify-content-center align-items-center my-5">
                <Form onSubmit={handleSignInUsingEmail} className="form">
                    <p className="text-primary">Please Sign In </p>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                    </Form.Group>
                    <small className="text-danger"> {error} </small>

                    <small>Didn't have an account?</small><NavLink to="/signUp">Sign Up</NavLink>
                    <p className="mt-3">
                        <button type="submit" className="button">
                            Sign In
                        </button>
                        <span className="mx-2">or</span>
                        <button onClick={handleSignInUsingGoogle} type="submit" className="button">
                            Sign in Using Google
                        </button>
                    </p>

                </Form>


            </div>

            <Footer></Footer>
        </div>
    );
};

export default SignIn;
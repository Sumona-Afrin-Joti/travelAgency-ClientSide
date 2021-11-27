import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Banner from '../Banner/Banner';
import BeforeFooterSection from '../BeforeFooterSection/BeforeFooterSection';
import DescriptionOfEuro from '../DescriptionOfEuroSecton/DescriptionOfEuro';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import Places from '../Places/Places';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                <MenuBar></MenuBar>
                <Banner>
                    <div style={{ zIndex: "1" }} className="home-page-text">
                        <h2 style={{ color: "white" }} className="fs-1 fw-bold" >EURO</h2>
                        <div className="text-center">
                         <p className="text-white fs-5" > <FontAwesomeIcon icon={faLocationArrow}  className="banner-icon-color"></FontAwesomeIcon> 17 Deal Offers</p>
                        </div>
                    </div>


                </Banner>
                <DescriptionOfEuro></DescriptionOfEuro>
                <Places></Places>

             <BeforeFooterSection></BeforeFooterSection>
             <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;
import React from 'react';
import './Banner.css'

const Banner = (props) => {
    const {children} = props

    return (
        <div className="banner d-flex align-items-center justify-content-center bg">
            {children}
            <div className="bg-black"></div>
        </div>
    );
};

export default Banner;
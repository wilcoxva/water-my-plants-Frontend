import React, { useEffect } from 'react';
import Navigation from './Navigation';

const About = (props) => {

    const isLoggedIn = props.isLoggedIn;

    return (
        <div className="main-bg">
            <Navigation isLoggedIn={isLoggedIn} />
            <h1>About Water My Plants</h1>
        </div>
    )
};

export default About;

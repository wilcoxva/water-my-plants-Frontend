import React, { useEffect } from 'react';
import Navigation from './Navigation';

const Home = (props) => {

    const isLoggedIn = props.isLoggedIn;

    return (
        <div className="main-bg">
            <Navigation isLoggedIn={isLoggedIn} />
            <h1>Water My Plants</h1>
        </div>
    )
};

export default Home;



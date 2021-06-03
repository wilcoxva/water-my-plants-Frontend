import React from 'react';
import Navigation from './Navigation';

const Home = (props) => {

    const isLoggedIn = props.isLoggedIn;

    return (
        <div className="main-bg">
            <Navigation isLoggedIn={isLoggedIn} />
        </div>
    )
};

export default Home;



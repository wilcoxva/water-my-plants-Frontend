import React, { useEffect } from 'react';
import Navigation from './Navigation';

const Home = (props) => {

    const isLoggedIn = props.isLoggedIn;

    return (
        <div className="main-bg">
            <Navigation isLoggedIn={isLoggedIn} />
            <div className="intro">
                <h1>Water My Plants</h1>
                <h2>Please log in with the following credentials:</h2>
                <h2>username: username3</h2>
                <h2>password: password</h2>
            </div>
        </div>
    )
};

export default Home;



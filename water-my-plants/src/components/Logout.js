import React, { useEffect } from 'react';
import Navigation from './Navigation';

const LogOut = (props) => {

    const isLoggedIn = props.isLoggedIn;

    useEffect(() => {
        localStorage.removeItem("token");
        props.setIsLoggedIn(false);
        props.history.push("/LogIn");
    }, [props])
    
    return (
        <div>
            <Navigation isLoggedIn={isLoggedIn} />
            <h3>Successfully Logged Out</h3>
        </div>
    );
};

export default LogOut;
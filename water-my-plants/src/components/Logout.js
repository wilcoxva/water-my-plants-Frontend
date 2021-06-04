import React, { useEffect } from 'react';

const LogOut = (props) => {

    useEffect(() => {
        localStorage.removeItem("token");
        props.setIsLoggedIn(false);
        props.history.push("/LogIn");
    }, [props])
    
    return (
        <div />
    );
};

export default LogOut;
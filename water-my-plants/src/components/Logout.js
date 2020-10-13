import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from './utils/axiosWithAuth';

const LogOut = (props) => {

    useEffect(() => {
        localStorage.removeItem("token");
        props.setIsLoggedIn(false)
        props.history.push("/LogIn");
    }, [])
    

    return (
        <div>
            
        </div>
    );
};

export default LogOut;
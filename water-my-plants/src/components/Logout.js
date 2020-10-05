import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from './utils/axiosWithAuth';

const LogOut = (props) => {

    axios
        .delete("https://water-my-plants-backend-vw.herokuapp.com/logout")
        .then(res => {
            localStorage.setItem("token", res.data.token);
            props.history.push("/LogIn");
        })
        .catch(err => {
            console.log(err);
        });

    return (
        <div>
            
        </div>
    );
};

export default LogOut;
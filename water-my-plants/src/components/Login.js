import React, { useState } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import Navigation from './Navigation';

const LogIn = (props) => {

    const isLoggedIn = props.isLoggedIn;

    const [info, setInfo] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setInfo({...info, [e.target.name]: e.target.value});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios
        .post("https://water-my-plants-backend-vw.herokuapp.com/login", info)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            props.setIsLoggedIn(true);
            props.history.push(`/PlantsList`);
        })
        .catch(err => {
            console.log(err);
            setError(true);
        });
    };

    const handleCancel = e => {
        console.log(e);
        setError(false);
      };

    return (
        <div className="main-bg">
            <Navigation isLoggedIn={isLoggedIn} />
            <form className="login" onSubmit={submitHandler}>
                <input type="text" name="username" placeholder="Enter your username." value={info.username} onChange={handleChange}/>
                <input type="text" name="password" placeholder="Enter your password." value={info.password} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
            <div className="intro">
                <h2>Please log in with the following credentials:</h2>
                <h2>username: username1</h2>
                <h2>password: password</h2>
            </div> 
            <Modal
            title="Error"
            visible={error}
            onOk={handleCancel}
            onCancel={handleCancel}
            >
            <p>Credentials not valid.  Please try again.</p>
            </Modal> 
        </div>
    )
};

export default LogIn;
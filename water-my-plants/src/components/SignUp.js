import React, { useState } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import Navigation from './Navigation';

const SignUp = (props) => {

    const isLoggedIn = props.isLoggedIn;

    const [info, setInfo] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setInfo({...info, [e.target.name]: e.target.value});
    };

    
    const submitHandler = (e) => {
        e.preventDefault();
        axios
        .post("https://water-my-plants-backend-vw.herokuapp.com/register", info)
        .then(res => {
            console.log(res);
            setSuccess(true);
        })
        .catch(err => {
            console.log(err.response.data);
            setError(true);
        });
    };

    const handleOk = e => {
        console.log(e);
        setSuccess(false);
        props.history.push('/LogIn');
      };
    
    const handleCancel = e => {
        console.log(e);
        setError(false);
        setInfo({username: "", password: "", phoneNumber: ""});
      };

    return (
        <div className="main-bg">
            <Navigation isLoggedIn={isLoggedIn} />
            <form className="login" onSubmit={submitHandler}>
                <input type="text" name="username" placeholder="Enter your new username." value={info.username} onChange={handleChange}/>
                <input type="text" name="password" placeholder="Enter your new password." value={info.password} onChange={handleChange}/>
                <input type="text" name="phoneNumber" placeholder="Enter your phone number." value={info.phoneNumber} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form> 
            <Modal
            title="Success"
            visible={success}
            onOk={handleOk}
            onCancel={handleCancel}
            >
            <p>Congratulations! Account succesfully created.</p>
            </Modal>
            <Modal
            title="Error"
            visible={error}
            onOk={handleCancel}
            onCancel={handleCancel}
            >
            <p>Username or phone number is already in use.</p>
            <p>Or you forgot to fill in one of the fields.</p>
            <p>Try again!</p>
            </Modal>
        </div>
    )
};

export default SignUp;
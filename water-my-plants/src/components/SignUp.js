import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Modal } from 'antd';

const SignUp = props => {

    const [info, setInfo] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [dialogue, setDialogue] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setInfo({...info, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        document.body.style.backgroundImage = "url('https://lh3.googleusercontent.com/u3i8NYFybuIxZRIcHwzPqhy-J1gTRG_v5ITjZxMFXVAwM5E90Cxxqb1vQo1Ydck7twb3tXiAOnqJ2G6JfAQJuVePCwOz5E919nqPZn5opYJ51eJD69AdpscUz97fsQkmWPWcoXjn_Zx8812iyCO4k64mPx8LeD6inWSQQfqMVnW3YyYZ_kuKFttxND9UotRkCfu8RModJtmZMfkdk2RuEr0TEahcD5Zt-GD91C_kIseyUkp-TXN3byiASt3GQ87zGQcACvSFFODTb27M5YyPBAi-dRnQwZBe8ZBIuCfPy4fudgQKy91VeGeFxmjJ73cEr8AdosBVHHg9XhvJz0BCT9WRbjDcHwgkMQyzPiydCvGPcoOK8uAdZt_jFQYX-yo6x8_iBQvIwhN0WJM7A4oFPIupwO8EEA52NQVAxaJHWftF3gsHZoOBFWJ-HSzkIKgmcIH7YU3j_u1fco3SvVtsTXjMeptQUvsE7pAqmQbRAyoej40LLuztDkgPaMBF_tAWLX8VrhpqZjGO4d-kfg0RNnvSOkEJ704hTnQJHrDtk72EIuZ0XSi9pDX-nghMUTMjSK9p726OH0YpJ9DPohLctvst3on2rqhrweRFPIIK5sqY7vgnH-T480vXKtZurlc2csqdN9LeDVDguYS2wc8Dx4P0IOqcHvlYWHxChx8boQHSlqMH-_H3H5reIhG-zw=w1321-h969-no?authuser=0')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
    }, []);

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
            setDialogue(`${err.response.data}`);
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
      };

    const handleOkErr = e => {
        console.log(e);
        setError(false);
      };
    
    const handleCancelErr = e => {
        console.log(e);
        setError(false);
      };

    return (
        <div>
            <form onSubmit={submitHandler}>
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
            onOk={handleOkErr}
            onCancel={handleCancelErr}
            >
            <p>{dialogue}</p>
            <p>Username or phone number is already in use.</p>
            <p>Or you forgot to fill in one of the fields.</p>
            <p>Try again!</p>
            </Modal>
        </div>
    )
};

export default SignUp;
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';

const Plant = props => {

    console.log(props)

    const [plant, setPlant] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get(`https://water-my-plants-backend-vw.herokuapp.com/user${props.location.pathname}`)
        .then(res => {
            setPlant(res.data);
        })
    }, [props.location.pathname]);

    const [info, setInfo] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setInfo({...info, [e.target.name]: e.target.value});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .put(`https://water-my-plants-backend-vw.herokuapp.com/user/`, info)
        .then(res => {
            console.log("res", res)
        })
    };

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="nickname" placeholder="Enter your nickname." value={info.nickname} onChange={handleChange}/>
                <input type="text" name="species" placeholder="Enter your species." value={info.species} onChange={handleChange}/>
                <input type="text" name="h2oFrequency" placeholder="Enter your h2o frequency." value={info.h2oFrequency} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>   
            <div className="pl-container">
                    <div className="p-container" key={plant.nickname}>
                        <h1>{plant.nickname}</h1>
                        <p>{plant.species}</p>
                        <p>{plant.h2oFrequency}</p>
                        <img src={plant.image_url} width="200" height="150" />
                    </div>
            </div>
        </div>
    );
};

export default Plant;
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';
import { Link } from "react-router-dom";
import Navigation from './Navigation';

const PlantsList = (props) => {

    const [plants, setPlants] = useState([]);
    const isLoggedIn = props.isLoggedIn;

    useEffect(() => {
        axiosWithAuth()
        .get('https://water-my-plants-backend-vw.herokuapp.com/user/plants')
        .then(res => {
            setPlants(res.data);
        })
    }, []);

    const [user, setUser] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('https://water-my-plants-backend-vw.herokuapp.com/user')
        .then(res => {
            setUser(res.data);
        })
    }, []);

    const [info, setInfo] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setInfo({...info, [e.target.name]: e.target.value});
    };

    const submitHandler = () => {
        axiosWithAuth()
        .post('https://water-my-plants-backend-vw.herokuapp.com/user/', info)
        .then(res => {
            console.log(res);
            plants.push(res);
        })
    };

    return (
        <div className="alt-bg">
            <Navigation isLoggedIn={isLoggedIn} />
            <div className="pl-outer-container">
                <div className="p-container">
                    <h1>Create a new plant:</h1>
                    <form onSubmit={submitHandler}>
                        <input type="text" name="nickname" placeholder="Enter your nickname." value={info.nickname} onChange={handleChange}/><br/>
                        <input type="text" name="common_name" placeholder="Common name." value={info.common_name} onChange={handleChange}/><br/>
                        <input type="text" name="h2oFrequency" placeholder="H2o frequency." value={info.h2oFrequency} onChange={handleChange}/><br/>
                        <input type="text" name="image_url" placeholder="Image url." value={info.image_url} onChange={handleChange}/><br/>
                        <button type="submit">Submit</button>
                    </form>   
                </div>
                <div className="pl-container">
                    {plants.map(plant => (
                        <div className="p-container" key={plant.nickname}>
                            <h1>{plant.nickname}</h1>
                            <p>Common name: {plant.common_name}</p>
                            <p>Thirst level: {plant.h2oFrequency}</p>
                            <img src={plant.image_url} alt="Plant" width="200" height="150" />
                            <p>{user.username}'s Plant</p>
                            <Link to={{ pathname:`/${plant.user_id}/${plant.id}` }}>View Me</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlantsList;
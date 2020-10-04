import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { axiosWithAuth } from './utils/axiosWithAuth';

const PlantsList = () => {

    const [plants, setPlants] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('https://water-my-plants-backend-vw.herokuapp.com/user/plants')
        .then(res => {
            setPlants(res);
        })
    }, [plants]);

    const [info, setInfo] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setInfo({...info, [e.target.name]: e.target.value});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('https://water-my-plants-backend-vw.herokuapp.com/user', info)
        .then(res => {
            plants.push(res);
        })
    };

    console.log("plants", plants)

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="nickname" placeholder="Enter your nickname." value={info.nickname} onChange={handleChange}/>
                <input type="text" name="species" placeholder="Enter your species." value={info.species} onChange={handleChange}/>
                <input type="text" name="h2oFrequency" placeholder="Enter your h2o frequency." value={info.h2oFrequency} onChange={handleChange}/>
                <input type="text" name="image_url" placeholder="Enter your image url." value={info.image_url} onChange={handleChange}/>
                <input type="text" name="user_id" placeholder="Enter your user_id." value={info.user_id} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>   
            <p>Paragraph text.</p>
            {plants.map(plant => (
                <div>
                    <h1>{plant.nickname}</h1>
                    <p>{plant.species}</p>
                    <p>{plant.h2oFrequency}</p>
                    <p>{plant.image_url}</p>
                    <p>{plant.user_id}</p>
                </div>
            ))}
        </div>
    );
};

export default PlantsList;
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';
import { Link } from "react-router-dom";

const PlantsList = props => {

    const [plants, setPlants] = useState([]);

    useEffect(() => {
        let isSubscribed = true;
        axiosWithAuth()
        .get('https://water-my-plants-backend-vw.herokuapp.com/user/plants')
        .then(res => {
            if (isSubscribed) {
                setPlants(res.data);
            }
        })
        return () => isSubscribed = false
    }, [plants]);

    const [user, setUser] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('https://water-my-plants-backend-vw.herokuapp.com/user')
        .then(res => {
            setUser(res.data);
        })
    }, [user]);

    const [info, setInfo] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setInfo({...info, [e.target.name]: e.target.value});
    };

    const submitHandler = () => {
        axiosWithAuth()
        .post('https://water-my-plants-backend-vw.herokuapp.com/user', info)
        .then(res => {
            plants.push(res);
        })
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="nickname" placeholder="Enter your nickname." value={info.nickname} onChange={handleChange}/>
                <input type="text" name="species" placeholder="Enter your species." value={info.species} onChange={handleChange}/>
                <input type="text" name="h2oFrequency" placeholder="Enter your h2o frequency." value={info.h2oFrequency} onChange={handleChange}/>
                <input type="text" name="image_url" placeholder="Enter your image url." value={info.image_url} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>   
            <p>Paragraph text.</p>
            <div className="pl-container">
                {plants.map(plant => (
                    <div className="p-container" key={plant.nickname}>
                        <h1>{plant.nickname}</h1>
                        <p>{plant.species}</p>
                        <p>{plant.h2oFrequency}</p>
                        <img src={plant.image_url} width="200" height="150" />
                        <p>{user.username}'s Plant</p>
                        <Link to={{ pathname:`/${plant.user_id}/${plant.id}` }}>View Me</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlantsList;
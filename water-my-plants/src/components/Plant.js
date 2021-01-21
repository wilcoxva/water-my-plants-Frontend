import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';
import Navigation from './Navigation';
import { Link } from "react-router-dom";

const Plant = (props) => {

    const [plant, setPlant] = useState([]);

    const isLoggedIn = props.isLoggedIn;

    useEffect(() => {
        axiosWithAuth()
        .get(`https://water-my-plants-backend-vw.herokuapp.com/user/${props.match.params.plantId}`)
        .then(res => {
            setPlant(res.data);
        })
    }, [props.match.params.plantId]);

    const [info, setInfo] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setInfo({...info, [e.target.name]: e.target.value});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .put(`https://water-my-plants-backend-vw.herokuapp.com/user/${props.match.params.plantId}`, info)
        .then(res => {
            setPlant(res.data)
        })
    };

    return (
        <div className="alt-bg">
            <Navigation isLoggedIn={isLoggedIn} />
            <h1>Form</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="nickname" placeholder="Enter your nickname." value={info.nickname} onChange={handleChange}/>
                <input type="text" name="common_name" placeholder="Enter your common name." value={info.common_name} onChange={handleChange}/>
                <input type="text" name="h2oFrequency" placeholder="Enter your h2o frequency." value={info.h2oFrequency} onChange={handleChange}/>
                <input type="text" name="image_url" placeholder="Enter your image url." value={info.image_url} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>   
            <div className="pl-container">
                    <div className="p-container" key={plant.nickname}>
                        <h1>{plant.nickname}</h1>
                        <p>Common name: {plant.common_name}</p>
                        <p>Thirst level: {plant.h2oFrequency}</p>
                        <img src={plant.image_url} alt="Plant" width="200" height="150" /><br/>
                        <Link to={{ pathname:'/PlantsList' }}>Go back</Link>
                    </div>
            </div>
        </div>
    );
};

export default Plant;
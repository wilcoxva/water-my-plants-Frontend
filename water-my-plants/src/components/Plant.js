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

    const deleteHandler = (e) => {
        axiosWithAuth()
        .delete(`https://water-my-plants-backend-vw.herokuapp.com/user/${props.match.params.plantId}`)
        .then(res => {
            props.history.push('/PlantsList');
        })
    }

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
            <div className="plantcontainer">
                <div className="pl-container">
                    <form className="p-container" key={plant.nickname} onSubmit={deleteHandler}>
                        <h1>{plant.nickname}</h1>
                        <p>Common name: {plant.common_name}</p>
                        <p>Thirst level: {plant.h2oFrequency}</p>
                        <img src={plant.image_url} alt="Plant" width="200" height="150" /><br/>
                        <Link to={{ pathname:'/PlantsList' }}>Go back</Link>
                        <button type="submit">Delete Plant</button>
                    </form>
                </div>
                <form className="plantslist_form" onSubmit={submitHandler}>
                    <h1>Update your Plant</h1>
                    <input type="text" name="nickname" placeholder="Enter your nickname." value={info.nickname} onChange={handleChange}/><br/>
                    <input type="text" name="common_name" placeholder="Enter your common name." value={info.common_name} onChange={handleChange}/><br/>
                    <input type="text" name="h2oFrequency" placeholder="Enter your h2o frequency." value={info.h2oFrequency} onChange={handleChange}/><br/>
                    <input type="text" name="image_url" placeholder="Enter your image url." value={info.image_url} onChange={handleChange}/><br/>
                    <button type="submit">Submit</button>
                </form>  
            </div>
        </div>
    );
};

export default Plant;
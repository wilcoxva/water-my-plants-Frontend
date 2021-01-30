import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...theRest }) => {
    return(
        <Route
            {...theRest}
            render={(props) => {
                if(localStorage.getItem("token")) {
                    return <Component {...props} />;
                } else {
                    console.log("redirect");
                    return <Redirect to="/login" />;
                }
            }}
        />
    );
}
export default PrivateRoute;


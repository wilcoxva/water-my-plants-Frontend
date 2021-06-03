import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../components/utils/isLoggedIn';

const PrivateRoute = ({ component: Component, ...theRest }) => {
    return(
        <Route
            {...theRest}
            render={props => (
                isLoggedIn() ? 
                    <Component {...props} />
                : <Redirect to="/login" />
            )}
        />
    );
}
export default PrivateRoute;


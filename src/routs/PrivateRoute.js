import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { MainContext } from '../contex/AuthContex';

const PrivateRoute = ({children}) => {
    const { user, loader} = useContext(MainContext)
    const location = useLocation()
    
    if (loader) {
        return <progress className="progress w-56 text-center"></progress>
    };
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;
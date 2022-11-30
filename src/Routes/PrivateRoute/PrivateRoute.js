import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { authContext } from '../../Context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const loaction = useLocation();

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (user?.uid) {
        return children;
    }

    return <Navigate to='/login' state={{ from: loaction }} replace></Navigate>
};

export default PrivateRoute;
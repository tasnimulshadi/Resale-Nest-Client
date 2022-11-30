import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { authContext } from '../../Context/AuthProvider';
import useRole from '../../Hooks/useRole';

const AuthorizedRoute = ({ children, routeRole }) => {
    const { user } = useContext(authContext);
    const [role, isRoleLoading] = useRole(user?.email);

    if (isRoleLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (role === routeRole) {
        return children;
    }

    return <Navigate to='/'></Navigate>
};

export default AuthorizedRoute;
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../context-api/AuthContext';
import { useContext } from 'react';

function ProtectedRoute() {

    const { isAuthenticated, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }

    return (isAuthenticated ? <Outlet></Outlet> : <Navigate to="/"></Navigate>)
}

export default ProtectedRoute

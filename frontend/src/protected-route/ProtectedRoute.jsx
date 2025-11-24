import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute() {

    const userToken = localStorage.getItem("Token");

    return (userToken ? <Outlet></Outlet> : <Navigate to="/"></Navigate>)
}

export default ProtectedRoute

import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom';

interface IProps{
    protectedRoute:boolean | null;
    children:ReactNode
}

function ProtectedRouteHOC({protectedRoute,children}:IProps):any {
    const token = localStorage.getItem("token");
    if((protectedRoute && token)) {
            return children;
    }

    if((protectedRoute && !token)) {
           return <><Navigate to="/auth/login"/></>
    } 

    if((!protectedRoute && token)) {
        return <><Navigate to="/home"/></>
 } 

    return children;
}

export default ProtectedRouteHOC

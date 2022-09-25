import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

//check if the user is authenticated
//if yes, redirected/ navigate to the page/component that he/she was trying to access
//else navigate to the login page.
const ReqAuth = ({children}) => {
    const location = useLocation()
    const auth = useSelector((store)=>store.AuthReducer.isAuth);

    if(!auth){
        return <Navigate to="/login" state={{from:location}} replace />
    }
    return children;
}

export  {ReqAuth};
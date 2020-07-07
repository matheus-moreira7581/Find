import React, { useEffect } from 'react';
import { View } from 'react-native';

import { useAuth } from '../contexts/auth';

import { CustomerTabRoutes, CompanyTabRoutes } from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
    const { signedIn, loggedUser } = useAuth();
    const checkLoginType = () => {
        if(loggedUser.type === 'client')
            return <CustomerTabRoutes/>
        else
            return <CompanyTabRoutes/>
    }
    return (
        signedIn ? checkLoginType() : <AuthRoutes/>
    ); 
        
};

export default Routes;
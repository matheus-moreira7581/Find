import React, { useEffect } from 'react';
import { View } from 'react-native';

import { useAuth } from '../contexts/auth';

import { CustomerAppRoutes, CompanyAppRoutes, TabAppRoutes, ServiceCompanyTabAppRoutes } from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
    const { signedIn, loggedUser } = useAuth();
    const checkLoginType = () => {
        if(loggedUser.type === 'client')
            return <TabAppRoutes/>
        else
            return <ServiceCompanyTabAppRoutes/>
    }
    return (
        <TabAppRoutes/> 
    ); 
        
};

export default Routes;
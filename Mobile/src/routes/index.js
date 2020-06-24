import React from 'react';
import { View} from 'react-native';

import { useAuth } from '../contexts/auth';

import { CustomerAppRoutes, CompanyAppRoutes, TabAppRoutes, CompanyTabAppRoutes } from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
    const { signedIn, loggedUser} = useAuth();

    const checkLoginType = (email) => {
        if(loggedUser.email === 'teste@teste.com') {
            return <TabAppRoutes />
        }
        else return <CompanyTabAppRoutes />
    }

    return (
        signedIn ? checkLoginType() : <AuthRoutes/> 
    ) 
  
};

export default Routes;
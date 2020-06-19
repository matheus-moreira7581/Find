import React from 'react';

import { useAuth } from '../contexts/auth';

import { CustomerAppRoutes, CompanyAppRoutes, TabAppRoutes } from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
    const { signedIn } = useAuth();

    return (
        signedIn ? <TabAppRoutes />  : <AuthRoutes/> 
    )
};

export default Routes;
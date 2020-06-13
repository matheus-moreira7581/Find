import React from 'react';

import { useAuth } from '../contexts/auth';

import { CustomerAppRoutes, CompanyAppRoutes } from './app.routes';


const Routes = () => {
    const { signedIn } = useAuth();
    
    return signedIn ? <CustomerAppRoutes/> : <AuthRoutes/>
};

export default Routes;
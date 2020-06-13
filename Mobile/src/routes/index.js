import React from 'react';

import { useAuth } from '../contexts/auth';

import { CustomerAppRoutes, CompanyAppRoutes } from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
    const { signedIn } = useAuth();
    
    return signedIn ? <CustomerAppRoutes/> : <AuthRoutes/>
};

export default Routes;
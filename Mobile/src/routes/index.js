import React from 'react';

import { useAuth } from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
    const { signedIn } = useAuth();
    
    return signedIn ? <AppRoutes/> : <AuthRoutes/>
};

export default Routes;
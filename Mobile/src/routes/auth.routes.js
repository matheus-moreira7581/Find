import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/Login';
import CustomerRegistrationScreen from '../pages/CustomerRegistration';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="Login" component={LoginScreen}/>
        <AuthStack.Screen name="CustomerRegistration" component={CustomerRegistrationScreen}/>
    </AuthStack.Navigator>
);

export default AuthRoutes;
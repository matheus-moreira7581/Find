import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/Login';

import CustomerRegistrationScreen from '../pages/CustomerRegistration';

import OpeningHoursScreen from '../pages/OpeningHours';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="Login" component={LoginScreen}/>
        <AuthStack.Screen name="CustomerRegistration" component={CustomerRegistrationScreen}/>
        <AuthStack.Screen name="OpeningHours" component={OpeningHoursScreen}/>
    </AuthStack.Navigator>
);

export default AuthRoutes;
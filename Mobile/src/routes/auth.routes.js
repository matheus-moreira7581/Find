import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/Login';

// Telas de cadastro do cliente
import CustomerRegistrationScreen from '../pages/CustomerRegistration';

//Telas de cadastro da empresa
import OpeningHoursScreen from '../pages/OpeningHours';


const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator headerMode="none" initialRouteName="Login">
        <AuthStack.Screen name="Login" component={LoginScreen}/>
        <AuthStack.Screen name="CustomerRegistration" component={CustomerRegistrationScreen}/>
        <AuthStack.Screen name="OpeningHours" component={OpeningHoursScreen}/>
    </AuthStack.Navigator>
);

export default AuthRoutes;
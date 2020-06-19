import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/Login';
import RegistrationTypeScreen from '../pages/RegistrationType';

// Telas de cadastro do cliente
import CustomerRegistrationScreen from '../pages/CustomerRegistration';

//Telas de cadastro da empresa
import CompanyRegistrationTypeScreen from '../pages/CompanyRegistrationType';
import CompanyPersonalDataScreen from '../pages/CompanyPersonalData'
import CompanyRegistrationScreen from '../pages/CompanyRegistration'
import OpeningHoursScreen from '../pages/OpeningHours';


const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator headerMode="none" initialRouteName="Login">
        <AuthStack.Screen name="Login" component={LoginScreen}/>
        <AuthStack.Screen name="RegistrationType" component={RegistrationTypeScreen}/>
        <AuthStack.Screen name="CompanyRegistrationType" component={CompanyRegistrationTypeScreen}/>
        <AuthStack.Screen name="CompanyPersonalData" component={CompanyPersonalDataScreen}/>
        <AuthStack.Screen name="CompanyRegistration" component={CompanyRegistrationScreen}/>
        <AuthStack.Screen name="OpeningHours" component={OpeningHoursScreen}/>
        <AuthStack.Screen name="CustomerRegistration" component={CustomerRegistrationScreen}/>
    </AuthStack.Navigator>
);

export default AuthRoutes;
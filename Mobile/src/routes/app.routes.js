import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/Home';
import CompaniesScreen from '../pages/Companies';
import CompanyProductsScreen from '../pages/CompanyProducts';
import PaymentOptionsScreen from '../pages/PaymentOptions';
import DeliveryOptionsScreen from '../pages/DeliveryOptions';
import SuccessOrderScreen from '../pages/SuccessOrder';

const CustomerAppStack = createStackNavigator();
const CompanyAppStack = createStackNavigator();

export const CustomerAppRoutes = () => (
    <CustomerAppStack.Navigator headerMode="none">
        <CustomerAppStack.Screen name="Home" component={HomeScreen}/>
        <CustomerAppStack.Screen name="Companies" component={CompaniesScreen}/>
        <CustomerAppStack.Screen name="CompanyProducts" component={CompanyProductsScreen}/>
        <CustomerAppStack.Screen name="PaymentOptions" component={PaymentOptionsScreen}/>
        <CustomerAppStack.Screen name="DeliveryOptions" component={DeliveryOptionsScreen}/>
        <CustomerAppStack.Screen name="SuccessOrder" component={SuccessOrderScreen}/>
    </CustomerAppStack.Navigator>
);

export const CompanyAppRoutes = () => (
    <CompanyAppStack.Navigator headerMode="none">
        
    </CompanyAppStack.Navigator>
);

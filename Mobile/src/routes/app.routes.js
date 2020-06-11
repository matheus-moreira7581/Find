import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/Home';
import CompaniesScreen from '../pages/Companies';
import CompanyProductsScreen from '../pages/CompanyProducts';
import PaymentOptionsScreen from '../pages/PaymentOptions';
import DeliveryOptionsScreen from '../pages/DeliveryOptions';
import SuccessOrderScreen from '../pages/SuccessOrder';

const AppStack = createStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Home" component={HomeScreen}/>
        <AppStack.Screen name="Companies" component={CompaniesScreen}/>
        <AppStack.Screen name="CompanyProducts" component={CompanyProductsScreen}/>
        <AppStack.Screen name="PaymentOptions" component={PaymentOptionsScreen}/>
        <AppStack.Screen name="DeliveryOptions" component={DeliveryOptionsScreen}/>
        <AppStack.Screen name="SuccessOrder" component={SuccessOrderScreen}/>
    </AppStack.Navigator>
);

export default AppRoutes;
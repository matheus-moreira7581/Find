import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../pages/Home';
import CompaniesScreen from '../pages/Companies';
import CompanyProductsScreen from '../pages/CompanyProducts';
import PaymentOptionsScreen from '../pages/PaymentOptions';
import DeliveryOptionsScreen from '../pages/DeliveryOptions';
import SuccessOrderScreen from '../pages/SuccessOrder';

const CustomerAppStack = createStackNavigator();
const CompanyAppStack = createStackNavigator();
const AppTab = createBottomTabNavigator();

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

export const TabAppRoutes = () => (
    <AppTab.Navigator initialRouteName="Home" tabBarOptions={{showLabel: false}}>
        <AppTab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="home" size={size} color={color} />
                ),
            }}
        />
        <AppTab.Screen 
            name="History" 
            component={HomeScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="receipt" size={size} color={color} />
                ),
            }}
        />
        <AppTab.Screen 
            name="Chat" 
            component={HomeScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="speaker-notes" size={size} color={color} />
                ),
            }}
        />
        <AppTab.Screen 
            name="Profile" 
            component={HomeScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="person" size={size} color={color} />
                ),
            }}
        />
    </AppTab.Navigator>
)

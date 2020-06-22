import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../pages/Home';
import CompaniesScreen from '../pages/Companies';
import CompanyProductsScreen from '../pages/CompanyProducts';
import ProductDeatilsScreen from '../pages/ProductDetails';
import PaymentOptionsScreen from '../pages/PaymentOptions';
import DeliveryOptionsScreen from '../pages/DeliveryOptions';
import DeliveryAddressScreen from '../pages/DeliveryAddress';
import SuccessOrderScreen from '../pages/SuccessOrder';
import RequestsMadeScreen from '../pages/RequestsMade';

import ProductManagementScreen from '../pages/ProductManagement';
import RequestConfirmedScreen from '../pages/RequestConfirmed';

import HomeCompanyScreen from '../pages/HomeCompany';
import CompanyIncomeScreen from '../pages/CompanyIncome';

const CustomerAppStack = createStackNavigator();
const CompanyAppStack = createStackNavigator();
const AppTab = createBottomTabNavigator();

export const CustomerAppRoutes = () => (
    <CustomerAppStack.Navigator headerMode="none" initialRouteName="Home">
        <CustomerAppStack.Screen name="Home" component={HomeScreen}/>
        <CustomerAppStack.Screen name="Companies" component={CompaniesScreen}/>
        <CustomerAppStack.Screen name="CompanyProducts" component={CompanyProductsScreen}/>
        <CustomerAppStack.Screen name="ProductDetails" component={ProductDeatilsScreen}/>
        <CustomerAppStack.Screen name="PaymentOptions" component={PaymentOptionsScreen}/>
        <CustomerAppStack.Screen name="DeliveryOptions" component={DeliveryOptionsScreen}/>
        <CustomerAppStack.Screen name="DeliveryAddress" component={DeliveryAddressScreen}/>
        <CustomerAppStack.Screen name="SuccessOrder" component={SuccessOrderScreen}/>
        <CustomerAppStack.Screen name="RequestsMade" component={RequestsMadeScreen}/>
    </CustomerAppStack.Navigator>
);

export const CompanyAppRoutes = () => (
    <CompanyAppStack.Navigator headerMode="none" initialRouteName="HomeCompany">
        <CompanyAppStack.Screen name="HomeCompany" component={HomeCompanyScreen}/>
        <CompanyAppStack.Screen name="NewProduct" component={ProductManagementScreen}/>
        <CompanyAppStack.Screen name="RequestConfirmed" component={RequestConfirmedScreen}/>
    </CompanyAppStack.Navigator>
);

export const TabAppRoutes = () => (
    <AppTab.Navigator initialRouteName="Home" tabBarOptions={{showLabel: false}}>
        <AppTab.Screen 
            name="Home" 
            component={CustomerAppRoutes}
            options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="home" size={size} color={color} />
                ),
            }}
        />
        <AppTab.Screen 
            name="History" 
            component={RequestsMadeScreen}
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
);

export const CompanyTabAppRoutes = () => (
    <AppTab.Navigator initialRouteName="HomeCompany" tabBarOptions={{showLabel: false}}>
        <AppTab.Screen 
            name="HomeCompany" 
            component={CompanyAppRoutes}
            options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="home" size={size} color={color} />
                ),
            }}
        />
        <AppTab.Screen 
            name="Income" 
            component={CompanyIncomeScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="payment" size={size} color={color} />
                ),
            }}
        />
        <AppTab.Screen 
            name="Chat" 
            component={HomeCompanyScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="speaker-notes" size={size} color={color} />
                ),
            }}
        />
        <AppTab.Screen 
            name="Profile" 
            component={HomeCompanyScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="person" size={size} color={color} />
                ),
            }}
        />
    </AppTab.Navigator>
)

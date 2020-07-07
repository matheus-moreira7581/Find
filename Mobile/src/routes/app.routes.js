import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from '@expo/vector-icons';

import { ServiceSchedulingProvider } from '../contexts/serviceScheduling';
import { CategoryProvider } from '../contexts/categorySelection';
import { CartProvider } from '../contexts/cart';

import HomeScreen from '../pages/Home';
import CompaniesScreen from '../pages/Companies';
import CompanyProductsScreen from '../pages/CompanyProducts';
import ProductDeatilsScreen from '../pages/ProductDetails';
import PaymentOptionsScreen from '../pages/PaymentOptions';
import DeliveryOptionsScreen from '../pages/DeliveryOptions';
import ServiceOptionsScreen from '../pages/ServiceOptions';
import DeliveryAddressScreen from '../pages/DeliveryAddress';
import ReedemProductScreen from '../pages/RedeemProduct';
import SuccessOrderScreen from '../pages/SuccessOrder';
import RequestsMadeScreen from '../pages/RequestsMade';
import MarketBagScreen from '../pages/MarketBag';
import ProfileScreen from '../pages/Profile';
import CustomerInfoScreen from '../pages/CustomerInfo'


import ItemManagementScreen from '../pages/ItemManagement';
import RequestConfirmedScreen from '../pages/RequestConfirmed';

import HomeCompanyScreen from '../pages/HomeCompany';
import HomeRunningScreen from '../pages/CompanyRunning';
import CompanyIncomeScreen from '../pages/CompanyIncome';
import ServiceSchedulingScreen from '../pages/ServiceScheduling';
import OrderDetailsScreen from '../pages/OrderDetails';

const CustomerAppStack = createStackNavigator();
const CompanyAppStack = createStackNavigator();
const CustomerProfileStack = createStackNavigator();
const CompanyProfileStack = createStackNavigator();
const AppTab = createBottomTabNavigator();

export const CustomerAppRoutes = () => (
    <ServiceSchedulingProvider>
        <CategoryProvider>
            <CustomerAppStack.Navigator headerMode="none" initialRouteName="Home">
                <CustomerAppStack.Screen name="Home" component={HomeScreen}/>
                <CustomerAppStack.Screen name="Companies" component={CompaniesScreen}/>
                <CustomerAppStack.Screen name="CompanyProducts" component={CompanyProductsScreen}/>
                <CustomerAppStack.Screen name="MarketBag" component={MarketBagScreen}/>
                <CustomerAppStack.Screen name="ProductDetails" component={ProductDeatilsScreen}/>
                <CustomerAppStack.Screen name="PaymentOptions" component={PaymentOptionsScreen}/>
                <CustomerAppStack.Screen name="DeliveryOptions" component={DeliveryOptionsScreen}/>
                <CustomerAppStack.Screen name="ServiceOptions" component={ServiceOptionsScreen}/>
                <CustomerAppStack.Screen name="DeliveryAddress" component={DeliveryAddressScreen}/>
                <CustomerAppStack.Screen name="ReedemProduct" component={ReedemProductScreen}/>
                <CustomerAppStack.Screen name="SuccessOrder" component={SuccessOrderScreen}/>
                <CustomerAppStack.Screen name="RequestsMade" component={RequestsMadeScreen}/>
                <CustomerAppStack.Screen name="ServiceScheduling" component={ServiceSchedulingScreen}/>
            </CustomerAppStack.Navigator>
        </CategoryProvider>      
    </ServiceSchedulingProvider>    
);

const CustomerProfileRoutes = () => (
    <CustomerProfileStack.Navigator headerMode="none" initialRouteName="Profile">
        <CustomerProfileStack.Screen name="Profile" component={ProfileScreen}/>
        <CustomerProfileStack.Screen name="CustomerInfo" component={CustomerInfoScreen}/>
    </CustomerProfileStack.Navigator>
);

export const CompanyAppRoutes = () => (
    <CompanyAppStack.Navigator headerMode="none" initialRouteName="HomeCompany">
        <CompanyAppStack.Screen name="HomeCompany" component={HomeCompanyScreen}/>
        <CompanyAppStack.Screen name="CompanyRunning" component={HomeRunningScreen}/>
        <CompanyAppStack.Screen name="OrderDetails" component={OrderDetailsScreen}/>
        <CompanyAppStack.Screen name="NewProduct" component={ItemManagementScreen}/>
        <CompanyAppStack.Screen name="RequestConfirmed" component={RequestConfirmedScreen}/>
    </CompanyAppStack.Navigator>
);
export const CustomerTabRoutes = () => (
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
            component={RequestsMadeScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="speaker-notes" size={size} color={color} />
                ),
            }}
        />
        <AppTab.Screen 
            name="Profile" 
            component={CustomerProfileRoutes}
            options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="person" size={size} color={color} />
                ),
            }}
        />
    </AppTab.Navigator>
);

export const CompanyTabRoutes = () => (
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
            component={ProfileScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="person" size={size} color={color} />
                ),
            }}
        />
    </AppTab.Navigator>
)

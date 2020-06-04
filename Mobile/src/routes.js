import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Home from './pages/Home';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarLabel: "Início",
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="home" color={color} size={size}/>
            ),
          }} />
        <Tab.Screen 
          name="Orders" 
          component={Home} 
          options={{
            tabBarLabel: "Pedidos",
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="view-list" color={color} size={size}/>
            ),
          }} />
        <Tab.Screen 
          name="Profile" 
          component={Home} 
          options={{
            tabBarLabel: "Perfil",
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="person" color={color} size={size}/>
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
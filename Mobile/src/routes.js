import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import DeliveryOptions from './pages/DeliveryOptions';
const Routes = () => {
  return (
    <NavigationContainer>
      <DeliveryOptions/>
    </NavigationContainer>
  );
}

export default Routes;
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { 
        useFonts, 
        Montserrat_500Medium, Montserrat_600SemiBold, 
        Montserrat_700Bold, 
        Montserrat_400Regular
} from '@expo-google-fonts/montserrat';

import { AuthProvider } from './src/contexts/auth';
import { CartProvider } from './src/contexts/cart';

import Routes from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts ({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  })
  if(!fontsLoaded) {
    return <AppLoading />
  }
  else {
    return (
      
      <NavigationContainer>
        <CartProvider>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </CartProvider>
      </NavigationContainer>
       
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

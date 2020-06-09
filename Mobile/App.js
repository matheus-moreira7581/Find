import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, Montserrat_500Medium, Montserrat_600SemiBold, 
        Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import Home from './src/pages/Home';
import CompanyProducts from './src/pages/CompanyProducts';
import Companies from './src/pages/Companies'
import Routes from './src/routes';
import DeliveryOptions from './src/pages/DeliveryOptions'
import SuccessOrder from './src/pages/SuccessOrder';

export default function App() {
  const [fontsLoaded] = useFonts ({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  })
  if(!fontsLoaded) {
    return <AppLoading />
  }
  else {
    return (
      // <Routes />
      // <CompanyProducts/>
      // <Companies />
      // <Home />
      // <DeliveryOptions/>
      <SuccessOrder />
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

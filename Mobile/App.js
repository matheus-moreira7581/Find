import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, Montserrat_500Medium, Montserrat_600SemiBold, 
        Montserrat_700Bold} from '@expo-google-fonts/montserrat';
import Home from './src/pages/Home';
import Routes from './src/routes';

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
      <Routes />
      // <Home />
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

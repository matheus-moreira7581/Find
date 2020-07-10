import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RoundedButton from '../../components/RoundedButton';
import styles from './styles';

import { MaterialIcons } from '@expo/vector-icons'; 
import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import colors from '../../assets/var/colors';
import adjustFontSize from '../../utils/adjustFontSize';
import { useNavigation } from '@react-navigation/native';

const RegistrationType = () => {
  const navigation = useNavigation();

  const navigateToClientRegistration = () => {
    navigation.navigate('CustomerRegistration');
  }

  const navigateToCompanyRegistrationType = () => {
    navigation.navigate('CompanyRegistrationType');
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => {navigation.goBack()}}
      >
          <MaterialIcons name="arrow-back" size={adjustHorizontalMeasure(20)} color={colors.secondary} style={styles.backIcon}/>
      </TouchableOpacity>
      <View style={styles.centeredContainer}>
          <Text style={styles.headerText}>Cadastre-se</Text>
      </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.profissionalTypeContainer}>
          <RoundedButton 
            text="Sou Profissional"
            style={styles.button}
            onPress={navigateToCompanyRegistrationType} 
            selected={true}
            fontSize={adjustFontSize(20)} 
            width={327.5}
            height={71.6}
          />
        </View>
        <View style={styles.clientTypeContainer}>
          <RoundedButton 
            text="Sou Cliente" 
            onPress={navigateToClientRegistration} 
            style={styles.button}
            fontSize={adjustFontSize(20)} 
            selected={true} 
            width={327.5}
            height={71.6}
          />
        </View>
      </View>
    </View>
  )
}

export default RegistrationType;
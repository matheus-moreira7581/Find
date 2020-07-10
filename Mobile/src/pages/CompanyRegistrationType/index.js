import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons'; 

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import styles from './styles';
import colors from '../../assets/var/colors';

import RoundedButton from '../../components/RoundedButton';

const CompanyRegistrationType = () => {
  const navigation = useNavigation();

  const navigateToProductType = () => {
    navigation.navigate('CompanyPersonalData', {
      registrationType: 'product'
    });
  }
  
  const navigateToServiceType = () => {
    navigation.navigate('CompanyPersonalData', {
      registrationType: 'service'
    });
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
        <View style={styles.textContainer}> 
          <Text style={styles.text}>
            O que você deseja vender?
          </Text>
        </View>
        <View style={styles.profissionalTypeContainer}>
          <RoundedButton 
            text="Produto"
            style={styles.button}
            onPress={() => {navigateToProductType()}} 
            selected={true}
            fontSize={adjustFontSize(20)} 
            width={327.5}
            height={71.6}
          />
        </View>
        <View style={styles.clientTypeContainer}>
          <RoundedButton 
            text="Serviço" 
            onPress={() => {navigateToServiceType()}} 
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

export default CompanyRegistrationType;
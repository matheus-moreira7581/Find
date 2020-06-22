import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';

import { MaterialIcons } from '@expo/vector-icons'; 

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import { useNavigation } from '@react-navigation/native';


const HomeCompany = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.companyLogoContainer}>
          <Image 
            style={styles.companyLogo}
            source={require('../../assets/images/CompanyLogos/barberShop.png')}
          />
          <Text style={styles.headerText}>Symp Hony</Text>
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton 
            text="Iniciar Expediente" 
            onPress={() => {}} 
            style={styles.button}
            fontSize={adjustFontSize(15)} 
            selected={true} 
            width={256}
            height={40}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.shiftText}>
            {
              "Você precisa iniciar \n" +
              "seu expediente para \n" + 
              "começar a vender."
            }
          </Text>
        </View>
        <View style={styles.smileContainer}>
            <Text style={styles.smileText}>:)</Text>
        </View>
      </View>
    </View>
  )
}

export default HomeCompany;
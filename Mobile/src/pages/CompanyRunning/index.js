import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';

import { MaterialIcons } from '@expo/vector-icons'; 

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import { useNavigation } from '@react-navigation/native';

const CompanyRunning = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerButtonContainer}>
          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.orderButtonText}>Pedidos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceListButton}>
            <Text style={styles.serviceListButtonText}>Meus Serviços</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CompanyRunning;
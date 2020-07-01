import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
import RoundedButton from '../../components/RoundedButton';

import { useAuth } from '../../contexts/auth';

import styles from './styles';
import colors from '../../assets/var/colors';

import { MaterialIcons } from '@expo/vector-icons'; 

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import { useNavigation } from '@react-navigation/native';
import CompanyRunning from '../CompanyRunning';
 

const HomeCompany = () => {
  const navigation = useNavigation();

  const [shift, setShift] = useState(false);
  const [companyLogoUrl, setCompanyLogoUrl] = useState('');
  const [companyName, setCompanyName] = useState('');

  const { signOut, loggedUser, signedIn } = useAuth();

  useEffect(() => {
    setCompanyLogoUrl(loggedUser.data.img_url);
    setCompanyName(loggedUser.data.name);
  },[]);
  
  return (
    shift ? <CompanyRunning onPressButton={() => {setShift(!shift)}}/> : 
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.companyLogoContainer}>
          {
            companyLogoUrl === 'my-photo' || companyLogoUrl === ''
            ? <View style={styles.companyLogoPlaceholder}>
                <MaterialIcons name="insert-photo" size={adjustHorizontalMeasure(20)} color={colors.cinza} />
              </View>
            : <Image 
                style={styles.companyLogo}
                source={companyLogoUrl}
              />
          }
          
          <Text style={styles.headerText}>{companyName}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton 
            text="Iniciar Expediente" 
            onPress={() => {setShift(!shift)}} 
            style={styles.button}
            fontSize={adjustFontSize(15)} 
            selected={true} 
            width={256}
            height={40}
          />
          <TouchableOpacity onPress={() => signOut()}><Text>Logout</Text></TouchableOpacity>
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
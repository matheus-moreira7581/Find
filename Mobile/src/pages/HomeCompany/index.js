import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import { useAuth } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons'; 

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import CompanyRunning from '../CompanyRunning';

import RoundedButton from '../../components/RoundedButton';

import styles from './styles';

import colors from '../../assets/var/colors';

const HomeCompany = () => {
  const navigation = useNavigation();

  const [companyLogoUrl, setCompanyLogoUrl] = useState('');
  const [companyName, setCompanyName] = useState('');
  
  const { signOut, loggedUser, signedIn, officeHour, startOfficeHour, endOfficeHour } = useAuth();
  const [shift, setShift] = useState(false);

  useEffect(() => {
    setCompanyLogoUrl(loggedUser.data.img_url);
    setCompanyName(loggedUser.data.company_name);
  },[]);

  useEffect(() => {
    setShift(officeHour);
  }, [officeHour])

  return (
    shift ? <CompanyRunning handleOfficeHourFunction={endOfficeHour}/> : 
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.companyLogoContainer}>
          {
            companyLogoUrl === 'my-photo' || companyLogoUrl === '' || companyLogoUrl === null
            ? <View style={styles.companyLogoPlaceholder}>
                <MaterialIcons name="insert-photo" size={adjustHorizontalMeasure(20)} color={colors.cinza} />
              </View>
            : <Image 
                style={styles.companyLogo}
                source={{uri: companyLogoUrl}}
              />
          }
          
          <Text style={styles.headerText}>{companyName}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton 
            text="Iniciar Expediente" 
            onPress={() => {
              setShift(!shift);
              startOfficeHour();
            }} 
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
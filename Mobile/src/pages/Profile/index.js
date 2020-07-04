import React from 'react';
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useCart } from '../../contexts/cart';
import { useAuth } from '../../contexts/auth';

import { MaterialIcons } from '@expo/vector-icons'; 

import styles from './styles';

import ProfileMenuListItem from '../../components/ProfileMenuListItem';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import colors from '../../assets/var/colors';

import api from '../../services/api';

const CompanyProfile = () => {
  const navigation = useNavigation();
  const { signOut } = useAuth();
  const { resetCart, orderInfo, requestInfo } = useCart();

  const handleLogout = () => {

  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.centeredContainer}>
          <Text style={styles.headerText}>Perfil</Text>
        </View>
      </View>
      <ScrollView style={styles.bodyContainer}>
        <Image source={null} style={styles.profilePicture}/>
        <ProfileMenuListItem iconName="star" text="Locais favoritos" onPress={()=>{}}/>
      </ScrollView>
      
    </SafeAreaView>
  );
}

export default CompanyProfile;
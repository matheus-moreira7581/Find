import React from 'react';
import { View, Text } from 'react-native';
import RoundedButton from '../../components/RoundedButton';
import styles from './styles';

import { MaterialIcons } from '@expo/vector-icons'; 
import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import colors from '../../assets/var/colors';
import adjustFontSize from '../../utils/adjustFontSize';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';

const CompanyProfile = () => {
  const {signOut} = useAuth()

  return (
    <View style={styles.container}>
      <RoundedButton 
        text="Logout" 
        onPress={() => {signOut()}} 
        style={styles.button}
        fontSize={adjustFontSize(15)} 
        selected={true} 
        width={256}
        height={40}
      />
    </View>
  );
}

export default CompanyProfile;
import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from '../CompanyProducts/styles';
import { MaterialIcons } from '@expo/vector-icons';

// import { Container } from './styles';

const CompanyProducts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.ImageContainer}>
          <View>
            <Image 
              source={require('../../assets/images/CompanyLogos/logo.png')}
            />
          </View>
          <View>
            <MaterialIcons name="arrow-back" color="black" size={24}/>
          </View>
        </View>
      </View>

    </View>
  )
}

export default CompanyProducts;
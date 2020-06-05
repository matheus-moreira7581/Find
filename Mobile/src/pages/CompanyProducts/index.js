import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from '../CompanyProducts/styles';
import { MaterialIcons } from '@expo/vector-icons';
import ProductCard from '../../components/ProductCard';

// import { Container } from './styles';

const CompanyProducts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.arrowBack}>
            <MaterialIcons name="arrow-back" color="black" size={24}/>
          </View>
          <View style={styles.ImageCompany}>
            <Image 
              source={require('../../assets/images/CompanyLogos/logo.png')}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.companyName}>Tasti Pizza</Text>
          <View style={styles.rateContainer}>
            <MaterialIcons name="star" style={styles.rate}/>
            <MaterialIcons name="star" style={styles.rate}/>
            <MaterialIcons name="star" style={styles.rate}/>
            <MaterialIcons name="star" style={styles.rate}/>
            <MaterialIcons name="star-half" style={styles.rate}/>
          </View>
          <Text style={styles.companyStatus}>Aberto</Text>
          <Text style={styles.companyAddress}>R. José da Costa Monteiro, 625 - 0,94km</Text>
        </View>
      </View>
      <View style={styles.productsContainer}>
        <ProductCard 
          Title="Teste"
          Description="Testando o card do produto"
          Price="R$ 44,00"
        />
      </View>

    </View>
  )
}

export default CompanyProducts;
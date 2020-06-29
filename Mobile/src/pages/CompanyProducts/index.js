import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from '../CompanyProducts/styles';
import { MaterialIcons } from '@expo/vector-icons';
import ProductCard from '../../components/ProductCard';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const CompanyProducts = () => {
  const navigation = useNavigation();
  //This data is temporary, only for tests
  const DATA = [
    {
      image: require('../../assets/images/CompanyProducts/calabresa.png'),
      title: 'Calabresa c/ Queijo',
      description: 'Molho, calabresa, mozzarella e azeitona.',
      price: '44,00'
    },
    {
      image: require('../../assets/images/CompanyProducts/3queijos.png'),
      title: 'Três Queijos',
      description: 'Molho, mozzarella, requeijão e parmesão ralado.',
      price: '40,00'
    },
    {
      image: require('../../assets/images/CompanyProducts/marguerita.png'),
      title: 'Marguerita',
      description: 'Molho, mozzarella, tomate e manjericão.',
      price: '39,00'
    },
    {
      image: require('../../assets/images/CompanyProducts/calabresa.png'),
      title: 'Carne seca',
      description: 'Molho, mozzarella e carne seca.',
      price: '40,50'
    },
    {
      image: require('../../assets/images/CompanyProducts/frangoCatupiry.png'),
      title: 'Frango c/ Catupiry',
      description: 'Molho, frango desfiado e catupiry.',
      price: '38,00'
    },
    {
      image: require('../../assets/images/CompanyProducts/portuguesa.png'),
      title: 'Portuguesa',
      description: 'Molho, mozzarella, tomate, milho, calabresa, cebola, ovo, palmito e azeitona.',
      price: '40,00'
    },
  ]

  const navigateToProductDetails = () => {
    navigation.navigate('ProductDetails');
  }

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
        <FlatList 
          data={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <ProductCard 
                Image={item.image}
                Title={item.title}
                Description={item.description}
                Price={item.price}
                onPress={navigateToProductDetails}
              />
            </View>
          )}
        />
      </View>

    </View>
  )
}

export default CompanyProducts;
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { View, Text, SectionList, SafeAreaView, FlatList, TouchableOpacity, Button } from 'react-native';

import styles from './styles';
import HomeList from '../../components/HomeList';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';
import { useCategory } from '../../contexts/categorySelection';
=======
import { View, Text, SectionList, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import HomeList from '../../components/HomeList';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';
>>>>>>> parent of d34f308... delete mobile

import api from '../../services/api';


// import { Container } from './styles';

const Home = () => {
  const navigation = useNavigation();
  const { signOut, loggedUser, signedIn } = useAuth();

  const [showProduct, setShowProduct] = useState(true);
  const [productData, setProductData] = useState([]);
  const [serviceData, setServiceData] = useState([]);

<<<<<<< HEAD
  const { selectedCategory } = useCategory();

  const defaultDataModel = [
=======
  const defaultData = [
>>>>>>> parent of d34f308... delete mobile
    {
      Type: "product",
      Section: "Alimentação",
      data: [
        [{
          title: "Restaurante",
          img_url: require('../../assets/images/ProductCategory/pizzaria.png'),
          id_section: 1,
        },
        {
          title: "Pizzaria",
          img_url: require('../../assets/images/ProductCategory/pizzaria.png'),
          id_section: 1,
        },
        { 
          title: "Hamburguer",
          img_url: require('../../assets/images/ProductCategory/pizzaria.png'),
          id_section: 1,
        }]
      ]
    },
    {
      Type: "product",
      Section: "Alimentação",
      data: [
        [{
          title: "Restaurante",
          img_url: require('../../assets/images/ProductCategory/pizzaria.png'),
          id_section: 1,
        },
        {
          title: "Pizzaria",
          img_url: require('../../assets/images/ProductCategory/pizzaria.png'),
          id_section: 1,
        },
        { 
          title: "Hamburguer",
          img_url: require('../../assets/images/ProductCategory/pizzaria.png'),
          id_section: 1,
        }]
      ]
    },
  ]

  useEffect(() => {
<<<<<<< HEAD
    fetchCategories();
  }, []);
  
  const fetchCategories = async () => {
=======
    loadScreenInfo();
  }, []);
  
  const loadScreenInfo = async () => {
>>>>>>> parent of d34f308... delete mobile
    const response = await api.get('/home-client');
    const allCategories = response.data;

    const productCategories = allCategories.filter(category =>  !!category && category.Type === "product");
    const serviceCategories = allCategories.filter(category => !!category && category.Type === "service");
    
    setProductData(productCategories);
    setServiceData(serviceCategories);
  }
<<<<<<< HEAD

  const navigateToProductTypeCompanies = () => {
      navigation.navigate('Companies', {
        selectedCategory, 
        type: "product"
      });
  }
  const navigateToServiceTypeCompanies = () => {
    navigation.navigate('Companies', {
      selectedCategory, 
      type: "service"
    });
}


  let showList = <HomeList datasource={productData} onPress={navigateToProductTypeCompanies}/>;
  if(showProduct === false) showList = <HomeList datasource={serviceData} onPress={navigateToServiceTypeCompanies}/>
=======
  // This data array is temporary only for test

  const navigateToCompanies = () => {
    navigation.navigate('Companies');
  }

  let showList = <HomeList datasource={productData} onPress={navigateToCompanies}/>;
  if(showProduct === false) showList = <HomeList datasource={serviceData}/>
>>>>>>> parent of d34f308... delete mobile

  const navigateList = (type) => {
    if(type === 'service') setShowProduct(false);
    else setShowProduct(true);
  }


  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.headerContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>
            Olá, {signedIn ? loggedUser.data.name.split(' ')[0] : 'Usuário'}.
          </Text>
          <TouchableOpacity onPress={signOut}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.typeContainer}>
          <TouchableOpacity onPress={() => navigateList('product')}> 
            <Text style={styles.typeText}>Produto</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateList('service')}> 
            <Text style={styles.typeText}>Serviço</Text>
          </TouchableOpacity>
        </View>
      </View>
      {showList}
    </SafeAreaView>
  )
}

export default Home;
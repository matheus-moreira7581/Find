import React, { useState, useEffect } from 'react';
import { View, Text, SectionList, SafeAreaView, FlatList, TouchableOpacity, Button, TextInput } from 'react-native';

import styles from './styles';
import HomeList from '../../components/HomeList';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';
import { useCategory } from '../../contexts/categorySelection';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../assets/var/colors';

import api from '../../services/api';
import adjustFontSize from '../../utils/adjustFontSize';


// import { Container } from './styles';

const Home = () => {
  const navigation = useNavigation();
  const { signOut, loggedUser, signedIn } = useAuth();

  const [showProduct, setShowProduct] = useState(true);
  const [productData, setProductData] = useState([]);
  const [serviceData, setServiceData] = useState([]);

  const defaultDataModel = [
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
    fetchCategories();
  }, []);
  
  const fetchCategories = async () => {
    const response = await api.get('/home-client');
    const allCategories = response.data;

    const productCategories = allCategories.filter(category =>  !!category && category.Type === "product");
    const serviceCategories = allCategories.filter(category => !!category && category.Type === "service");
    
    setProductData(productCategories);
    setServiceData(serviceCategories);
  }

  const navigateToCompanies = () => {
      navigation.navigate('Companies');
  }


  let showList = <HomeList datasource={productData} onPress={navigateToCompanies} height={580}/>;
  if(showProduct === false) showList = <HomeList datasource={serviceData} onPress={navigateToCompanies} height={580}/>

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
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
          <MaterialIcons name="search" size={adjustFontSize(21)} color={colors.primary} />
          <TextInput 
            style={styles.input}
            placeholder="O que você deseja?" 
            placeholderTextColor={colors.cinza}
          />
          </View>
        </View>
        <View style={styles.typeContainer}>
          <TouchableOpacity onPress={() => navigateList('product')}> 
            <Text style={showProduct === true ? styles.activeText : styles.typeText}>Produto</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateList('service')}> 
            <Text style={showProduct === false ? styles.activeText : styles.typeText}>Serviço</Text>
          </TouchableOpacity>
        </View>
      </View>
      {showList}
    </SafeAreaView>
  )
}

export default Home;
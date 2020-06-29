import React, { useState, useEffect } from 'react';
import { View, Text, SectionList, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import HomeList from '../../components/HomeList';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';

import api from '../../services/api';


// import { Container } from './styles';

const Home = () => {
  const navigation = useNavigation();
  const { signOut, loggedUser, signedIn } = useAuth();

  const [showProduct, setShowProduct] = useState(true);
  const [productData, setProductData] = useState(defaultData);
 // const [serviceData, setServiceData] = useState([]);

  const defaultData = [
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
    loadScreenInfo();
  }, []);
  
  //useEffect(() => console.log(productData), [productData]);

  const loadScreenInfo = async () => {
    const response = await api.get('/home-client');
    const allCategories = response.data;
    const productCategories = allCategories.filter(category =>  !!category && category.Type === "product");
    const serviceCategories = allCategories.filter(category => !!category && category.Type === "service");
    setProductData(productCategories);
    
  }
  // This data array is temporary only for test
  const productDATA = [
    {
      title: 'Alimentação',
      data: [[
        {name: 'Restaurante',image: require('../../assets/images/ProductCategory/comida.png')},
        {name: 'Pizzaria',image: require('../../assets/images/ProductCategory/pizzaria.png')},
        {name: 'Hamburguer',image: require('../../assets/images/ProductCategory/hamburguer.png')},
        {name: 'Padaria',image: require('../../assets/images/ProductCategory/padaria.png')}
      ]]
    },
    {
      title: 'Derivados',
      data: 
      [[
        {name: 'Mercados',image: require('../../assets/images/ProductCategory/mercado.png')},
        {name: 'Atacados',image: require('../../assets/images/ProductCategory/atacado.png')},
      ]]
    },
    {
      title: 'Saúde',
      data: 
      [[
        {name: 'Farmácia',image: require('../../assets/images/ProductCategory/farmacia.png')},
        {name: 'Suplementos',image: require('../../assets/images/ProductCategory/suplementos.png')},
      ]]
    },
    {
      title: 'Beleza',
      data: 
      [[
        {name: 'Estética',image: require('../../assets/images/ProductCategory/estetica.png')}
      ]]
    },
    {
      title: 'Educação',
      data: 
      [[
        {name: 'Papelaria',image: require('../../assets/images/ProductCategory/papelaria.png')}, 
        {name: 'Livraria',image: require('../../assets/images/ProductCategory/livros.png')}
      ]]
    },
    {
      title: 'Construção',
      data: 
      [[
        {name: 'Material',image: require('../../assets/images/ProductCategory/material.png')}, 
        {name: 'Ferramenta',image: require('../../assets/images/ProductCategory/ferramenta.png')}
      ]]
    },
  ]
  // This data array is temporary only for test
  const serviceDATA = [
    {
      title: 'Moda e Beleza',
      data: [[
        {name: 'Moda',image: require('../../assets/images/ServicesCategory/roupas.png')},
        {name: 'Salão de Beleza',image: require('../../assets/images/ServicesCategory/salaoDeBeleza.png')},
        {name: 'Barbeiro',image: require('../../assets/images/ServicesCategory/barbeiro.png')},
        {name: 'Estética',image: require('../../assets/images/ServicesCategory/estética.png')}
      ]]
    },
    {
      title: 'Saúde',
      data: [[
        {name: 'Odontologia',image: require('../../assets/images/ServicesCategory/odonto.png')},
        {name: 'Psicologia',image: require('../../assets/images/ServicesCategory/psicologi.png')},
      ]]
    },
    {
      title: 'Design',
      data: [[
        {name: 'UX | UI Design',image: require('../../assets/images/ServicesCategory/UX-UI.png')},
        {name: 'Psicologia',image: require('../../assets/images/ServicesCategory/designGrafico.png')},
      ]]
    },
    {
      title: 'Serviços Domésticos',
      data: [[
        {name: 'Babá',image: require('../../assets/images/ServicesCategory/baba.png')},
        {name: 'Cozinheiro',image: require('../../assets/images/ServicesCategory/cozinheira.png')},
      ]]
    },
  ]

  const navigateToCompanies = () => {
    navigation.navigate('Companies');
  }

  let showList = <HomeList datasource={productData} onPress={navigateToCompanies}/>;
  if(showProduct === false) showList = <HomeList datasource={serviceDATA}/>

  const navigateList = (type) => {
    if(type === 'service') setShowProduct(false);
    else setShowProduct(true);
  }


  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.headerContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Olá, {signedIn ? loggedUser.data.name : Usuário}.</Text>
          
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
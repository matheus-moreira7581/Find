import React, { useState } from 'react';
import { View, Text, SectionList, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import HomeList from '../../components/HomeList';

// import { Container } from './styles';

const Home = () => {
  const [showProduct, setShowProduct] = useState(true);
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
  const serviceData = [
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

  let showList = <HomeList DATA={productDATA}/>;
  if(showProduct === false) showList = <HomeList DATA={serviceData}/>

  const navigateList = (type) => {
    if(type === 'service') setShowProduct(false);
    else setShowProduct(true);
  }


  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.headerContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Olá, Lucas. Oque você deseja?</Text>
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
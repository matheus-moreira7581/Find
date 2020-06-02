import React from 'react';
import { View, Text, SectionList, SafeAreaView, FlatList } from 'react-native';
import styles from './styles';
import ProductCard from '../../components/ProductCard';

// import { Container } from './styles';

const Home = () => {
  // This data array is temporary only for test
  const DATA = [
    {
      title: 'Alimentação',
      data: [[
        {name: 'Restaurante',image: require('../../assets/images/comida.png')},
        {name: 'Pizzaria',image: require('../../assets/images/pizzaria.png')},
        {name: 'Hamburguer',image: require('../../assets/images/hamburguer.png')},
        {name: 'Padaria',image: require('../../assets/images/padaria.png')}
      ]]
    },
    {
      title: 'Derivados',
      data: 
      [[
        {name: 'Mercados',image: require('../../assets/images/mercado.png')},
        {name: 'Atacados',image: require('../../assets/images/atacado.png')},
      ]]
    },
    {
      title: 'Saúde',
      data: 
      [[
        {name: 'Farmácia',image: require('../../assets/images/farmacia.png')},
        {name: 'Suplementos',image: require('../../assets/images/suplementos.png')},
      ]]
    },
    {
      title: 'Beleza',
      data: 
      [[
        {name: 'Estética',image: require('../../assets/images/estetica.png')}
      ]]
    },
    {
      title: 'Educação',
      data: 
      [[
        {name: 'Papelaria',image: require('../../assets/images/papelaria.png')}, 
        {name: 'Livraria',image: require('../../assets/images/livros.png')}
      ]]
    },
    {
      title: 'Construção',
      data: 
      [[
        {name: 'Material',image: require('../../assets/images/material.png')}, 
        {name: 'Ferramenta',image: require('../../assets/images/ferramenta.png')}
      ]]
    },
  ]

  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Olá, Lucas. Oque você deseja?</Text>
      </View>
      <View style={styles.typeContainer}>
        <Text style={styles.typeText}>Produto</Text>
        <Text style={styles.typeText}>Service</Text>
      </View>
      <View style={styles.listContainer}>
        <SectionList 
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.listTitle}>{title}</Text>
          )}
          renderItem={({ item, index }) => 
              <FlatList 
                data={item}
                keyExtractor={(item, index) => item + index}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <ProductCard 
                    Title={item.name} 
                    Image={item.image}
                  />
                </View>
                )
              }
              />
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default Home;
import React, { useState, useEffect } from 'react';
import { View, Text, SectionList, SafeAreaView, FlatList, TouchableOpacity, Button, Image } from 'react-native';

import styles from './styles';
import colors from '../../assets/var/colors';

import { MaterialIcons } from '@expo/vector-icons'; 

import ProductCard from '../../components/ProductCard';
import RoundedButton from '../../components/RoundedButton';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize  from '../../utils/adjustFontSize';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';
import { useCategory } from '../../contexts/categorySelection';

import api from '../../services/api';

const product = [
  {name: "Teste", description: 'Testandooooo', price: '44.00'},
  {name: "Teste", description: 'Testandooooo', price: '44.00'},
  {name: "Teste", description: 'Testandooooo', price: '44.00'}
];

const OrderDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <MaterialIcons name="arrow-back" size={adjustHorizontalMeasure(20)} color={colors.cinzaEscuro}/>
          </TouchableOpacity>
          <View style={styles.centeredContainer}>
              <Text style={styles.categoryText}>Pedido</Text>
          </View> 
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.userContainer}>
          <Text style={styles.userName}>Lucas Batista de Menezes <Text style={styles.orderNumber}>N°2</Text></Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList 
            data={product}
            style={styles.list}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <View style={styles.cardContainer}>
                <ProductCard 
                  Image={item.image}
                  Title={item.name}
                  Description={item.description}
                  Price={item.price}
                  onPress={() => navigateToProductDetails(item.id, companyId)}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.imageContainer}>
              <Image 
                source={require('../../assets/images/points.png')}
                style={styles.image}
                resizeMode="contain"
              />
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsText}>Agendado para 17:30</Text>
            <Text style={styles.detailsText}>Dinheiro</Text>
            <Text style={styles.detailsText}>Total: R$ 25,00</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <RoundedButton
            selected={true}
            text="Confirmar Pedido"
            width={256}
            height={51}
            fontSize={adjustFontSize(16)}
            onPress={() => {}}
          />
          <Text style={styles.buttonCenterText}>OU</Text>
          <RoundedButton
            selected={false}
            text="Cancelar Pedido"
            width={256}
            height={51}
            fontSize={adjustFontSize(16)}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
}

export default OrderDetails;
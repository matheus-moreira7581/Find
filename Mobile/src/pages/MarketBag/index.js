import React, { useState, useEffect } from 'react';
import { View, Text, SectionList, SafeAreaView, FlatList, TouchableOpacity, Button, Image } from 'react-native';

import styles from './styles';
import colors from '../../assets/var/colors';

import { MaterialIcons } from '@expo/vector-icons'; 

import ProductCardWithSideButton from '../../components/ProductCardWithSideButton';
import RoundedButton from '../../components/RoundedButton';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize  from '../../utils/adjustFontSize';

import { useAuth } from '../../contexts/auth';
import { useCategory } from '../../contexts/categorySelection';

import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import {useCart} from '../../contexts/cart'


const product = [
  {name: "Teste", description: 'Testandooooo', price: '44.00'},
  {name: "Teste", description: 'Testandooooo', price: '44.00'},
  {name: "Teste", description: 'Testandooooo', price: '44.00'},
  {name: "Teste", description: 'Testandooooo', price: '44.00'},
  {name: "Teste", description: 'Testandooooo', price: '44.00'},
  {name: "Teste", description: 'Testandooooo', price: '44.00'},
];

const MarketBag = () => {
  const navigation = useNavigation();

  const {cartItems} = useCart();
  const {selectedCategoryCardInfo} = useCategory();

  const deleteButton = 
    <TouchableOpacity style={styles.deleteBottom}> 
      <Text style={styles.deleteText}>Excluir Item</Text> 
    </TouchableOpacity>
  const emptyView =  <View style={styles.deleteBottom}></View>

  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const navigate = () => {
    if(selectedCategoryCardInfo.type === 'product') {
      navigation.navigate('DeliveryOptions');
    }
    else if(selectedCategoryCardInfo.type === 'service') {
      navigation.navigate('ServiceOptions');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <MaterialIcons name="arrow-back" size={adjustHorizontalMeasure(20)} color={colors.cinzaEscuro}/>
          </TouchableOpacity>
          <View style={styles.centeredContainer}>
              <Text style={styles.categoryText}>Sacola</Text>
          </View> 
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.listContainer}>
          <FlatList 
              data={cartItems}
              style={styles.list}
              keyExtractor={(item, index) => item + index}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={styles.cardContainer}>
                  <ProductCardWithSideButton
                    Image={item.image}
                    Title={item.title}
                    Description={item.description}
                    Price={item.price}
                    onPress={() => {setShowDeleteButton(!showDeleteButton)}}
                  />
                </View>
              )}
            />
        </View>
        <View style={styles.buttonsContainer}>
          {showDeleteButton ? deleteButton : emptyView}
          <RoundedButton
            selected={true}
            text="Continuar"
            width={256}
            height={51}
            fontSize={adjustFontSize(16)}
            onPress={() => navigate()}
          />
        </View>
      </View>
    </View>
  );
}

export default MarketBag;
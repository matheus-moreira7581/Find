import React, { useState, useEffect } from 'react';
import { View, Text, SectionList, SafeAreaView, 
        FlatList, TouchableOpacity, Button, Image, Alert } from 'react-native';

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

  const [item, setItem] = useState(null);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const {cartItems, removeProductFromCart, removeServiceFromCart, orderInfo} = useCart();
  const {selectedCategoryCardInfo} = useCategory();

  const getItem = (item) => setItem(item);

  const removeItem = () => {
    if(item) {
      Alert.alert(
        'Confirmar',
        'Deseja mesmo remover o produto da sacola?',
        [
          { text: 'Sim', onPress: () => {
            removeProductFromCart(item)
            setItem(null)
            setShowDeleteButton(!showDeleteButton)
          }},
          { text: 'Não' }
        ]
      );
    }
  }

  const removeService = (item) =>{
    Alert.alert(
      'Confirmar',
      'Deseja mesmo remover o serviço da sacola?',
      [
        { text: 'Sim', onPress: () => {
          removeServiceFromCart(item)
          setItem(null)
        }},
        { text: 'Não' }
      ]
    );
  }

  const editItem = () => {
    navigation.navigate('ProductDetails', {
      Id: item.id_products,
      companyId: orderInfo.id_company,
      edit: true,
      editItem: item
    })
  }

  const deleteButton = 
    <View>
      <TouchableOpacity 
        style={styles.editBottom}
        onPress={editItem}
      > 
        <Text style={styles.editText}>Editar Item</Text> 
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.deleteBottom}
        onPress={removeItem}
      > 
        <Text style={styles.deleteText}>Excluir Item</Text> 
      </TouchableOpacity>
    </View>
  
  const emptyView =  <View style={styles.emptyView}></View>


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
                    Amount={item.amount ? item.amount : null}
                    deleteServicePress={() => {
                      removeService(item);
                    }}
                    onPress={() => {
                      getItem(item)
                      setShowDeleteButton(!showDeleteButton)
                    }}
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
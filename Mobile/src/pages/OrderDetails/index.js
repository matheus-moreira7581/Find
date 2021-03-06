import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Alert } from 'react-native';

import styles from './styles';
import colors from '../../assets/var/colors';

import { MaterialIcons } from '@expo/vector-icons'; 

import ProductCard from '../../components/ProductCard';
import RoundedButton from '../../components/RoundedButton';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize  from '../../utils/adjustFontSize';

import { useNavigation, useRoute } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';

import api from '../../services/api';

const product = [
  {name: "Teste", description: 'Testandooooo', price: '44.00'},
  {name: "Teste", description: 'Testandooooo', price: '44.00'},
  {name: "Teste", description: 'Testandooooo', price: '44.00'}
];

const OrderDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { loggedUser, endOfficeHour } = useAuth()
  
  const [type, setType] = useState('');
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState({});
  const [address, setAddress] = useState({});

  const {orderId, accepted} = route.params;

  const fetchOrder = async () => {
    const getOrder = async () => {
      const response = await api.get(`/details?id_order=${orderId}`);
      return response;
    }
    const response = await getOrder();
    const data = response.data;

    setItems(data.Items);
    setOrder(data.Order);
    if(data.Address) setAddress(data.Address)
  }
  const fetchService = async () => {
    const getService = async () => {
      const response = await api.get(`/details/service?id_request=${orderId}`);
      return response;
    }
    const response = await getService();
    const data = response.data;

    setItems(data.Items);
    setOrder(data.Order);
    if(data.Address) setAddress(data.Address)
  }

  useEffect(() => {
    if(loggedUser.data.type === 'product') fetchOrder();
    else if(loggedUser.data.type === 'service') fetchService();
  }, [])

  const confirmOrder = async () => {
    let response = {};
    if(loggedUser.data.type === 'product') {
      response = await api.put(`/details?id_order=${orderId}`, {
        status: 'Fazendo',
      });
    }
    else if(loggedUser.data.type === 'service') {
      response = await api.put(`/details/service?id_request=${orderId}`, {
        status: 'Aceito',
      });
    }
    if(response.status === 200) return navigation.navigate('RequestConfirmed', {orderId: orderId, accepted: false});
    else {
      Alert.alert('Error', 'Falha ao tentar confirmar o pedido');
      return navigation.navigate('CompanyRunning');
    }
  }

  const cancelOrder = async () => {
    let response = {};
    if(loggedUser.data.type === 'product') {
      response = await api.put(`/details?id_order=${orderId}`, {
        status: 'Cancelado',
      });
    }
    else if(loggedUser.data.type === 'service') {
      response = await api.put(`/details/service?id_request=${orderId}`, {
        status: 'Cancelado',
      });
    }
    if(response.status === 200) return navigation.reset({
      routes: [{name: 'HomeCompany'}]
    });
    else {
      Alert.alert('Error', 'Falha ao tentar cancelar o pedido');
      return navigation.navigate('CompanyRunning');
    }
  }
 
  const getButton = () => {
    let view = 
      <View style={styles.buttonsContainer}>
        <RoundedButton
          selected={true}
          text="Confirmar Pedido"
          width={256}
          height={51}
          fontSize={adjustFontSize(16)}
          onPress={() => confirmOrder()}
        />
        <Text style={styles.buttonCenterText}>OU</Text>
        <RoundedButton
          selected={false}
          text="Cancelar Pedido"
          width={256}
          height={51}
          fontSize={adjustFontSize(16)}
          onPress={() => cancelOrder()}
        />
      </View>

    if(accepted === true) {
      view =
        <View style={styles.continueContainer}>
          <RoundedButton
            selected={true}
            text="Continuar"
            width={256}
            height={51}
            fontSize={adjustFontSize(16)}
            onPress={() => navigateToRequestConfirmed(orderId)}
          />
        </View>
    }
    return view
  }

  const navigateToRequestConfirmed = (id) => {
    return navigation.navigate('RequestConfirmed', {orderId: id, accepted: true});
  };

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
          <Text style={styles.userName}>{order.name}<Text style={styles.orderNumber}> N°2</Text></Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList 
            data={items}
            style={styles.list}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <View style={styles.cardContainer}>
                <ProductCard 
                  Image={item.img_url}
                  Title={item.name}
                  Description={item.description}
                  Price={item.price}
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
            <Text style={styles.detailsText}>{`Agendado para ${order.schedule}`}</Text>
            <Text style={styles.detailsText}>{order.payment}</Text>
            <Text style={styles.detailsText}>{`Total: R$ ${order.total}`}</Text>
          </View>
        </View>
        {getButton()}
      </View>
    </View>
  );
}

export default OrderDetails;
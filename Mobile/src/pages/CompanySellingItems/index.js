import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';

import { MaterialIcons } from '@expo/vector-icons'; 

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import { useNavigation } from '@react-navigation/native';
import ProductCard from '../../components/ProductCard';
import CircleButton from '../../components/CircleButton';

import { useAuth } from '../../contexts/auth'

import api from '../../services/api';

// const sellingItemsData = [
//   {
//     title: 'Corte Masculino', price: '25,00', 
//     image: require('../../assets/images/CompanyServices/corteCabelo.png'),
//     description: "Corte Masculino utilizando maquina e tesoura."
//   },
//   {
//     title: 'Sobrancelha Masculina', price: '5,00', 
//     image: require('../../assets/images/CompanyServices/sobrancelha.png'),
//     description: "A sobrancelha é feita por meio da gilete e tesoura."
//   },
//   {
//     title: 'Sobrancelha Masculina', price: '15,00', 
//     image: require('../../assets/images/CompanyServices/barba.png'),
//     description: "A barba é feita utilizando a gilete e a maquina com regulagem."
//   },
  


// ];

const CompanySellingItems = (props) => {

  const [sellingItemsData, setSellingItemsData] = useState({});

  const {loggedUser} = useAuth();

  const fetchCompanySellingItems = async () => {
    const user = loggedUser;
    const response = await api.get(`/my-products/${user.data.id}`)
    console.log(response.data);
    setSellingItemsData(response.data);
  }

  useEffect(() => {
    fetchCompanySellingItems();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerButtonContainer}>
          <TouchableOpacity 
            style={styles.orderButton}
            onPress={props.onPress}
          >
            <Text style={styles.orderButtonText}>Pedidos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceListButton}>
            <Text style={styles.serviceListButtonText}>Meus Serviços</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.companySellingItemsContainer}>
          <FlatList 
            data={sellingItemsData}
            keyExtractor={(item, index) => item + index}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ProductCard 
                Title={item.name}
                Price={item.price}
                Description={item.description}
              />
            )}
          />
        </View>
        <View style={styles.addButtonContainer}>
          <CircleButton 
            onPress={() => {}} 
            style={styles.button}
            fontSize={52} 
            selected={true} 
            width={52}
            height={52}
          />
        </View>
      </View>
    </View>
  );
}

export default CompanySellingItems;
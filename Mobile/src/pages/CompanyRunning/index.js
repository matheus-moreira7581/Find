import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';

import { MaterialIcons } from '@expo/vector-icons'; 

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import { useNavigation } from '@react-navigation/native';
import OrderCard from '../../components/OrderCard';

import CompanySellingItems from '../CompanySellingItems'

const ordersData = [
  {title: 'Corte Masculino', user: 'Lucas B.'},
  {title: 'Corte Masculino, Barba Masculina', user: 'Evandro S.'},
  {title: 'Sobrancelha Masculina, Corte Masculino', user: 'Tiago V.'},
];

const CompanyRunning = (props) => {
  const [showSellingItems, setShowSellingItems] = useState(false);

  return (
    showSellingItems ? <CompanySellingItems onPress={() => {setShowSellingItems(false)}}/> :
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerButtonContainer}>
          <TouchableOpacity 
            style={styles.orderButton}
          >
            <Text style={styles.orderButtonText}>Pedidos</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.serviceListButton}
            onPress={() => {setShowSellingItems(true)}}
          >
            <Text style={styles.serviceListButtonText}>Meus Serviços</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.roundedButtonContainer}>
          <RoundedButton 
            text="Encerrar Expediente" 
            onPress={props.onPressButton} 
            style={styles.button}
            fontSize={adjustFontSize(15)} 
            selected={true} 
            width={256}
            height={40}
          />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.ordersListContainer}>
          <FlatList 
            data={ordersData}
            keyExtractor={(item, index) => item + index}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <OrderCard 
                title={item.title}
                user={item.user}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

export default CompanyRunning;
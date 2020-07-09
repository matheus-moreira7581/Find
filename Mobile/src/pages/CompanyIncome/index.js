import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './styles';
import colors from '../../assets/var/colors';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import { useNavigation } from '@react-navigation/native';
import {useAuth} from '../../contexts/auth'

import api from '../../services/api';

import { MaterialIcons } from '@expo/vector-icons'; 
import RoundedButton from '../../components/RoundedButton';
import IncomeCard from '../../components/IncomeCard';

// This is a temporary data set for test.

const CompanyIncome = () => {
  const navigation = useNavigation();
  const {loggedUser} = useAuth()

  const [incomeData, setIncomeData] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchCompanyIncomeOrder = async () => {
    try {
      const user = loggedUser;
      const getIncome = async() => {
        const response = await api.get(`/income/${user.data.id}`);
        return response.data
      }
      const data = await getIncome();
      setIncomeData(data);
      let arr = Object.values(data);
      let total = 0;
      for(let i = 0; i < arr.length; i++) {
        total += arr[i].income;
      }
      setTotal(total);
      
    } catch (error) {
      console.log(error);
    }
    
  }
  const fetchCompanyIncomeRequest = async () => {
    try {
      const user = loggedUser;
      const getIncome = async() => {
        const response = await api.get(`/income/request/${user.data.id}`);
        return response.data
      }
      const data = await getIncome();
      setIncomeData(data);
      let arr = Object.values(data);
      let total = 0;
      for(let i = 0; i < arr.length; i++) {
        total += arr[i].income;
      }
      setTotal(total);
      
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(() => {
    if(loggedUser.data.type === 'product') fetchCompanyIncomeOrder();
    else fetchCompanyIncomeRequest();
  }, [])

  const navigateToClientRegistration = () => {
    navigation.navigate('CustomerRegistration');
  }

  const navigateToCompanyRegistrationType = () => {
    navigation.navigate('CompanyRegistrationType');
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => {navigation.goBack()}}
      >
          <MaterialIcons name="arrow-back" size={adjustHorizontalMeasure(20)} color={colors.secondary} style={styles.backIcon}/>
      </TouchableOpacity>
      <View style={styles.centeredContainer}>
          <Text style={styles.headerText}>Receita</Text>
      </View>
      </View>
      <View style={styles.contentContainer}>
       <View style={styles.filterContainer}>
          <Text style={styles.filterText}>30 dias</Text>
          <TouchableOpacity style={styles.filterListButton}>
            <MaterialIcons name="filter-list" size={adjustHorizontalMeasure(25)} color={colors.secondary} style={styles.filterListIcon}/>
          </TouchableOpacity>
       </View>
       <View style={styles.listContainer}>
          <FlatList 
            data={incomeData}
            keyExtractor={(item, index) => item + index}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <IncomeCard 
                date={
                loggedUser.data.type === 'product' ? 
                  item.order_date 
                : 
                  item.request_date
                }
                price={item.income}
              />
            )}
          />
       </View>
        <View style={styles.totalContainer}>
            <Text style={styles.totalLabelText}>Total:</Text>
            <Text style={styles.totalPriceText}>{"R$ " + total}</Text>
        </View>
      </View>
    </View>
  )
}

export default CompanyIncome;
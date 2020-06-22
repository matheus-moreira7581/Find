import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import RoundedButton from '../../components/RoundedButton';
import styles from './styles';

import { MaterialIcons } from '@expo/vector-icons'; 
import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import colors from '../../assets/var/colors';
import adjustFontSize from '../../utils/adjustFontSize';
import { useNavigation } from '@react-navigation/native';
import IncomeCard from '../../components/IncomeCard';


const incomeData = [
  {date: '01/10/2020',price: '73,00'},{date: '02/10/2020',price: '85,00'},
  {date: '03/10/2020',price: '62,00'},{date: '04/10/2020',price: '76,00'},
  {date: '05/10/2020',price: '67,00'},{date: '06/10/2020',price: '52,00'},
  {date: '07/10/2020',price: '80,00'},{date: '08/10/2020',price: '114,00'},
  {date: '09/10/2020',price: '43,00'},{date: '10/10/2020',price: '68,00'},
  {date: '11/10/2020',price: '55,00'},{date: '12/10/2020',price: '85,00'},
  {date: '13/10/2020',price: '62,00'},{date: '14/10/2020',price: '76,00'},
  {date: '15/10/2020',price: '67,00'},{date: '16/10/2020',price: '52,00'},
  {date: '17/10/2020',price: '80,00'},{date: '18/10/2020',price: '114,00'},
  {date: '19/10/2020',price: '43,00'},{date: '20/10/2020',price: '68,00'},
  {date: '21/10/2020',price: '73,00'},{date: '22/10/2020',price: '85,00'},
  {date: '23/10/2020',price: '62,00'},{date: '24/10/2020',price: '76,00'},
  {date: '25/10/2020',price: '67,00'},{date: '26/10/2020',price: '52,00'},
  {date: '27/10/2020',price: '80,00'},{date: '28/10/2020',price: '114,00'},
  {date: '29/10/2020',price: '43,00'},{date: '30/10/2020',price: '68,00'},
]

const CompanyIncome = () => {
  const navigation = useNavigation();

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
                date={item.date}
                price={item.price}
              />
            )}
          />
       </View>
      </View>
    </View>
  )
}

export default CompanyIncome;
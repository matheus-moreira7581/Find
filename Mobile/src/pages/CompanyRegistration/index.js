import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import TwoWayPhase from '../../components/TwoWayPhase';
import RoundedButton from '../../components/RoundedButton';

import colors from '../../assets/var/colors';
import styles from './styles';
import ThreeWayPhase from '../../components/ThreeWayPhase';

import api from '../../services/api';


const CompanyRegistration = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [pickerValue, setPickerValue] = useState(0);
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [categories, setCategories] = useState([]);

  const { user, registrationType } = route.params;

  const fetchCategories = async () => {
    const categories = await api.get('/register-company');
    setCategories(categories.data);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  const getCompanyName = (typed) => {
    setCompanyName(typed);
  }
  const getCompanyAddress = (typed) => {
    setCompanyAddress(typed);
  }

  const navigateToOpeningHours = () => {
    const company = {
      user: user,
      companyData: {
        area: pickerValue,
        companyName: companyName,
        companyAddress: companyAddress,
      }
    }
    navigation.navigate('OpeningHours', company);
  }

  const finishCompanyRegistration = async () => {
    const response = await api.post('/register-company', {
      name: companyName,
      email: user.email,
      cpf: user.cpf,
      cell: 25648745,
      password: user.password,
      address: companyAddress,
      id_categories: pickerValue,
      type: registrationType
    })
    navigation.navigate('Login');
  }

  let phase = <ThreeWayPhase phase={2}/>
  let button = <RoundedButton selected={true} text="Continuar" width={328}
                height={51} fontSize={adjustFontSize(16)} 
                onPress={() => {handleRegistration()}}/>

  if(registrationType === 'product') {
    phase = <TwoWayPhase phase={2} dafaultCircleStyle={styles.dafaultCircle} />
    button = <RoundedButton selected={true} text="Concluir" width={328}
              height={51} fontSize={adjustFontSize(16)} 
              onPress={() => {handleRegistration()}}/>
  }

  const handleRegistration = () => {
    if(pickerValue === '' || companyName === '' || companyAddress === '') {
      return Alert.alert('Error', 'Preencha todos os campos');
    }
    else if(pickerValue === 0) {
      return Alert.alert('Error', 'Seleciona uma área válida!')
    } else {
      if( registrationType === 'product' ) return finishCompanyRegistration();
      else return navigateToOpeningHours();
    }
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
            <Text style={styles.headerText}>Cadastre-se</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.dotsContainer}>
          {phase}
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>
            O seu produto está relacionado em que área?
          </Text>
          <Picker
            selectedValue={pickerValue}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setPickerValue(itemValue)}
            mode={"dropdown"}
            prompt="Selecione uma área"
          >
            <Picker.Item label="Selecione uma área" value={0}/>
            {
              categories.map((item, index) => {
                return <Picker.Item label={item.title} value={item.id} key={index}/>
              })
            }
          </Picker>
        </View>
        <View style={styles.nameCompanyContainer}>
          <Text style={styles.nameCompanyLabel}>Nome da Empresa</Text>
          <TextInput style={styles.nameCompanyInput} 
            placeholder="Digite o nome da sua empresa" 
            placeholderTextColor={colors.cinza}
            onChangeText={getCompanyName}
            value={companyName}
          />
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.addressLabel}>Endereço da Empresa</Text>
          <TextInput style={styles.addressInput} 
            placeholder="Digite o endereço da sua empresa" 
            placeholderTextColor={colors.cinza}
            onChangeText={getCompanyAddress}
            value={companyAddress}
          />
        </View>
        <View style={styles.buttonContainer}>
          {button}
        </View>
      </View>
    </View>
  )
}

export default CompanyRegistration;
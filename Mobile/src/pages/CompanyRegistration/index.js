import React, { useState } from 'react';
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


const CompanyRegistration = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [pickerValue, setPickerValue] = useState("Selecione uma área");
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');

  const { user, registrationType } = route.params;

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

  const finishCompanyRegistration = () => {
    navigation.navigate('Login');
  }

  let phase = <ThreeWayPhase phase={2}/>
  let button = <RoundedButton selected={true} text="Continuar" width={328}
                height={51} fontSize={adjustFontSize(16)} 
                onPress={() => {handleRegistration()}}/>

  if(registrationType === 'Product') {
    phase = <TwoWayPhase phase={2} dafaultCircleStyle={styles.dafaultCircle} />
    button = <RoundedButton selected={true} text="Concluir" width={328}
              height={51} fontSize={adjustFontSize(16)} 
              onPress={() => {handleRegistration()}}/>
  }

  const handleRegistration = () => {
    if(pickerValue === '' || companyName === '' || companyAddress === '') {
      return Alert.alert('Error', 'Preencha todos os campos');
    }
    else if(pickerValue === "Selecione uma área") {
      return Alert.alert('Error', 'Seleciona uma área válida!')
    } else {
      if( registrationType === 'Product' ) return finishCompanyRegistration();
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
            <Picker.Item label="Selecione uma área" value="Selecione uma área"/>
            <Picker.Item label="Restaurante" value="Restaurante"/>
            <Picker.Item label="Pizzaria" value="Pizzaria" />
            <Picker.Item label="Hambúrguer" value="Hambúrguer" />
            <Picker.Item label="Padaria" value="Padaria" />
            <Picker.Item label="Farmácia" value="Farmacia" />
            <Picker.Item label="Suplementos" value="Suplementos" />
            <Picker.Item label="Estética" value="Estetica" />
            <Picker.Item label="Moda e Acessórios" value="Moda e Acessorios" />
            <Picker.Item label="Papelaria" value="Papelaria" />
            <Picker.Item label="Livraria" value="Livraria" />
            <Picker.Item label="Material de Contrução" value="Material de Contrucao" />
            <Picker.Item label="Ferramenta de Contrução" value="Ferramenta de Contrucao" />
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
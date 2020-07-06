import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import TwoWayPhase from '../../components/TwoWayPhase';
import RoundedButton from '../../components/RoundedButton';

import colors from '../../assets/var/colors';
import styles from './styles';
import ThreeWayPhase from '../../components/ThreeWayPhase';


const CompanyPersonalData = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { registrationType } = route.params;

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const cpfPatter = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g;
  const birthdayPatter = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g;

  const getName = (typed) => {
    setName(typed);
  }
  const getCpf = (typed) => {
    typed = cpfMask(typed);
    setCpf(typed);
  }
  const getBirthday = (typed) => {
    typed = birthdayMask(typed);
    setBirthday(typed);
  }
  const getEmail = (typed) => {
    setEmail(typed);
  }
  const getPassword = (typed) => {
    setPassword(typed);
  }
  
  const navigateToCompanyRegistration = (type) => {
    const user = {
      name: name,
      cpf: cpf,
      birthday: birthday,
      email: email,
      password: password,
    }
    navigation.navigate('CompanyRegistration', {
      user: user,
      registrationType: type
    });
  }

  const cpfMask = (cpf) => {
    if(
        !(String(cpf).includes('.') || String(cpf).includes('-')) 
        && String(cpf).length === 11
      ) {
        cpf = String(cpf).replace(/\D/g,"");
        cpf = String(cpf).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4");
        
        return cpf;
      } else return cpf
  }

  const birthdayMask = (birthday) => {
    if(!String(birthday).includes('/') && String(birthday).length === 8) {
      birthday = String(birthday).replace(/\D/g,"");
      birthday = String(birthday).replace(/(\d{2})(\d{2})(\d{4})/g,"$1/$2/$3");
      
      return birthday; 
    } else return birthday
      

  }

  const handleRegister = () => {
    if(name === '' || cpf === '' || birthday === '' || email === '' || password === '') {
      return Alert.alert('Error', 'Preencha todos os campos!');
    } else if (cpfPatter.test(String(cpf)) === false) {
      return Alert.alert('Error', 'Cpf invalido! Digite o cpf com "." e "-" ');
    } else if (birthdayPatter.test(String(birthday)) === false) {
      return Alert.alert('Error', 'Data de nascimento invalida! Digite a data com "/"');
    } else if (!(String(email).includes('@') && String(email).includes('.'))) {
        return Alert.alert('Error', 'Digite um endereço de email válido!');
    }
    else return navigateToCompanyRegistration(registrationType)
  }

  let phase = <ThreeWayPhase phase={1} />
  let type = 'service'

  if(registrationType === 'product') {
    phase = <TwoWayPhase phase={1} />
    type = 'product'
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
        <View style={styles.nomeContainer}>
          <Text style={styles.nomeLabel}>Nome</Text>
          <TextInput style={styles.nomeInput} 
            placeholder="Digite seu nome" 
            placeholderTextColor={colors.cinza}
            onChangeText={getName}
            value={name}
          />
        </View>
        <View style={styles.cpfContainer}>
          <Text style={styles.cpfLabel}>CPF</Text>
          <TextInput style={styles.cpfInput} 
            placeholder="xxx.xxx.xxx-xx" 
            placeholderTextColor={colors.cinza}
            onChangeText={getCpf}
            value={cpf}
            maxLength={14}
          />
        </View>
        <View style={styles.dataNascContainer}>
          <Text style={styles.dataNascLabel}>Data de Nasc.</Text>
          <TextInput style={styles.dataNascInput} 
            placeholder="xx/xx/xxxx" 
            placeholderTextColor={colors.cinza}
            onChangeText={getBirthday}
            value={birthday}
            maxLength={10}
          />
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.emailLabel}>Email</Text>
          <TextInput style={styles.emailInput} 
            placeholder="Digite seu e-mail" 
            placeholderTextColor={colors.cinza}
            onChangeText={getEmail}
            value={email}
          />
        </View>
        <View style={styles.passwordContainer}>
          <Text style={styles.passwordLabel}>Crie uma senha</Text>
          <TextInput style={styles.passwordInput} 
            placeholder="Digite sua senha" 
            placeholderTextColor={colors.cinza}
            secureTextEntry={true}
            onChangeText={getPassword}
            value={password}
          />
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton
            selected={true}
            text="Continuar"
            width={328}
            height={51}
            fontSize={adjustFontSize(16)}
            onPress={() => {handleRegister()}}
          />
        </View>
      </View>
    </View>
  )
}

export default CompanyPersonalData;
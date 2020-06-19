import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import TwoWayPhase from '../../components/TwoWayPhase';
import RoundedButton from '../../components/RoundedButton';

import colors from '../../assets/var/colors';
import styles from './styles';


const CompanyPersonalData = () => {
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
          <TwoWayPhase phase={1} />
        </View>
        <View style={styles.nomeContainer}>
          <Text style={styles.nomeLabel}>Nome</Text>
          <TextInput style={styles.nomeInput} 
            placeholder="Digite seu nome" 
            placeholderTextColor={colors.cinza}
          />
        </View>
        <View style={styles.doubleInputContainer}>
          <View style={styles.cpfContainer}>
            <Text style={styles.cpfLabel}>CPF</Text>
            <TextInput style={styles.cpfInput} 
              placeholder="xxx.xxx.xxx-xx" 
              placeholderTextColor={colors.cinza}
            />
          </View>
          <View style={styles.dataNascContainer}>
            <Text style={styles.dataNascLabel}>Data de Nasc.</Text>
            <TextInput style={styles.dataNascInput} 
              placeholder="xx/xx/xxxx" 
              placeholderTextColor={colors.cinza}
            />
          </View>
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.emailLabel}>Email</Text>
          <TextInput style={styles.emailInput} 
            placeholder="Digite seu e-mail" 
            placeholderTextColor={colors.cinza}
          />
        </View>
        <View style={styles.passwordContainer}>
          <Text style={styles.passwordLabel}>Crie uma senha</Text>
          <TextInput style={styles.passwordInput} 
            placeholder="Digite sua senha" 
            placeholderTextColor={colors.cinza}
          />
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton
            selected={true}
            text="Continuar"
            width={328}
            height={51}
            fontSize={adjustFontSize(16)}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  )
}

export default CompanyPersonalData;
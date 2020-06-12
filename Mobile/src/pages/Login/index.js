import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import styles from './styles';
import RoundedButton from '../../components/RoundedButton';

// import { Container } from './styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../assets/images/FindLogoBlack.png')}
        />
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.fieldContainer}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput 
            placeholder="Digite seu e-mail" 
            placeholderTextColor={'#888888'}
            style={styles.TextInput}
            />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput 
            placeholder="Digite sua senha" 
            placeholderTextColor={'#888888'} 
            style={styles.TextInput}
            />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <RoundedButton 
            text="Entrar" 
            onPress={() => {}} 
            selected={true} 
            width={328}
            height={51}
        />
        <Text style={styles.text}>
          Nao tem uma conta? <Text style={styles.registerText}>Cadastre-se já!</Text>
        </Text>
      </View>
    </View>
  )
}

export default Login;
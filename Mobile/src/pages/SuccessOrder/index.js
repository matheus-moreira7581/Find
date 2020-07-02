import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import styles from './styles';
import RoundedButton from '../../components/RoundedButton';
import colors from '../../assets/var/colors';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const SuccessOrder = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.Title}>Concluído</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.successTextContainer}>
          <Text style={styles.successText}>
            Seu pedido foi realizado com {"\n"}
            <Text style={styles.success}>sucesso</Text>
            <Text style={styles.successText}>!</Text>
          </Text>
        </View>
        <View style={styles.smileContainer}>
          <Text style={styles.smileText}>:)</Text>
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton 
            text="Voltar para o início" 
            onPress={() => navigation.navigate('Home')} 
            selected={true} 
            width={256}
            height={48}
          />
        </View>
      </View>
    </View>
  )
}

export default SuccessOrder;
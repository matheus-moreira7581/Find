import React from 'react';
import { SafeAreaView, View, TouchableWithoutFeedback, TouchableOpacity, Text, TextInput, Keyboard } from 'react-native';

import RoundedButton from '../../components/RoundedButton';
import { MaterialIcons } from '@expo/vector-icons';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';

import colors from '../../assets/var/colors';

import styles from './styles';


const ServiceScheduling = () => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={adjustHorizontalMeasure(20)} color={colors.cinzaEscuro}/>
                </TouchableOpacity>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>Local do Profissional</Text>
                </View>
            </View>
            <TouchableWithoutFeedback style={styles.bodyContainer} onPress={()=>Keyboard.dismiss()}>
                <View style={styles.bodyContainer}>
                    <Text style={styles.inputTitle}>Quem irá até o local?</Text>
                    <TextInput style={styles.input} placeholder="Digite o nome completo" placeholderTextColor={colors.cinza}/>
                    <Text style={styles.text}>Agende um horário</Text>
                    <Text style={styles.text}>Hoje</Text>
                    <View style={styles.tempContainer}><Text>Componente vem aqui</Text></View>
                    <View style={styles.buttonContainer}>
                        <RoundedButton
                            text="Continuar"
                            width={adjustHorizontalMeasure(256)}
                            height={adjustVerticalMeasure(50)}
                            selected={true}
                        />
                    </View>
                </View>
                
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

export default ServiceScheduling;
import React from 'react';

import { SafeAreaView, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

import { SCREEN_WIDTH } from '../../utils/constants';
import { MaterialIcons } from '@expo/vector-icons'; 

import RoundedButton from '../../components/RoundedButton';

import colors from '../../assets/var/colors'; 

import styles from './styles';

const RedeemProduct = () => {
    return(
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={20/375 * SCREEN_WIDTH} color={colors.cinzaEscuro}/>
                </TouchableOpacity>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>Retirar no local</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.bodyText}>Quem irá retirar?</Text>
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Digite o nome completo"
                        placeholderTextColor={colors.cinza}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.bodyText}>Telefone/Celular</Text>
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="(00) 00000-0000"
                        placeholderTextColor={colors.cinza}
                    />
                </View>
                <View style={styles.requestContainer}>
                    <Image source={require('../../assets/images/CompanyLogos/pizzaria_1.png')} style={styles.companyLogo}/>
                    <View style={styles.requestInfoContainer}>
                        <Text style={styles.companyTitle}>Tasty Pizza</Text>
                        <View style={styles.request}>
                            <View style={styles.meanTimeContainer}>
                                <View style={styles.verticalLink}/>
                                <View>
                                    <View style={styles.meanTimeTitleContainer}>
                                        <View style={styles.horizontalLink}/>
                                        <Text style={styles.meanTimeTitle}>Tempo médio de conclusão</Text>
                                    </View>
                                    <View style={styles.hourglassContainer}>
                                <View style={styles.horizontalLink}/>
                                <MaterialIcons 
                                    name="hourglass-empty" 
                                    size={12/375 * SCREEN_WIDTH}
                                    color={colors.cinza}
                                />
                                <Text style={styles.conclusionTimeText}>50min - 1hr</Text>
                            </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <RoundedButton
                    text="Concluir"
                    selected={true}
                    width={256}
                    height={48}
                    style={styles.doneButton}
                />
            </View>
        </SafeAreaView>
    );
}

export default RedeemProduct;
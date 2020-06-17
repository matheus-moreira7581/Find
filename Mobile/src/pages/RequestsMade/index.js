import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { MaterialIcons } from '@expo/vector-icons'; 

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import styles from './styles';
import colors from '../../assets/var/colors';

import RoundedButton from '../../components/RoundedButton';

const RequestsMade = () => {
    const [requestList, setRequestList] = useState(null);
    //Future api call must fill list of requests
    //const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backArrowButton} onPress={() => {}}>
                    <MaterialIcons name="arrow-back" size={adjustHorizontalMeasure(20)} color={colors.cinzaEscuro}/>
                </TouchableOpacity>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>Pedidos</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                {
                    !!requestList 
                    ? 
                        <View/> //List component in the future
                    : 
                        <>
                            <Text style={styles.messageText}>
                                Você ainda não {"\n"}
                                possui nenhum {"\n"}
                                pedido.
                            </Text>
                            <Text style={styles.sadFaceText}>:(</Text>
                            <Image source={null} resizeMode="stretch"/>
                            <RoundedButton
                                selected={true}
                                text="Voltar para o início"
                                width={256}
                                height={55}
                                fontSize={adjustFontSize(16)}
                                onPress={() => {}}
                            />
                        </>
                }
            </View>
        </SafeAreaView>
    );
}

export default RequestsMade;
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { useCart } from '../../contexts/cart'
import { useCategory } from '../../contexts/categorySelection';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';

import styles from './styles';
import colors from '../../assets/var/colors';

import RoundedButton from '../../components/RoundedButton';

const DeliveryAddress = () => {
    const navigation = useNavigation();
    const {setAddressInfo} = useCart();
    const {selectedCategoryCardInfo} = useCategory();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [additional, setAdditional] = useState('');

    const getName = (typed) => setName(typed);
    const getPhone = (typed) => setPhone(typed);
    const getAddres = (typed) => setAddress(typed);
    const getAdditional = (typed) => setAdditional(typed);

    const handleAddressSetting = () => {
        setAddressInfo({
            street: address,
            neighborhood: "ponta da praia",
            ad_number: "55",
            additional: additional,
            landmark: "mercado" 
        });
        if(selectedCategoryCardInfo.type === 'product') return navigation.navigate('PaymentOptions');
        else if(selectedCategoryCardInfo.type === 'service') return navigation.navigate('ServiceScheduling');
    }

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={adjustHorizontalMeasure(20)}/>
                </TouchableOpacity>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>
                    { 
                        selectedCategoryCardInfo.type === 'product' ?  
                        "Entregar pra mim" : "Meu Endereço"
                    }
                    </Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.topInputContainer}>
                    <Text style={styles.bodyText}>Nome</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Digite seu nome completo"
                        placeholderTextColor={colors.cinza}
                        onChangeText={getName}
                        value={name}
                    />
                </View>
                <View style={styles.middleInputContainer}>
                    <Text style={styles.bodyText}>Telefone ou Celular</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="(00) 00000-0000"
                        placeholderTextColor={colors.cinza}
                        onChangeText={getPhone}
                        value={phone}
                    />
                </View>
                <View style={styles.middleInputContainer}>
                    <Text style={styles.bodyText}>Endereço</Text>
                    <TextInput style={styles.input} 
                        placeholder="Ex.: Rua Olha de Almeida Machado, 123"
                        placeholderTextColor={colors.cinza}
                        onChangeText={getAddres}
                        value={address}
                    />
                </View>
                <View style={styles.bottomInputContainer}>
                    <Text style={styles.bodyText}>Complemento (casa, apartamento, etc)</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Digite seu complemento"
                        placeholderTextColor={colors.cinza}
                        onChangeText={getAdditional}
                        value={additional}
                    />
                </View>
                <RoundedButton 
                    onPress={handleAddressSetting}
                    selected={true} 
                    text="Continuar" 
                    width={256} 
                    height={48} 
                    fontSize={16}
                />
            </View>
        </SafeAreaView>
    );
}

export default DeliveryAddress;
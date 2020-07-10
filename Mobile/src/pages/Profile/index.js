import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity, Image, SectionList, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useCart } from '../../contexts/cart';
import { useAuth } from '../../contexts/auth';

import api from '../../services/api';

import { MaterialIcons } from '@expo/vector-icons'; 

import styles from './styles';

import ProfileMenuListItem from '../../components/ProfileMenuListItem';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import colors from '../../assets/var/colors';

const Profile = () => {
  const { signOut, loggedUser, endOfficeHour } = useAuth();
  const { resetCart, orderInfo, requestInfo } = useCart();

  const menuListData = [
    {
      title: null,
      data: [
        {
          mainIconName: "notifications", 
          endIconName: "keyboard-arrow-right",
          endIconColor: colors.primary,
          text: "Notificações",
          textColor: colors.cinzaEscuro ,
          onPress: () => {},
        },
        {
          mainIconName: "chat", 
          endIconName: "keyboard-arrow-right",
          endIconColor: colors.primary,
          text: "Chat",
          textColor: colors.cinzaEscuro ,
          onPress: () => {},
        },
        {
          mainIconName: `${loggedUser.type === 'client' ? 'star' : 'credit-card'}`, 
          endIconName: "keyboard-arrow-right",
          endIconColor: colors.primary,
          text: `${loggedUser.type === 'client' ? 'Locais Favoritos' : 'Receitas'}`,
          textColor: colors.cinzaEscuro ,
          onPress: () => {},
        }
      ]
    },
    {
      title: "Configurações",
      data: [
        {
          mainIconName: null, 
          endIconName: "keyboard-arrow-right",
          endIconColor: colors.primary,
          text: "Alterar Senha",
          textColor: colors.cinzaEscuro ,
          onPress: () => {},
        },
      ]
    },
    {
      title: "Geral",
      data: [
        {
          mainIconName: null, 
          endIconName: "keyboard-arrow-right",
          endIconColor: colors.primary,
          text: "Politica de Privacidade",
          textColor: colors.cinzaEscuro ,
          onPress: () => {},
        },
        {
          mainIconName: null, 
          endIconName: "keyboard-arrow-right",
          endIconColor: colors.primary,
          text: "Termos de Uso",
          textColor: colors.cinzaEscuro ,
          onPress: () => {},
        },
        {
          mainIconName: null, 
          endIconName: "keyboard-arrow-right",
          endIconColor: colors.primary,
          text: "Desativar Conta",
          textColor: colors.vermelho,
          onPress: () => navigation.navigate('DeleteAccount'),
        }
      ]
    }
  ]

  const [customerName, setCustomerName] = useState('User');
  const [customerEmail, setCustomerEmail] = useState('e-mail');
  const [customerAvatarUrl, setCustomerAvatarUrl] = useState(null);
  const [companyName, setCompanyName] = useState('Empresa');

  
  const navigation = useNavigation();

  const loadScreenInfo = async () => {
    setCustomerName(loggedUser.type === 'client' ? loggedUser.data.name : loggedUser.data.company_name);
    setCustomerEmail(loggedUser.data.email);
    setCustomerAvatarUrl(loggedUser.data.img_url);
  };

  const handleLogout = async () => {
    if(loggedUser.type === 'client'){ 
      if(orderInfo.id_company === 0 && requestInfo.id_company === 0){
        Alert.alert(
          'Confirmar',
          'Deseja mesmo sair?',
          [
            { text: 'Sim', onPress: () => {
              resetCart();
              navigation.navigate('Home');
              signOut();
            }},
            { text: 'Não' }
          ]
        );
      }
      else{
        Alert.alert(
          'Confirmar',
          `Você possui um pedido pendente em ${companyName}. Deseja mesmo sair?`,
          [
            { text: 'Sim', onPress: () => {
              resetCart();
              navigation.navigate('Home');
              signOut();
            }},
            { text: 'Não' }
          ]
        );
      }
    }
    else{
      Alert.alert(
        'Confirmar',
        'Deseja mesmo sair?',
        [
          { text: 'Sim', onPress: async () => {
            await endOfficeHour();
            navigation.navigate('HomeCompany');
            signOut();
          }},
          { text: 'Não' }
        ]
      );
    }
  };
 

  const getCompanyName = async () => {
    try{
      if(orderInfo.id_company !== 0){
        const response = await api.get(`/edit-company/${orderInfo.id_company}`);
        setCompanyName(response.data[0].company_name); 
      }
      else{
        if(requestInfo.id_company !== 0){
          const response = await api.get(`/edit-company/${requestInfo.id_company}`);
          setCompanyName(response.data[0].company_name);
        }
        else{
          setCompanyName('Empresa');
        }
      }
    }
    catch(error){
      throw error;
    }
    
  }
  
  useEffect(() => {
    loadScreenInfo();
    getCompanyName();
  }, []);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Perfil</Text>
      </View>
      <View style={styles.bodyContainer}>          
        <SectionList
          style={styles.sectionList}
          ListHeaderComponent={() => 
            <View style={styles.listHeader}>
              <Image source={{uri: customerAvatarUrl}} style={styles.profilePicture}/>
              <Text style={styles.customerName}>{customerName}</Text>
              <Text style={styles.customerEmail}>{customerEmail}</Text>
              <TouchableOpacity style={styles.viewProfileButton} onPress={() => navigation.navigate('ProfileInfo')}>
                <Text style={styles.viewProfileText}>Visualizar Perfil</Text>
                <MaterialIcons name="keyboard-arrow-right" size={adjustHorizontalMeasure(16)} color={colors.primary}/>
              </TouchableOpacity>
            </View>
          }
          sections={menuListData}
          keyExtractor={(item, index) => String(index)}
          renderSectionHeader={({ section: { title } }) => 
          title === null || title === ''
            ? <></>
            : <Text style={styles.sectionTitle}>{title}</Text>
          }
          renderItem={({ item, index }) => 
            <ProfileMenuListItem 
              mainIconName={item.mainIconName} 
              endIconName={item.endIconName}
              endIconColor={item.endIconColor}
              text={item.text}
              textColor={item.textColor} 
              onPress={item.onPress}
            />
          }
          ListFooterComponent={
            <View>
            <ProfileMenuListItem 
              style={styles.logoutButton}
              mainIconName={null} 
              endIconName="exit-to-app"
              endIconColor={colors.vermelho}
              text="Sair"
              textColor={colors.vermelho} 
              onPress={handleLogout}
            />  
            </View>
          }
        />
        
      </View>
    </SafeAreaView>
  );
}

export default Profile;
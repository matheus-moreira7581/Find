import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity, Image, SectionList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useCart } from '../../contexts/cart';
import { useAuth } from '../../contexts/auth';

import { MaterialIcons } from '@expo/vector-icons'; 

import styles from './styles';

import ProfileMenuListItem from '../../components/ProfileMenuListItem';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import colors from '../../assets/var/colors';

import api from '../../services/api';

const CompanyProfile = () => {
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
          mainIconName: "star", 
          endIconName: "keyboard-arrow-right",
          endIconColor: colors.primary,
          text: "Locais favoritos",
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
          textColor: colors.vermelho ,
          onPress: () => {},
        }
      ]
    }
  ]

  const [customerName, setCustomerName] = useState('Lucas Batista de Menezes');
  const [customerEmail, setCustomerEmail] = useState('lucasemailbrabo194@teste.com');
  const [customerAvatarUrl, setCustomerAvatarUrl] = useState(null);
  

  const navigation = useNavigation();
  const { signOut } = useAuth();
  const { resetCart, orderInfo, requestInfo } = useCart();

  const handleLogout = () => {
    
  } 

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Perfil</Text>
      </View>
      <ScrollView style={styles.bodyContainer}>
        <View style={styles.bodyContentContainer}>
          <Image source={null} style={styles.profilePicture}/>
          <Text style={styles.customerName}>{customerName}</Text>
          <Text style={styles.customerEmail}>{customerEmail}</Text>
          <TouchableOpacity style={styles.viewProfileButton}>
            <Text style={styles.viewProfileText}>Visualizar Perfil</Text>
            <MaterialIcons name="keyboard-arrow-right" size={adjustHorizontalMeasure(16)} color={colors.primary}/>
          </TouchableOpacity>
          <SectionList
            style={styles.sectionList}
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
          />
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
      </ScrollView>
    </SafeAreaView>
  );
}

export default CompanyProfile;
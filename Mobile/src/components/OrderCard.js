import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, PixelRatio } from 'react-native';

import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';

import { MaterialIcons } from '@expo/vector-icons';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../utils/adjustMeasures';

import adjustFontSize from '../utils/adjustFontSize';

const OrderCard = (props) => {

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
          <View style={{...styles.statusContainer, backgroundColor: props.color}}>
            <Text style={styles.statusText}>{props.status}</Text>
          </View>
          {/* {
            props.status === 'Finalizado' ?
              <View style={{...styles.statusContainer, backgroundColor: props.color}}>
                <Text style={styles.statusText}>{props.status}</Text>
              </View>
            :
              null
          } */}
        </View>
        <View style={styles.orderUserContainer}>
          <MaterialIcons name="person-outline" size={adjustHorizontalMeasure(14)}/>
          <Text style={styles.userText}>{props.user}</Text>
        </View>
        <View style={styles.moreInfoContainer}>
          <Text style={styles.moreInfo}>Clique e veja todas as informações do pedido.</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: adjustVerticalMeasure(88),
    backgroundColor: colors.textInput,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
    paddingLeft: adjustHorizontalMeasure(11.5),
    marginBottom: adjustVerticalMeasure(8),
  },
  titleContainer: {
    marginTop: adjustVerticalMeasure(9),
    width: '100%',
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  title: {
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro,
  },
  statusContainer: {
    width: adjustHorizontalMeasure(120),
    backgroundColor: colors.vermelho,
    borderRadius: 8,
    marginLeft: adjustHorizontalMeasure(20),
    alignItems: 'center',
  },
  statusText: {
    fontFamily: fonts.montserrat,
    fontSize: adjustFontSize(13),
    color: colors.branco,
  },
  orderUserContainer: {
    flexDirection: 'row',
    width: '100%',
    height: adjustVerticalMeasure(14),
    marginTop: adjustVerticalMeasure(8),
  },
  userText: {
    fontFamily: fonts.montserrat,
    fontSize: adjustFontSize(10),
    color: colors.cinza,
    textAlignVertical: "bottom",
  },
  moreInfoContainer: {
    marginTop: adjustVerticalMeasure(8),
  },
  moreInfo: {
    fontFamily: fonts.montserrat,
    fontSize: adjustFontSize(13),
    color: colors.primary,
  }

});

export default OrderCard;
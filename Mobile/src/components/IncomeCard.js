import React from 'react';
import { View ,Text, TouchableOpacity, StyleSheet, PixelRatio } from 'react-native';

import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../utils/adjustMeasures';

import adjustFontSize from '../utils/adjustFontSize';

const IncomeCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.data}>{"Dia: " + props.date}</Text>
        <Text style={styles.price}>{"R$ " + props.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: adjustHorizontalMeasure(360),
    height: adjustVerticalMeasure(56),
    backgroundColor: colors.textInput,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    borderRadius: 5,
    marginBottom: adjustVerticalMeasure(4),
  },
  contentContainer: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  data: {
    marginLeft: adjustHorizontalMeasure(23),
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(15),
  },
  price: {
    marginRight: adjustHorizontalMeasure(23),
    fontFamily: fonts.montserrat,
    fontSize: adjustFontSize(15),
  }
});

export default IncomeCard;
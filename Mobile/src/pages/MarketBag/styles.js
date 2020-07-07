import { StyleSheet } from 'react-native';

import  Constants  from 'expo-constants';

import fonts from '../../assets/var/fonts';
import colors from '../../assets/var/colors';

import adjustFontSize from '../../utils/adjustFontSize';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';

const styles = StyleSheet.create({
  headerContainer:{
    justifyContent: 'flex-end',
    height: adjustVerticalMeasure(98.5),
    borderBottomWidth: 1,
    borderBottomColor: colors.bordarCinza,
  },
  centeredContainer:{
      position: 'absolute',
      bottom: adjustVerticalMeasure(13.5),
      right: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center'
  },
  categoryText:{
      fontFamily: fonts.montserratBold,
      fontSize: adjustFontSize(20),
      color: colors.cinzaEscuro,
  },
  backButton:{
    marginLeft: adjustHorizontalMeasure(24),
    marginBottom: adjustVerticalMeasure(18.5),
  },
  contentContainer: {
    height: adjustVerticalMeasure(673.5),
    width: '100%',
  },
  listContainer: {
    height: adjustVerticalMeasure(500),
    alignItems: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  editBottom: {
    width: '100%',
    height: adjustVerticalMeasure(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  editText: {
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(12),
    color: colors.cinzaEscuro,
  },
  deleteBottom: {
    width: '100%',
    height: adjustVerticalMeasure(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: adjustVerticalMeasure(8),
  },
  deleteText: {
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(12),
    color: colors.vermelho,
  },
  emptyView: {
    height: adjustVerticalMeasure(88),
  }
});

export default styles;
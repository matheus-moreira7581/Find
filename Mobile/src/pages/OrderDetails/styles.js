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
  userContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: adjustVerticalMeasure(16.5)
  },
  userName: {
    fontFamily: fonts.montserrat,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro,
  },
  orderNumber: {
    fontFamily: fonts.montserrat,
    fontSize: adjustFontSize(10),
    color: colors.cinzaEscuro,
  },
  listContainer: {
    width: '100%',
    alignItems: 'center',
    height: adjustVerticalMeasure(230),
    marginTop: adjustVerticalMeasure(20),
  },
  detailsContainer: {
    height: adjustVerticalMeasure(112),
    marginTop: adjustVerticalMeasure(12),
    width: '100%',
    flexDirection: 'row',
  },
  imageContainer: {
    justifyContent: 'center',
    marginLeft: adjustHorizontalMeasure(16),
  },
  image: {
    height: adjustVerticalMeasure(90),
  },
  details: {
    flexDirection: 'column',
    marginLeft: adjustHorizontalMeasure(8.5),
    justifyContent: 'space-around'
  },
  detailsText: {
    fontFamily: fonts.montserrat,
    fontSize: adjustFontSize(13),
    color: colors.cinza,
  },
  buttonsContainer: {
    marginTop: adjustVerticalMeasure(58),
    height: adjustVerticalMeasure(160),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonCenterText: {
    fontFamily: fonts.montserratSemiBold,
    fontSize: adjustFontSize(15),
    color: colors.cinza,
  }
});

export default styles;
import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import colors from '../../assets/var/colors'; 
import fonts from '../../assets/var/fonts'; 

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  headerContainer:{
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: colors.bordarCinza, 
    width: '100%',
    height: adjustVerticalMeasure(96),
},
centeredContainer:{
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: adjustVerticalMeasure(13.5),
    flexDirection: 'row',
    justifyContent: 'center', 
},
backButton:{
    marginLeft: adjustHorizontalMeasure(24),
    marginBottom: adjustVerticalMeasure(18.5),
},
headerText:{
  fontFamily: fonts.montserratBold,
  fontSize: adjustFontSize(20),
},
contentContainer: {
  alignItems: 'center',
},
filterContainer: {
  width: '100%',
  height: adjustVerticalMeasure(64),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},
filterText: {
  marginLeft: adjustHorizontalMeasure(24),
  fontFamily: fonts.montserratBold,
  fontSize: adjustFontSize(20),
  color: colors.cinzaEscuro
},
filterListButton: {
  marginRight: adjustHorizontalMeasure(23),
},
listContainer: {
  // height: adjustVerticalMeasure(603),
  height: adjustVerticalMeasure(545),
  width: '100%',
  alignItems: 'center',
},
totalContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: adjustHorizontalMeasure(32),
  alignItems: 'center',
  height: adjustVerticalMeasure(50),
  width: '100%',
  backgroundColor: colors.background,
},
totalLabelText: {
  fontFamily: fonts.montserratBold,
  fontSize: adjustFontSize(20),
  color: colors.cinzaEscuro,
},
totalPriceText: {
  fontFamily: fonts.montserrat,
  fontSize: adjustFontSize(20),
  color: colors.cinzaEscuro,
}

});

export default styles;
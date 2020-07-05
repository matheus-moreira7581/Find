import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import colors from '../../assets/var/colors'; 
import fonts from '../../assets/var/fonts'; 

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: Constants.statusBarHeight,
    backgroundColor: colors.background,
  },
  headerContainer:{
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: adjustVerticalMeasure(95.5),
    width: '100%',
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.bordarCinza,
  },
  headerText:{
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(20),
    marginBottom: adjustVerticalMeasure(11),
    color: colors.cinzaEscuro,
  },
  bodyContainer:{
    width: '100%',
    height: '100%',
  },  
  bodyContentContainer:{
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profilePicture:{
    justifyContent: 'center',
    alignItems: 'center',
    width: adjustHorizontalMeasure(120),
    height: adjustHorizontalMeasure(120),
    borderRadius: adjustHorizontalMeasure(60),
    backgroundColor: colors.bordarCinza,
    marginTop: adjustVerticalMeasure(24),
    marginBottom: adjustVerticalMeasure(9),
    padding: adjustHorizontalMeasure(3),
  },
  customerName:{
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro,
    marginBottom: adjustVerticalMeasure(2),

  },
  customerEmail:{
    fontFamily: fonts.montserratRegular,
    fontSize: adjustFontSize(11),
    color: colors.cinza,
    marginBottom: adjustVerticalMeasure(9),
  },
  viewProfileButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: adjustVerticalMeasure(21),
  },
  viewProfileText:{
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(12),
    color: colors.primary,
    marginBottom: 1,
  },
  sectionList:{
    width: '100%',
  },
  sectionTitle:{
    fontFamily: fonts.montserrat,
    fontSize: adjustFontSize(16),
    color: colors.primary,
    marginLeft: adjustHorizontalMeasure(32),
    marginTop: adjustVerticalMeasure(29),
    marginBottom: adjustHorizontalMeasure(8),
  },
  logoutButton: {
    marginTop: adjustVerticalMeasure(30),
    marginBottom: adjustVerticalMeasure(42),
  }
});

export default styles;
import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import colors from '../../assets/var/colors'; 
import fonts from '../../assets/var/fonts'; 

const styles = StyleSheet.create({
  headerContainer:{
    backgroundColor: colors.branco,
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: colors.bordarCinza, 
    width: '100%',
    height: adjustVerticalMeasure(98.5),
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
profissionalTypeContainer: {
  height: adjustVerticalMeasure(71.69),
  width: adjustHorizontalMeasure(327.5),
  marginTop: adjustVerticalMeasure(205.5),
},
clientTypeContainer: {
  height: adjustVerticalMeasure(71.69),
  width: adjustHorizontalMeasure(327.5),
  marginTop: adjustVerticalMeasure(64.1),
},
button: {
  borderRadius: 8,
}

});

export default styles;
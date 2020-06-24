import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import colors from '../../assets/var/colors'; 
import fonts from '../../assets/var/fonts'; 

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default styles;
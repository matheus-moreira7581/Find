import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';
import adjustFontSize from '../utils/adjustFontSize';
import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../utils/adjustMeasures';

import { MaterialIcons } from '@expo/vector-icons';
// import { Container } from './styles';

const CategoryCard = (props) => {

  return (
    <View style={{...styles.container, ...props.style}}>
      <View style={styles.imageContainer}>
        {
          props.Image != "" 
          ? <Image source={{uri: props.Image}} style={styles.image}/>
          : <MaterialIcons 
              name="insert-photo" 
              size={adjustHorizontalMeasure(25)} 
              color={colors.cinza} 
            />
        } 
      </View>
             
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.Title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: adjustVerticalMeasure(90),
    width: adjustHorizontalMeasure(120),
    backgroundColor: colors.branco,
    borderRadius: 5,
    elevation: 3,
    shadowRadius: 3,
    shadowOpacity: 0.7,
  },
  image: {
    height: adjustVerticalMeasure(68),
    width: adjustHorizontalMeasure(120),    
  },
  imageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    height: adjustVerticalMeasure(68),
    width: adjustHorizontalMeasure(120),
    overflow: 'hidden',
  },
  titleContainer: {
    height: adjustVerticalMeasure(22),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.montserratSemiBold,
    fontSize: adjustFontSize(12),
    color: colors.cinzaEscuro
  },
});

export default CategoryCard;
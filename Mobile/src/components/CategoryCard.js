import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';
import adjustFontSize from '../utils/adjustFontSize';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/constants';

// import { Container } from './styles';

const CategoryCard = (props) => {

  return (
    <View style={{...styles.container, ...props.style}}>
      <Image 
        source={props.Image}
        resizeMode="stretch"
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.Title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 90 / 812 * SCREEN_HEIGHT,
    width: 120 / 375 * SCREEN_WIDTH,
    backgroundColor: colors.branco,
    borderRadius: 5,
    elevation: 3,
    shadowRadius: 3,
    shadowOpacity: 0.7,
  },
  image: {
    height: 68 / 812 * SCREEN_HEIGHT,
    width: 120 / 375 * SCREEN_WIDTH,
  },
  titleContainer: {
    height: 22 / 812 * SCREEN_HEIGHT,
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
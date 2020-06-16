import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/constants';
import adjustFontSize from '../utils/adjustFontSize';

// import { Container } from './styles';

const ProductCard = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image 
            source={props.Image}
            style={styles.image}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{props.Title}</Text>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description} numberOfLines={3}>{props.Description}</Text>
          </View>
          <Text style={styles.price}>R$ {props.Price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10 / 812 * SCREEN_HEIGHT,
    width: 360 / 375 * SCREEN_WIDTH,
    height: 104 / 812 * SCREEN_HEIGHT,
    flexDirection: 'row',
    // padding: 5,
    paddingHorizontal: 5 / 375 * SCREEN_WIDTH,
    paddingVertical: 5 / 812 * SCREEN_HEIGHT,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.bordarCinza,
  },
  imageContainer: {
    width: 88 / 375 * SCREEN_WIDTH,
    height: 88 / 812 * SCREEN_HEIGHT,
    borderRadius: 8,
    backgroundColor: colors.background,
    marginRight: 7 / 375 * SCREEN_WIDTH,
  },
  image: {
    width: 88 / 375 * SCREEN_WIDTH,
    height: 88 / 812 * SCREEN_HEIGHT,
  },
  detailsContainer: {
    width: 270 / 375 * SCREEN_WIDTH,
    height: '100%',
  },
  title: {
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro,
  },
  descriptionContainer: {
    height: 43 / 812 * SCREEN_HEIGHT,
  },
  description: {
    fontFamily: fonts.montserrat,
    fontSize: adjustFontSize(10),
    color: colors.cinza,
  }
});

export default ProductCard;
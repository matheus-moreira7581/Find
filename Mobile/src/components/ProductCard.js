import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';

import adjustFontSize from '../utils/adjustFontSize';
import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../utils/adjustMeasures';

// import { Container } from './styles';

const ProductCard = (props) => {
  const [image, setImage] = useState(props.Image);

  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>         
          <Image source={props.Image} style={styles.image}/>
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
    marginTop: adjustVerticalMeasure(10),
    width: adjustHorizontalMeasure(360),
    height: adjustVerticalMeasure(104),
    flexDirection: 'row',
    // padding: 5,
    paddingHorizontal: adjustHorizontalMeasure(5),
    paddingVertical: adjustVerticalMeasure(5),
    borderWidth: 2,
    borderRadius: 8,
    borderColor: colors.bordarCinza,
  },
  imageContainer: {
    width: adjustHorizontalMeasure(88),
    height: adjustVerticalMeasure(88),
    borderRadius: 8,
    backgroundColor: colors.cinza,
    marginRight: adjustHorizontalMeasure(7),
  },
  image: {
    width: adjustHorizontalMeasure(88),
    height: adjustVerticalMeasure(88),
  },
  noImageText: {
    textAlign: 'center',
    fontFamily: fonts.montserrat,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro,
  },
  detailsContainer: {
    width: adjustHorizontalMeasure(270),
    height: '100%',
  },
  title: {
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro,
  },
  descriptionContainer: {
    height: adjustVerticalMeasure(43),
  },
  description: {
    fontFamily: fonts.montserrat,
    fontSize: adjustFontSize(10),
    color: colors.cinza,
  }
});

export default ProductCard;
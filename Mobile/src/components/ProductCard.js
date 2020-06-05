import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';

// import { Container } from './styles';

const ProductCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={props.Image}
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
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '95%',
    height: 104,
    flexDirection: 'row',
    padding: 5,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E5E5',
  },
  imageContainer: {
    width: 88,
    height: 88,
    borderRadius: 8,
    backgroundColor: colors.grey,
    marginRight: 7.5,
  },
  detailsContainer: {
    width: '75%',
    height: '100%',
  },
  title: {
    fontFamily: fonts.montserratBold,
    fontSize: 15,
    color: colors.secondary,
  },
  descriptionContainer: {
    height: 45,
  },
  description: {
    fontFamily: fonts.montserrat,
    fontSize: 10,
    color: colors.textGrey,
  }
});

export default ProductCard;
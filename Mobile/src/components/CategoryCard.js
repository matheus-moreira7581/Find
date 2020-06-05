import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';

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
    height: 77,
    width: 95,
    backgroundColor: colors.white,
    borderRadius: 5,
    elevation: 3,
    shadowRadius: 3,
    shadowOpacity: 0.7,
  },
  image: {
    height: 59,
    width: 95,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.montserratSemiBold,
    fontSize: 10,
    color: colors.secondary
  },
});

export default CategoryCard;
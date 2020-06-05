import React from 'react';
import { View,Text } from 'react-native';

// import { Container } from './styles';

const ProductCard = (props) => {
  return (
    <View>
      <View>

      </View>
      <View>
        <Text>{props.Title}</Text>
        <Text>{props.Description}</Text>
        <Text>{props.Price}</Text>
      </View>
    </View>
  );
}

export default ProductCard;
import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import RoundedButton from '../../components/RoundedButton';
import styles from './styles';
import colors from '../../assets/var/colors';

// import { Container } from './styles';

const ProductDetails = () => {
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(44);

  const addAmount = () => {
    let v = amount;
    let a = price
    v = v + 1;
    a = a + 44;
    if(amount < 99) {
      setAmount(v);
      setPrice(a);
    }

  }
  
  const subtractAmount = () => {
    let v = amount;
    let a = price
    v = v - 1;
    a = a - 44;
    if (amount > 1) {
      setAmount(v);
      setPrice(a);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
          <ImageBackground
            source={require('../../assets/images/ProductDetail/calabresaComQueijo.png')}
            style={styles.productImage}
          > 
            <ImageBackground 
              source={require('../../assets/images/ProductDetail/gradient.png')}
              style={styles.gradientImage}
            > 
              <View style={styles.arrowContainer}>
                <MaterialIcons name="arrow-back" color="white" size={24}/>
              </View>
              <Text style={styles.productTitle}>Calabresa c/ Queijo</Text>
            </ImageBackground>
          </ImageBackground>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>Molho, Calabresa, mozzarella e azeitona.</Text>
          <Text style={styles.priceText}>R$ 44,00</Text>
        </View>
        <View style={styles.chatContainer}>
          <Text style={styles.chatText}>Alguma dúvida sobre o produto?</Text>
          <RoundedButton 
            text="Chame no chat" 
            onPress={() => {}} 
            selected={true} 
            width={256}
            height={48}
          />
        </View>
        <View style={styles.companyContainer}>
          <View style={styles.companyImageContainer}>
            <Image 
              source={require('../../assets/images/ProductDetail/TastyPizzaLogo.png')}
            /> 
          </View>
          <View style={styles.companyTitleContainer}>
            <Text style={styles.companyTitle}>Tasty Pizza</Text>
            <View style={styles.rateContainer}>
              <MaterialIcons name="star" style={styles.rate}/>
              <MaterialIcons name="star" style={styles.rate}/>
              <MaterialIcons name="star" style={styles.rate}/>
              <MaterialIcons name="star" style={styles.rate}/>
              <MaterialIcons name="star-half" style={styles.rate}/>
            </View>
          </View>
        </View>
        <View style={styles.noteContainer}>
          <View style={styles.noteHeaderContainer}>
            <MaterialIcons name="speaker-notes" style={styles.noteIcon}/>
            <Text style={styles.noteHeaderText}>Alguma observação?</Text>
          </View>
          <View style={styles.noteContentContainer}>
            <TextInput 
              placeholder="Ex: Gostaria que não houvesse tal coisa no meu pedido."
              placeholderTextColor={colors.cinza}
              style={styles.noteTextInput}
              multiline={true}
            
            />
          </View>
        </View>
        <View style={styles.addContainer}>
          <View style={styles.amountContainer}>
            <TouchableOpacity 
              onPress={subtractAmount}
            >
              <MaterialIcons name="remove" style={styles.removeIcon}/>
            </TouchableOpacity>
            <Text style={styles.amountText}>{amount}</Text>
            <TouchableOpacity
              onPress={addAmount}
            >
              <MaterialIcons name="add" style={styles.addIcon}/>
            </TouchableOpacity>
          </View>
          <RoundedButton 
            text={`Adicionar R$ ${price},00`} 
            onPress={() => {}} 
            selected={true} 
            width={168}
            height={36}
            fontSize={12}
          />
        </View>
      </View>
    </View>
  )
}

export default ProductDetails;
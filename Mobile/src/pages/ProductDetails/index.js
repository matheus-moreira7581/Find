import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';
import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';

import api from '../../services/api';
// import { Container } from './styles';

const ProductDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { productId, companyId } = route.params;

  const loadScreenInfo = async () => {
    const response = await api.get(`/company?id_company=${companyId}`);
    const companyProducts = response.data[0].product;

    const product = companyProducts.find(product => product.id === productId);

    setScreenInfo(product);
  };

  const setScreenInfo = (product) => {
     setAmount(1);
     setPrice(parseFloat(product.price).toFixed(2));
     setAddPrice(parseFloat(product.price).toFixed(2));
     setProductTitle(product.name);
     setProductBackgroundImage(product.img_url);
     setProductDescription(product.description);
  }

  useEffect(() => {
    loadScreenInfo();
  }, []);

  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(1);
  const [addPrice, setAddPrice] = useState(1);
  const [productTitle, setProductTitle] = useState('Produto');
  const [productDescription, setProductDescription] = useState('Descrição do produto...');
  const [productBackgroundImage, setProductBackgroundImage] = useState('');

  const addAmount = () => {
    let a = amount;
    
    a++;
    
    if(amount < 99) {
      setAmount(a);
      setAddPrice(a * price);
    }
  }
  
  const subtractAmount = () => {
    let a = amount;
    
    a--;
    
    if (amount > 1) {
      setAmount(a);
      setAddPrice(a * price);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
          <ImageBackground
            source={
              productBackgroundImage == ''
                ? require('../../assets/images/ProductDetail/calabresaComQueijo.png')
                : productBackgroundImage
            }
            style={styles.productImage}
          > 
            <ImageBackground 
              source={require('../../assets/images/ProductDetail/gradient.png')}
              style={styles.gradientImage}
            > 
              <View style={styles.arrowContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <MaterialIcons name="arrow-back" color="white" size={24}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.productTitle}>{productTitle}</Text>
            </ImageBackground>
          </ImageBackground>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{productDescription}</Text>
          <Text style={styles.priceText}>R$ {price}</Text>
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
            text={`Adicionar R$ ${addPrice}`} 
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
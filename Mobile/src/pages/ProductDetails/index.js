import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';
import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';

import api from '../../services/api';
import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import {useCart} from '../../contexts/cart'

const ProductDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { productId, companyId } = route.params;
  const {setOrderInfo, addProductToCart, orderInfo} = useCart();

  const loadScreenInfo = async () => {
    const response = await api.get(`/company?id_company=${companyId}`);
    
    const { products: companyProducts, title, img_url } = response.data[0];

    const product = companyProducts.find(product => product.id === productId);

    setScreenInfo(product, img_url, title);
  };

  const setScreenInfo = (product, companyLogo, companyName) => {
     setAmount(1);
     setPrice(parseFloat(product.price).toFixed(2));
     setAddPrice(parseFloat(product.price).toFixed(2));
     setProductTitle(product.name);
     setProductBackgroundImage(product.img_url);
     setProductDescription(product.description);
     setCompanyLogoUrl(companyLogo);
     setCompanyName(companyName);
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
  const [companyLogoUrl, setCompanyLogoUrl] = useState('my-photo');
  const [companyName, setCompanyName] = useState('Empresa');
  const [details, setDetails] = useState('');
  const [limitTime, setLimitTime] = useState('X hrs - X hrs')

  const getDetails = (typed) => setDetails(typed);

  const addAmount = () => {
    let a = amount;
    
    a++;
    
    if(amount < 99) {
      setAmount(a);
      setAddPrice((a * price).toFixed(2));
    }
  }
  
  const subtractAmount = () => {
    let a = amount;
    
    a--;
    
    if (amount > 1) {
      setAmount(a);
      setAddPrice((a * price).toFixed(2));
    }
  }

  const handleAddProductToMarketBag = () => {
    setOrderInfo({
      id_company: companyId,
      id_client: orderInfo.id_client,
      payment: orderInfo.payment,
      receivement: orderInfo.receivement
    });
    const cartItem = {
      "id_products": productId,
      "title": productTitle,
      "image": productBackgroundImage,
      "amount": amount,
      "details": details,
      "price": price,
      "description": productDescription
    }
    addProductToCart(cartItem, companyId);

    navigation.reset({
      routes: [
        {name: 'Home'},
        {name: 'Companies'},
        {name: 'CompanyProducts', params: {companyId: companyId}}
      ]
    })  
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ImageBackground
          source={{uri: productBackgroundImage}}
          style={styles.productImage}
          resizeMode="cover"
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
            {
              companyLogoUrl !== '' && companyLogoUrl !== 'my-photo'
              ? <Image source={companyLogoUrl}/> 
              : <View style={styles.companyLogoPlaceholder}>
                  <MaterialIcons 
                    name="broken-image" 
                    size={adjustHorizontalMeasure(15)} 
                    color={colors.cinza} 
                  />
                </View>
            }
          </View>
          <View style={styles.companyTitleContainer}>
            <Text style={styles.companyTitle}>{companyName}</Text>
            <View style={styles.rateContainer}>
              <MaterialIcons name="star" style={styles.rate}/>
              <MaterialIcons name="star" style={styles.rate}/>
              <MaterialIcons name="star" style={styles.rate}/>
              <MaterialIcons name="star" style={styles.rate}/>
              <MaterialIcons name="star-half" style={styles.rate}/>
            </View>
          </View>
        </View>
        <View style={styles.companyBottomBorder}></View>
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
              onChangeText={getDetails}
              value={details}
            />
          </View>
        </View>
        <View style={styles.noteBottomBorder}></View>
        <View style={styles.addContainer}>
          <View style={styles.amountContainer}>
            <TouchableOpacity 
              onPress={subtractAmount}
              style={styles.removeAmount}
            >
              <MaterialIcons name="remove" style={styles.removeIcon}/>
            </TouchableOpacity>
            <Text style={styles.amountText}>{amount}</Text>
            <TouchableOpacity
              onPress={addAmount}
              style={styles.addAmount}
            >
              <MaterialIcons name="add" style={styles.addIcon}/>
            </TouchableOpacity>
          </View>
          <RoundedButton 
            text={`Adicionar R$ ${addPrice}`} 
            onPress={() => handleAddProductToMarketBag()} 
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
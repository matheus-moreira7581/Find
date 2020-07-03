import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Alert, TouchableOpacity } from 'react-native';

import styles from '../CompanyProducts/styles';

import { MaterialIcons } from '@expo/vector-icons';
import ProductCard from '../../components/ProductCard';

import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';
import adjustFontSize from '../../utils/adjustFontSize';
import RoundedButton from '../../components/RoundedButton';
import colors from '../../assets/var/colors';
import {useCart} from '../../contexts/cart'

const CompanyProducts = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {companyId} = route.params;
  const {total, cartItems} = useCart();

  const [product, setProduct] = useState({});
  const [company, setCompany] = useState({});
  const [showMarketBag, setShowMarketBag] = useState(false);
  const [itemsCount, setItemsCount] = useState(0);

  const fetchCompanyProducts = async () => {
    const getProdutct = async () => {
      const res = await api.get(`/company/?id_company=${companyId}`);
      return res.data
    }
    const res = await getProdutct();

    setCompany(res[0]);
    setProduct(res[0].products);
    
  }

  const handleShowMarketBag = () => {
    if(cartItems.length > 0) {
      setShowMarketBag(!showMarketBag);
      setItemsCount(cartItems.length);
    }
  }

  useEffect(()=> {
    fetchCompanyProducts();
    handleShowMarketBag();
  }, [])

  const navigateToProductDetails = (productId, companyId) => {
    navigation.navigate('ProductDetails', {
      productId: productId,
      companyId: companyId
    });
  }

  const navigatoToMarketBag = () => {
    navigation.navigate('MarketBag');
  }

  const bagFootter = 
  <View style={styles.marketBagContainer}>
    <View style={styles.iconContainer}>
      <MaterialIcons name="local-mall" color={colors.primary} size={adjustFontSize(26)}/>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{itemsCount}</Text>
      </View>
    </View>
    <RoundedButton 
        text={`Continuar R$ ${total}`} 
        onPress={() => navigatoToMarketBag()} 
        selected={true} 
        width={168}
        height={32}
        fontSize={12}
      />
  </View>

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
            <View style={styles.arrowBack}>
              <TouchableOpacity onPress={() => navigation.navigate('Companies')}>
                <MaterialIcons name="arrow-back" color="black" size={24}/>
              </TouchableOpacity>
            </View>
          <View style={styles.ImageCompanyContainer}>
            <Image 
              source={{uri: company.img_url}}
              style={styles.ImageCompany}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.companyName}>{company.title}</Text>
          <View style={styles.rateContainer}>
            <MaterialIcons name="star" style={styles.rate}/>
            <MaterialIcons name="star" style={styles.rate}/>
            <MaterialIcons name="star" style={styles.rate}/>
            <MaterialIcons name="star" style={styles.rate}/>
            <MaterialIcons name="star-half" style={styles.rate}/>
          </View>
          <Text style={styles.companyStatus}>Aberto</Text>
          <Text style={styles.companyAddress}>{company.address}</Text>
        </View>
      </View>
      <View style={styles.productsContainer}>
        <FlatList 
          data={product}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <ProductCard 
                Image={item.img_url}
                Title={item.name}
                Description={item.description}
                Price={item.price}
                onPress={() => navigateToProductDetails(item.id, companyId)}
              />
            </View>
          )}
        />
      </View>
      {showMarketBag ? bagFootter : <View></View>}

    </View>
  )
}

export default CompanyProducts;
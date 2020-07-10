import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Alert, TouchableOpacity } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { useCart } from '../../contexts/cart';
import { useCategory } from '../../contexts/categorySelection';

import { MaterialIcons } from '@expo/vector-icons';

import adjustFontSize from '../../utils/adjustFontSize';

import ProductCard from '../../components/ProductCard';
import RoundedButton from '../../components/RoundedButton';

import styles from '../CompanyProducts/styles';
import colors from '../../assets/var/colors';

import api from '../../services/api';

const CompanyProducts = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {companyId, companyStatus} = route.params;
  const {total, cartItems} = useCart();
  const { selectedCategoryCardInfo } = useCategory();

  const [items, setItems] = useState([]);
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
    setItems(res[0].products);
    
  }

  const fetchCompanyServices = async () => {
    const getService = async () => {
      const res = await api.get(`/company-service?id_company=${companyId}`);
      return res.data
    }
    const res = await getService();

    setCompany(res[0]);
    setItems(res[0].services);

  }

  const handleShowMarketBag = () => {
    if(cartItems.length > 0) {
      setShowMarketBag(!showMarketBag);
      setItemsCount(cartItems.length);
    }
  }

  useEffect(()=> {
    if(selectedCategoryCardInfo.type === 'product') {
      fetchCompanyProducts();
    }
    else if(selectedCategoryCardInfo.type === 'service') {
      fetchCompanyServices();
    }
    handleShowMarketBag();
  }, [])

  useEffect(()=> {
   setItemsCount(cartItems.length);
  }, [cartItems])

  const navigateToProductDetails = (id, companyId) => {
    navigation.navigate('ProductDetails', { 
      Id: id,
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
          <Text style={companyStatus? styles.companyStatusOpen : styles.companyStatusClosed}>{companyStatus ? 'Aberto' : 'Fechado'}</Text>
          <Text style={styles.companyAddress}>{company.address}</Text>
        </View>
      </View>
      <View style={styles.productsContainer}>
        <FlatList 
          data={items}
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
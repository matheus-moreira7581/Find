import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    height: '100%',
    width: '100%',
  },
  headerContainer: {
    marginTop: Constants.statusBarHeight,
    width: '100%',
    height: 203,
    backgroundColor: colors.grey,
    elevation: 4,
  },
  imageContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '50%',
    paddingTop: 29, 
    marginBottom: 3,
  },
  arrowBack: {
    width: '40%',
    height: '100%',
    paddingLeft: 24,
    justifyContent: 'center',
  },
  ImageCompany: {
    justifyContent: 'center',
    width: '60%',
    height: '100%',
  },
  textContainer: {
    height: '50%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  companyName: {
    fontFamily: fonts.montserratBold,
    fontSize: 15,
    color: colors.secondary,
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 11,
  },
  rate: {
    paddingHorizontal: 4,
    color: colors.ratingYellow,
    fontSize: 13,
  },
  companyStatus: {
    fontFamily: fonts.montserratSemiBold,
    fontSize: 10,
    color: colors.secondary,
    borderBottomWidth: 2,
    borderBottomColor: colors.statusGreen,
    marginBottom: 11,
  },
  companyAddress: {
    fontFamily: fonts.montserratSemiBold,
    fontSize: 10,
    color: colors.secondary,
  },
  productsContainer: {
    width: '100%',
    height: 570,
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});
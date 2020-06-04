import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    height: '100%',
    width: '100%',
  },
  headerContainer: {
    backgroundColor: colors.grey,
    paddingBottom: 10,
    elevation: 4,
  },
  welcomeContainer: {
    marginTop: Constants.statusBarHeight + 40,
    paddingLeft: 23,
    marginBottom: 25,
  }, 
  welcomeText: {
    color: colors.secondary,
    fontFamily: fonts.montserrat,
    fontSize: 20,
  },
  typeContainer: {
    flexDirection: 'row',
    paddingLeft: 23,
  },
  typeText: {
    paddingRight: 20,
    fontFamily: fonts.montserratSemiBold,
    fontSize: 15,
    color: colors.primary,
  },
  // listContainer: {
  //   paddingLeft: 23,
  //   backgroundColor: colors.grey,
  // },
  // listTitle: {
  //   color: colors.secondary,
  //   fontFamily: fonts.montserratBold,
  //   fontSize: 19,
  //   marginBottom: 5,
  //   marginTop: 23,
  // },
  // listItem: {
  //   height: 90,
  //   marginRight: 14,
  //   justifyContent: 'center',
  // }
});
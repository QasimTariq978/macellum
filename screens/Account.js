import * as React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {Color, FontFamily, FontSize, Border, Padding} from '../GlobalStyles';
import auth from '@react-native-firebase/auth';

const Account = ({navigation}) => {
  const userEmail = auth().currentUser.email;

  return (
    <View style={[styles.account, styles.accountBg]}>
      <View style={styles.statusBar}>
        <View style={[styles.battery, styles.parentFlexBox]}>
          <View style={styles.capacity} />
          <Image
            style={styles.capIcon}
            resizeMode="cover"
            source={require('../assets/cap.png')}
          />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require('../assets/wifi.png')}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require('../assets/cellular-connection.png')}
        />
        <View style={[styles.timeStyle, styles.timeStyleFlexBox]}>
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={styles.accountChild} />
      <View style={[styles.grocery1Parent, styles.parentLayout]}>
        <Text style={[styles.grocery1, styles.grocery1Typo]}>Grocery1</Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout3]}
          resizeMode="cover"
          source={require('../assets/vector7.png')}
        />
        <Text style={[styles.grocerymacellumcom, styles.grocery1Typo]}>
          {userEmail}{' '}
        </Text>
      </View>
      <View style={[styles.accountItem, styles.accountChildLayout1]} />
      <View style={[styles.accountInner, styles.accountChildLayout1]} />
      <View style={[styles.lineView, styles.accountChildLayout1]} />
      <View style={[styles.accountChild1, styles.accountChildLayout1]} />
      <View style={[styles.accountChild2, styles.accountChildLayout1]} />
      <View style={[styles.accountChild3, styles.accountChildLayout1]} />
      <View style={[styles.accountChild4, styles.accountChildLayout1]} />
      <View style={[styles.accountChild5, styles.accountChildLayout]} />
      <View style={[styles.accountChild6, styles.accountChildLayout]} />
      <View style={[styles.orders, styles.ordersLayout]}>
        <Text style={[styles.orders1, styles.help1Typo]}>Orders</Text>
        <Image
          style={[styles.ordersIcon, styles.iconPosition1]}
          resizeMode="cover"
          source={require('../assets/orders-icon.png')}
        />
        <Image
          style={[styles.backArrowIcon, styles.backIconLayout]}
          resizeMode="cover"
          source={require('../assets/back-arrow.png')}
        />
      </View>
      <View style={[styles.myDetails, styles.helpPosition]}>
        <Text style={[styles.myDetails1, styles.myDetails1Position]}>
          My Details
        </Text>
        <Image
          style={[styles.myDetailsIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require('../assets/my-details-icon.png')}
        />
        <Image
          style={[styles.backArrowIcon1, styles.backIconPosition]}
          resizeMode="cover"
          source={require('../assets/back-arrow1.png')}
        />
      </View>
      <View style={[styles.deliveryAddress, styles.ordersLayout]}>
        <Text style={[styles.deliveryAddress1, styles.help1Typo]}>
          Delivery Address
        </Text>
        <Image
          style={[styles.deliceryAddressIcon, styles.iconLayout3]}
          resizeMode="cover"
          source={require('../assets/delicery-address.png')}
        />
        <Image
          style={[styles.backArrowIcon2, styles.backIconLayout]}
          resizeMode="cover"
          source={require('../assets/back-arrow2.png')}
        />
      </View>
      <View style={[styles.paymentMethods, styles.helpPosition]}>
        <Text style={styles.myDetails1Position}>Payment Methods</Text>
        <Image
          style={[styles.vectorIcon1, styles.iconLayout1]}
          resizeMode="cover"
          source={require('../assets/vector-icon.png')}
        />
        <Image
          style={[styles.backArrowIcon3, styles.backIconPosition]}
          resizeMode="cover"
          source={require('../assets/back-arrow3.png')}
        />
      </View>
      <View style={styles.promoCord}>
        <Text style={[styles.promoCord1, styles.help1Typo]}>Promo Cord</Text>
        <Image
          style={[styles.promoCordIcon, styles.iconLayout3]}
          resizeMode="cover"
          source={require('../assets/promo-cord-icon.png')}
        />
        <Image
          style={[styles.backArrowIcon4, styles.backIconLayout]}
          resizeMode="cover"
          source={require('../assets/back-arrow4.png')}
        />
      </View>
      <View style={[styles.notifecations, styles.ordersLayout]}>
        <Text
          style={[styles.orders1, styles.help1Typo]}>{`Notifications `}</Text>
        <Image
          style={[styles.bellIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require('../assets/bell-icon.png')}
        />
        <Image
          style={[styles.backArrowIcon5, styles.backIconLayout]}
          resizeMode="cover"
          source={require('../assets/back-arrow.png')}
        />
      </View>
      <View style={[styles.help, styles.helpPosition]}>
        <Text style={[styles.help1, styles.help1Typo]}>Help</Text>
        <Image
          style={[styles.helpIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/help-icon.png')}
        />
        <Image
          style={[styles.backArrowIcon6, styles.backIconPosition]}
          resizeMode="cover"
          source={require('../assets/back-arrow.png')}
        />
      </View>
      <View style={[styles.about, styles.helpPosition]}>
        <Text style={styles.myDetails1Position}>{`About `}</Text>
        <Image
          style={[styles.aboutIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require('../assets/about-icon.png')}
        />
        <Image
          style={[styles.backArrowIcon3, styles.backIconPosition]}
          resizeMode="cover"
          source={require('../assets/back-arrow.png')}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'))
            .then(navigation.navigate('LogIn'));
        }}>
        <View style={[styles.google, styles.googleFlexBox]}>
          <Text style={[styles.logOut, styles.help1Typo]}>Log Out</Text>
        </View>
      </TouchableOpacity>
      <View style={[styles.bottomBar, styles.accountBg]}>
        <View style={[styles.vectorParent, styles.timeStyleFlexBox]}>
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require('../assets/vector8.png')}
          />
          <Text style={[styles.cart, styles.cartTypo]}>Cart</Text>
        </View>
        <View style={[styles.store1Parent, styles.parentLayout]}>
          <Image
            style={styles.store1Icon}
            resizeMode="cover"
            source={require('../assets/store-11.png')}
          />
          <Text style={[styles.shop, styles.shopTypo]}>Shop</Text>
        </View>
        <View style={[styles.frameParent, styles.googleFlexBox]}>
          <View style={styles.vectorGroup}>
            <Image
              style={[styles.vectorIcon3, styles.iconPosition]}
              resizeMode="cover"
              source={require('../assets/vector9.png')}
            />
            <View style={[styles.frameChild, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameInner, styles.frameLayout]} />
          </View>
          <Text style={[styles.cart, styles.cartTypo]}>Explore</Text>
        </View>
        <View style={[styles.bookmark1Parent, styles.parentLayout]}>
          <Image
            style={styles.store1Icon}
            resizeMode="cover"
            source={require('../assets/bookmark-11.png')}
          />
          <Text style={[styles.favourite, styles.cartTypo]}>Favourite</Text>
        </View>
        <View style={[styles.user1Parent, styles.parentLayout]}>
          <Image
            style={styles.store1Icon}
            resizeMode="cover"
            source={require('../assets/user-11.png')}
          />
          <Text style={[styles.account1, styles.shopTypo]}>Account</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Image
          style={[styles.groupIcon, styles.iconLayout3]}
          resizeMode="cover"
          source={require('../assets/group-6892.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  accountBg: {
    backgroundColor: Color.colorWhite,
    overflow: 'hidden',
    width: '100%',
  },
  parentFlexBox: {
    alignItems: 'center',
    top: 17,
  },
  timeStyleFlexBox: {
    justifyContent: 'flex-end',
    position: 'absolute',
  },
  timeFlexBox: {
    textAlign: 'center',
    lineHeight: 18,
  },
  parentLayout: {
    height: 42,
    position: 'absolute',
  },
  grocery1Typo: {
    textAlign: 'left',
    fontFamily: FontFamily.montserratRegular,
    left: 0,
    justifyContent: 'space-between',
    position: 'absolute',
  },
  iconLayout3: {
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  accountChildLayout1: {
    height: 1,
    width: 415,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    left: -1,
    borderStyle: 'solid',
    position: 'absolute',
  },
  accountChildLayout: {
    width: 366,
    left: 24,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    position: 'absolute',
  },
  ordersLayout: {
    width: 362,
    left: 27,
    height: 22,
    position: 'absolute',
  },
  help1Typo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.montserratRegular,
  },
  iconPosition1: {
    right: '95.03%',
    width: '4.97%',
  },
  backIconLayout: {
    width: 8,
    height: 14,
    position: 'absolute',
    overflow: 'hidden',
  },
  helpPosition: {
    width: 363,
    left: 26,
    position: 'absolute',
  },
  myDetails1Position: {
    left: 40,
    fontSize: FontSize.size_lg,
    top: 0,
    textAlign: 'left',
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    position: 'absolute',
  },
  iconLayout1: {
    right: '94.49%',
    width: '5.51%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  backIconPosition: {
    left: 355,
    width: 8,
    position: 'absolute',
    overflow: 'hidden',
  },
  iconPosition: {
    bottom: '0%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  iconLayout: {
    height: '90.5%',
    left: '0%',
  },
  googleFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  cartTypo: {
    fontSize: FontSize.size_xs,
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    textAlign: 'center',
  },
  shopTypo: {
    marginTop: 3,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratRegular,
    textAlign: 'center',
  },
  frameLayout: {
    backgroundColor: Color.darkDeep,
    borderRadius: Border.br_smi,
    height: '13.19%',
    left: '0%',
    position: 'absolute',
  },
  capacity: {
    borderRadius: 1,
    backgroundColor: Color.colorBlack,
    width: 18,
    height: 7,
  },
  capIcon: {
    width: 1,
    height: 4,
    opacity: 0.4,
    marginLeft: 3,
  },
  battery: {
    right: 17,
    borderRadius: 3,
    borderColor: 'rgba(0, 0, 0, 0.35)',
    borderWidth: 1,
    flexDirection: 'row',
    paddingRight: 4,
    paddingBottom: Padding.p_11xs,
    height: 11,
    width: 22,
    borderStyle: 'solid',
    alignItems: 'center',
    position: 'absolute',
  },
  wifiIcon: {
    width: 17,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 19,
    height: 11,
  },
  time: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    fontWeight: '500',
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorBlack,
    width: 60,
  },
  timeStyle: {
    height: '47.73%',
    width: '14.4%',
    top: '20.45%',
    right: '80%',
    bottom: '31.82%',
    left: '5.6%',
    alignItems: 'flex-end',
  },
  statusBar: {
    marginTop: -443.2,
    top: '50%',
    right: '0.1%',
    left: '-0.1%',
    height: 44,
    position: 'absolute',
    width: '100%',
  },
  accountChild: {
    top: 70,
    borderRadius: 27,
    backgroundColor: '#9f3131',
    width: 63,
    height: 64,
    left: 25,
    position: 'absolute',
  },
  grocery1: {
    top: 1,
    fontSize: FontSize.size_xl,
    color: Color.darkDeep,
  },
  vectorIcon: {
    height: '35.71%',
    width: '7.58%',
    right: '26.67%',
    bottom: '64.29%',
    left: '65.76%',
    top: '0%',
  },
  grocerymacellumcom: {
    top: 24,
    fontSize: FontSize.size_base,
    color: Color.colorGray_200,
  },
  grocery1Parent: {
    top: 81,
    left: 109,
    width: 198,
  },
  accountItem: {
    top: 164,
  },
  accountInner: {
    top: 226,
  },
  lineView: {
    top: 412,
  },
  accountChild1: {
    top: 474,
  },
  accountChild2: {
    top: 536,
  },
  accountChild3: {
    top: 598,
  },
  accountChild4: {
    top: 660,
  },
  accountChild5: {
    top: 288,
  },
  accountChild6: {
    top: 350,
  },
  orders1: {
    left: 39,
    top: 0,
    fontSize: FontSize.size_lg,
    textAlign: 'left',
    color: Color.darkDeep,
    position: 'absolute',
  },
  ordersIcon: {
    bottom: '9.09%',
    left: '0%',
    height: '90.91%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
    top: '0%',
  },
  backArrowIcon: {
    height: 14,
    left: 354,
    width: 8,
    top: 3,
  },
  orders: {
    top: 184,
    height: 22,
  },
  myDetails1: {
    width: 119,
    height: 21,
  },
  myDetailsIcon: {
    height: '71.43%',
    top: '20.95%',
    bottom: '7.62%',
    left: '0%',
  },
  backArrowIcon1: {
    height: 13,
    top: 4,
  },
  myDetails: {
    top: 253,
    height: 21,
  },
  deliveryAddress1: {
    left: 38,
    top: 0,
    fontSize: FontSize.size_lg,
    textAlign: 'left',
    color: Color.darkDeep,
    position: 'absolute',
  },
  deliceryAddressIcon: {
    height: '91.82%',
    width: '4.64%',
    right: '95.36%',
    bottom: '8.18%',
    left: '0%',
    top: '0%',
  },
  backArrowIcon2: {
    left: 353,
    height: 14,
    top: 3,
  },
  deliveryAddress: {
    top: 309,
    height: 22,
  },
  vectorIcon1: {
    height: '60.91%',
    top: '20%',
    bottom: '19.09%',
    left: '0%',
  },
  backArrowIcon3: {
    top: 4,
    height: 14,
  },
  paymentMethods: {
    top: 370,
    height: 22,
  },
  promoCord1: {
    left: 41,
    top: 0,
    fontSize: FontSize.size_lg,
    textAlign: 'left',
    color: Color.darkDeep,
    position: 'absolute',
  },
  promoCordIcon: {
    height: '92.74%',
    width: '6.2%',
    top: '7.69%',
    right: '93.8%',
    bottom: '-0.43%',
    left: '0%',
  },
  backArrowIcon4: {
    top: 5,
    left: 356,
    height: 14,
  },
  promoCord: {
    top: 430,
    width: 365,
    height: 23,
    left: 24,
    position: 'absolute',
  },
  bellIcon: {
    top: '9.5%',
    height: '90.5%',
    left: '0%',
    right: '95.03%',
    width: '4.97%',
  },
  backArrowIcon5: {
    top: 4,
    height: 14,
    left: 354,
    width: 8,
  },
  notifecations: {
    top: 493,
    height: 22,
  },
  help1: {
    left: 42,
    top: 0,
    fontSize: FontSize.size_lg,
    textAlign: 'left',
    color: Color.darkDeep,
    position: 'absolute',
  },
  helpIcon: {
    bottom: '9.5%',
    right: '94.49%',
    width: '5.51%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
    top: '0%',
  },
  backArrowIcon6: {
    height: 14,
    top: 3,
  },
  help: {
    top: 556,
    height: 22,
  },
  aboutIcon: {
    top: '5%',
    bottom: '4.09%',
    left: '0%',
    height: '90.91%',
  },
  about: {
    top: 617,
    height: 22,
  },
  logOut: {
    width: 134,
    color: Color.colorSeagreen_100,
    height: 20,
    textAlign: 'center',
    lineHeight: 18,
  },
  google: {
    top: 660,
    borderRadius: Border.br_lgi,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 364,
    height: 67,
    left: 25,
  },
  vectorIcon2: {
    height: 20,
    width: 22,
  },
  cart: {
    marginTop: 5,
  },
  vectorParent: {
    top: 19,
    left: 180,
    width: 26,
    height: 40,
  },
  store1Icon: {
    width: 24,
    height: 24,
    overflow: 'hidden',
  },
  shop: {
    color: Color.darkDeep,
  },
  store1Parent: {
    left: 29,
    width: 32,
    alignItems: 'flex-end',
    top: 17,
    height: 42,
  },
  vectorIcon3: {
    height: '100%',
    width: '64.31%',
    right: '0%',
    left: '35.69%',
    top: '0%',
  },
  frameChild: {
    bottom: '86.81%',
    right: '68.55%',
    width: '31.45%',
    borderRadius: Border.br_smi,
    height: '13.19%',
    top: '0%',
  },
  frameItem: {
    width: '22.97%',
    top: '40.66%',
    right: '77.03%',
    bottom: '46.15%',
    borderRadius: Border.br_smi,
    height: '13.19%',
  },
  frameInner: {
    top: '81.87%',
    bottom: '4.95%',
    right: '68.55%',
    width: '31.45%',
    borderRadius: Border.br_smi,
    height: '13.19%',
  },
  vectorGroup: {
    width: 28,
    height: 18,
  },
  frameParent: {
    top: 20,
    left: 96,
    width: 46,
    height: 38,
  },
  favourite: {
    marginTop: 2,
  },
  bookmark1Parent: {
    left: 243,
    width: 57,
    alignItems: 'center',
    top: 17,
  },
  account1: {
    color: Color.colorSeagreen_100,
  },
  user1Parent: {
    left: 336,
    width: 51,
    alignItems: 'center',
    top: 17,
  },
  bottomBar: {
    height: '10.27%',
    top: '89.71%',
    right: '0.14%',
    bottom: '0.02%',
    left: '-0.14%',
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    shadowColor: 'rgba(230, 235, 244, 0.5)',
    shadowOffset: {
      width: 0,
      height: -12,
    },
    shadowRadius: 37,
    elevation: 37,
    shadowOpacity: 1,
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
  },
  groupIcon: {
    height: '2.01%',
    width: '4.35%',
    top: '82.24%',
    right: '83.62%',
    bottom: '15.75%',
    left: '12.03%',
  },
  account: {
    flex: 1,
    height: 896,
    overflow: 'hidden',
    width: '100%',
  },
});

export default Account;

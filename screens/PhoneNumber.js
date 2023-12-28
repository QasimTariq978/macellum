import * as React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {FontFamily, Color, FontSize, Border, Padding} from '../GlobalStyles';

const PhoneNumber = ({navigation}) => {
  return (
    <View style={styles.phoneNumber}>
      <View style={[styles.frame, styles.frameIconPosition]}>
        <Text style={[styles.mobileNumber, styles.mobileTypo]}>
          Mobile Number
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('verification');
        }}>
        <Image
          style={[styles.frameIcon, styles.frameIconPosition]}
          source={require('../assets/frame7.png')}
        />
      </TouchableOpacity>
      <View style={[styles.frame1, styles.frameIconLayout]}>
        <Image
          style={[styles.frameIcon1, styles.frameIconLayout]}
          resizeMode="cover"
          source={require('../assets/frame8.png')}
        />
      </View>
      <View style={[styles.frame2, styles.frameIconPosition1]}>
        <View style={styles.barsHomeIndicatorIphone}>
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <Image
        style={[styles.frameIcon2, styles.frameIconLayout]}
        resizeMode="cover"
        source={require('../assets/frame9.png')}
      />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.frame3}>
          <Image
            style={styles.pakistanFlagIcon}
            resizeMode="cover"
            source={require('../assets/pakistan-flag.png')}
          />
          <Text style={[styles.text, styles.textClr]}>+92</Text>
        </View>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require('../assets/vector-26.png')}
        />
      </View>
      <View style={[styles.frame4, styles.frameIconPosition]}>
        <Text style={[styles.enterYourMobile, styles.textClr]}>
          Enter your mobile number
        </Text>
      </View>
      <Image
        style={[styles.frameIcon3, styles.frameIconPosition]}
        resizeMode="cover"
        source={require('../assets/frame10.png')}
      />
      <View style={[styles.phoneNumberChild, styles.frameParentPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconPosition: {
    left: 25,
    width: 364,
  },
  mobileTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.montserratRegular,
  },
  frameIconLayout: {
    width: 414,
    overflow: 'hidden',
  },
  frameIconPosition1: {
    position: 'absolute',
    overflow: 'hidden',
  },
  frameParentPosition: {
    top: 236,
    position: 'absolute',
  },
  textClr: {
    color: Color.darkDeep,
    lineHeight: 29,
  },
  mobileNumber: {
    fontSize: FontSize.size_base,
    color: Color.colorGray_200,
    textAlign: 'left',
    fontFamily: FontFamily.montserratRegular,
  },
  frame: {
    top: 220,
    justifyContent: 'center',
    width: 364,
    position: 'absolute',
    overflow: 'hidden',
  },
  frameIcon: {
    top: 498,
    height: 67,
    width: 364,
    position: 'absolute',
    overflow: 'hidden',
  },
  frameIcon1: {
    height: 301,
  },
  frame1: {
    top: 595,
    left: 0,
    width: 414,
    position: 'absolute',
    justifyContent: 'center',
  },
  homeIndicator: {
    borderRadius: Border.br_81xl,
    backgroundColor: '#e6e6e6',
    width: 134,
    height: 5,
  },
  barsHomeIndicatorIphone: {
    width: 148,
    height: 16,
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_10xs,
    opacity: 0.1,
    alignItems: 'center',
  },
  frame2: {
    top: 880,
    left: 133,
    width: 149,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frameIcon2: {
    top: 0,
    left: 0,
    width: 414,
    position: 'absolute',
    height: 896,
  },
  pakistanFlagIcon: {
    borderRadius: Border.br_10xs,
    width: 34,
    height: 24,
  },
  text: {
    fontSize: FontSize.size_lg,
    fontWeight: '500',
    fontFamily: FontFamily.montserratMedium,
    textAlign: 'center',
    marginLeft: 16,
  },
  frame3: {
    width: 83,
    height: 29,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  frameChild: {
    maxHeight: '100%',
    marginTop: 10,
    width: 364,
  },
  frameParent: {
    height: 40,
    paddingLeft: 0,
    width: 364,
    left: 25,
  },
  enterYourMobile: {
    fontSize: FontSize.size_7xl,
    textAlign: 'left',
    fontFamily: FontFamily.montserratRegular,
  },
  frame4: {
    top: 140,
    justifyContent: 'center',
    width: 364,
    position: 'absolute',
    overflow: 'hidden',
  },
  frameIcon3: {
    top: 57,
    height: 18,
    width: 364,
    position: 'absolute',
    overflow: 'hidden',
  },
  phoneNumberChild: {
    left: 115,
    borderStyle: 'solid',
    borderColor: Color.colorGray_200,
    borderRightWidth: 1,
    width: 1,
    height: 23,
  },
  phoneNumber: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    height: '100%',
  },
});

export default PhoneNumber;

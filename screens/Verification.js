import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Verification = () => {
  return (
    <View style={[styles.verification, styles.frameIcon1Layout]}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Text style={[styles.code, styles.codeTypo]}>Code</Text>
      </View>
      <Image
        style={[styles.frameIcon, styles.frameIconPosition]}
        resizeMode="cover"
        source={require("../assets/frame4.png")}
      />
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Image
          style={styles.ubereatsV1246111Icon}
          resizeMode="cover"
          source={require("../assets/ubereats-v-12461-1-1.png")}
        />
      </View>
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <View style={styles.barsHomeIndicatorIphone}>
          <View style={styles.homeIndicator} />
        </View>
      </View>
      <View style={[styles.frame3, styles.frameFlexBox]}>
        <Text style={[styles.resendCode, styles.textTypo]}>Resend Code</Text>
      </View>
      <Image
        style={[styles.frameIcon1, styles.textPosition]}
        resizeMode="cover"
        source={require("../assets/frame5.png")}
      />
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={[styles.text, styles.textClr]}>- - - -</Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/vector-25.png")}
        />
      </View>
      <View style={[styles.frame4, styles.frameFlexBox]}>
        <Text style={[styles.enterYour4Digit, styles.textClr]}>
          Enter your 4-digit code
        </Text>
      </View>
      <Image
        style={[styles.frameIcon2, styles.frameIconPosition]}
        resizeMode="cover"
        source={require("../assets/frame6.png")}
      />
      <View style={[styles.verificationChild, styles.parentPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  frameIcon1Layout: {
    height: 896,
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  codeTypo: {
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
  },
  frameIconPosition: {
    left: 25,
    width: 364,
  },
  textTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
  },
  textPosition: {
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    top: 236,
    position: "absolute",
  },
  textClr: {
    color: Color.darkDeep,
    lineHeight: 29,
  },
  code: {
    fontSize: FontSize.size_base,
    color: Color.colorGray_200,
    textAlign: "left",
    lineHeight: 29,
  },
  frame: {
    top: 197,
    width: 364,
    left: 25,
  },
  frameIcon: {
    top: 498,
    height: 67,
    width: 364,
    position: "absolute",
    overflow: "hidden",
  },
  ubereatsV1246111Icon: {
    height: 301,
    width: 414,
  },
  frame1: {
    top: 595,
    width: 414,
    left: 0,
  },
  homeIndicator: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.darkDeep,
    width: 134,
    height: 5,
  },
  barsHomeIndicatorIphone: {
    width: 148,
    height: 16,
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_10xs,
    opacity: 0.1,
    alignItems: "center",
  },
  frame2: {
    top: 880,
    left: 133,
    width: 149,
    alignItems: "center",
  },
  resendCode: {
    color: Color.colorSeagreen_100,
    textAlign: "left",
    lineHeight: 29,
  },
  frame3: {
    top: 517,
    width: 364,
    left: 25,
  },
  frameIcon1: {
    width: 414,
    left: 0,
    overflow: "hidden",
    height: 896,
  },
  text: {
    left: 8,
    textAlign: "center",
    top: 0,
    position: "absolute",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
  },
  frameChild: {
    top: 40,
    maxHeight: "100%",
    left: 0,
    width: 364,
    position: "absolute",
  },
  parent: {
    height: 40,
    width: 364,
    left: 25,
  },
  enterYour4Digit: {
    fontSize: FontSize.size_7xl,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
  },
  frame4: {
    top: 140,
    width: 364,
    left: 25,
  },
  frameIcon2: {
    top: 57,
    height: 18,
    width: 364,
    position: "absolute",
    overflow: "hidden",
  },
  verificationChild: {
    left: 26,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderRightWidth: 1,
    width: 1,
    height: 23,
  },
  verification: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
});

export default Verification;

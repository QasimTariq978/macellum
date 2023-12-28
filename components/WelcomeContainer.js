import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import StartButton from "./StartButton";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const WelcomeContainer = () => {
  return (
    <View style={styles.frame}>
      <LinearGradient
        style={styles.frameChild}
        locations={[0, 1]}
        colors={["rgba(14, 23, 39, 0)", "#858585"]}
        useAngle={true}
        angle={180}
      />
      <View style={[styles.frame1, styles.frame1Position]} />
      <Text style={[styles.welcome, styles.frame1Position]}>{`Welcome `}</Text>
      <View style={styles.frame2}>
        <Text style={styles.fastDeliveryAllContainer}>
          <Text style={styles.blankLine}> </Text>Fast Delivery All Over Pakistan
        </Text>
      </View>
      <StartButton
        buttonText="Get Started"
        propHeight="15.16%"
        propWidth="85.27%"
        propTop="64.28%"
        propRight="7.37%"
        propBottom="20.57%"
        propLeft="7.37%"
      />
      <View style={[styles.barsHomeIndicatorIphone, styles.barsPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.barsHomeIndicatorIphone1, styles.barsPosition]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame1Position: {
    top: 21,
    position: "absolute",
  },
  barsPosition: {
    opacity: 0.1,
    paddingHorizontal: Padding.p_0,
    width: 148,
    left: 133,
    alignItems: "center",
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    position: "absolute",
    height: 442,
    width: 414,
  },
  frame1: {
    left: 54,
    width: 306,
    height: 29,
    overflow: "hidden",
  },
  welcome: {
    left: 30,
    fontSize: FontSize.size_45xl,
    lineHeight: 29,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorWhite,
    width: 346,
    height: 49,
    textAlign: "center",
  },
  blankLine: {
    marginBottom: 6,
  },
  fastDeliveryAllContainer: {
    fontSize: FontSize.size_base,
    lineHeight: 15,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorGray_400,
    textAlign: "center",
  },
  frame2: {
    top: 70,
    left: 83,
    width: 248,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  homeIndicator: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
  },
  barsHomeIndicatorIphone: {
    top: 426,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 16,
    paddingVertical: Padding.p_10xs,
  },
  barsHomeIndicatorIphone1: {
    top: 405,
    height: 37,
    justifyContent: "flex-end",
    paddingVertical: Padding.p_5xs,
  },
  frame: {
    marginTop: 5,
    overflow: "hidden",
    height: 442,
    width: 414,
  },
});

export default WelcomeContainer;

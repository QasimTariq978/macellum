import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const FrontScreen = () => {
  return (
    <View style={styles.frontScreen}>
      <View style={styles.frame}>
        <View style={styles.naviagtion}>
          <View style={styles.navigationBar} />
        </View>
        <View style={styles.macellumParent}>
          <Text style={styles.macellum}>Macellum</Text>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector6.png")}
          />
        </View>
      </View>
      <View style={styles.frame1}>
        <Text style={styles.buyGroceriesOnline}>Buy Groceries Online</Text>
        <View style={styles.barsHomeIndicatorIphone}>
          <View style={styles.homeIndicator} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    width: 414,
    height: 98,
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  naviagtion: {
    width: 414,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  macellum: {
    position: "absolute",
    top: 13,
    left: 51,
    fontSize: 48,
    lineHeight: 29,
    fontFamily: FontFamily.orbitronRegular,
    color: Color.colorWhite,
    textAlign: "center",
    width: 340,
    height: 34,
  },
  vectorIcon: {
    position: "absolute",
    height: "100%",
    width: "20.23%",
    top: "0%",
    right: "79.77%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  macellumParent: {
    width: 391,
    height: 59,
    marginLeft: 32,
    marginTop: 304,
  },
  frame: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 423,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buyGroceriesOnline: {
    fontSize: FontSize.size_sm,
    letterSpacing: 6,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorWhite,
    textAlign: "center",
    height: 18,
    marginLeft: 97,
  },
  homeIndicator: {
    position: "relative",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
  },
  barsHomeIndicatorIphone: {
    width: 148,
    height: 37,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_0,
    paddingVertical: Padding.p_5xs,
    opacity: 0.1,
    marginLeft: 133,
    marginTop: 366,
  },
  frame1: {
    position: "absolute",
    top: 475,
    left: 0,
    width: 352,
    height: 421,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frontScreen: {
    position: "relative",
    backgroundColor: Color.colorSeagreen_100,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default FrontScreen;

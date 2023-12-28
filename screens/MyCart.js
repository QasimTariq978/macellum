import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import ProfileContainer from "../components/ProfileContainer";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const MyCart = () => {
  return (
    <View style={styles.myCart}>
      <Text style={styles.myCart1}>My Cart</Text>
      <View style={[styles.myCartChild, styles.cartChildBorder]} />
      <View style={[styles.myCartItem, styles.cartChildBorder]} />
      <View style={[styles.myCartInner, styles.cartLayout]} />
      <View style={[styles.lineView, styles.cartLayout]} />
      <View style={[styles.myCartChild1, styles.cartLayout]} />
      <View style={styles.f1ea7dcce3b5d06cd1b1418f9b9413Parent}>
        <Image
          style={styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon}
          resizeMode="cover"
          source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-3.png")}
        />
        <View style={styles.h1Parent}>
          <Text style={[styles.h1, styles.h1FlexBox]}>Bell Pepper Red</Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-6862.png")}
          />
          <Text style={styles.h11}>Rs 100</Text>
          <Text style={styles.h2}>1kg, Price</Text>
          <View style={[styles.h1Group, styles.h1GroupLayout]}>
            <Text style={styles.h12}>1</Text>
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame-6841.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame-6842.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.h13, styles.h13Typo]}>Rs 100</Text>
      <Text style={[styles.h14, styles.h13Typo]}>Rs 100</Text>
      <Text style={[styles.h15, styles.h13Typo]}>Rs 100</Text>
      <View style={styles.pngfuel16Parent}>
        <Image
          style={[styles.pngfuel16Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/pngfuel-161.png")}
        />
        <View style={[styles.h1Container, styles.parentPosition]}>
          <Text style={[styles.h1, styles.h1FlexBox]}>Egg Chicken Red</Text>
          <Image
            style={[styles.groupIcon, styles.groupIconPosition]}
            resizeMode="cover"
            source={require("../assets/group-68621.png")}
          />
          <Text style={[styles.h21, styles.h21Typo]}>6 pc, Price</Text>
          <View style={[styles.frameView, styles.h1GroupLayout]}>
            <Text style={styles.h12}>1</Text>
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame-68411.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame-68421.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.f1ea7dcce3b5d06cd1b1418f9b9413Group}>
        <Image
          style={styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon1}
          resizeMode="cover"
          source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-31.png")}
        />
        <View style={[styles.h1Parent1, styles.parentPosition]}>
          <Text style={[styles.h1, styles.h1FlexBox]}>Bananas</Text>
          <Image
            style={[styles.frameChild2, styles.groupIconPosition]}
            resizeMode="cover"
            source={require("../assets/group-68622.png")}
          />
          <Text style={[styles.h22, styles.h21Typo]}>12 pc, Price</Text>
          <View style={[styles.h1Group, styles.h1GroupLayout]}>
            <Text style={styles.h12}>1</Text>
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame-68412.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame-68422.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.pngfuel3Parent, styles.cartLayout]}>
        <Image
          style={[styles.pngfuel3Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/pngfuel-3.png")}
        />
        <View style={[styles.h1Parent3, styles.parentPosition]}>
          <Text style={[styles.h1, styles.h1FlexBox]}>Ginger</Text>
          <Image
            style={[styles.frameChild2, styles.groupIconPosition]}
            resizeMode="cover"
            source={require("../assets/group-68623.png")}
          />
          <Text style={styles.h23}>250g, Price</Text>
          <View style={[styles.h1Group, styles.h1GroupLayout]}>
            <Text style={styles.h12}>1</Text>
            <Image
              style={[styles.frameItem, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame-68413.png")}
            />
            <Image
              style={[styles.frameInner, styles.frameLayout]}
              resizeMode="cover"
              source={require("../assets/frame-68423.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.google}>
        <Text style={[styles.goToCheckout, styles.rs400Typo]}>
          Go to Checkout
        </Text>
        <View style={[styles.rs400Wrapper, styles.h1FlexBox]}>
          <Text style={[styles.rs400, styles.rs400Typo]}>Rs 400</Text>
        </View>
      </View>
      <ProfileContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  cartChildBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
  },
  cartLayout: {
    width: 365,
    position: "absolute",
  },
  h1FlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  h1GroupLayout: {
    height: 47,
    width: 133,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 46,
    width: 46,
    borderRadius: Border.br_mid,
    position: "absolute",
  },
  h13Typo: {
    left: 334,
    width: 65,
    fontSize: FontSize.size_lg,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 18,
    position: "absolute",
  },
  iconPosition: {
    top: 14,
    left: 0,
    position: "absolute",
  },
  parentPosition: {
    width: 260,
    top: 0,
    position: "absolute",
  },
  groupIconPosition: {
    left: "94.54%",
    right: "0%",
    width: "5.46%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  h21Typo: {
    width: 81,
    height: 15,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 0,
    lineHeight: 18,
    position: "absolute",
  },
  rs400Typo: {
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 18,
  },
  myCart1: {
    top: 56,
    left: 168,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 18,
    position: "absolute",
  },
  myCartChild: {
    top: 106,
    width: 415,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  myCartItem: {
    top: 732,
    width: 415,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  myCartInner: {
    top: 263,
    left: 25,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    width: 365,
  },
  lineView: {
    top: 420,
    left: 25,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    width: 365,
  },
  myCartChild1: {
    top: 577,
    left: 25,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    width: 365,
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Icon: {
    top: 16,
    width: 70,
    height: 65,
    left: 0,
    position: "absolute",
  },
  h1: {
    width: 137,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    top: 0,
    left: 0,
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 18,
  },
  frameChild: {
    width: "5.25%",
    right: "3.74%",
    left: "91.01%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "85.57%",
    top: "0%",
    height: "14.43%",
    position: "absolute",
    overflow: "hidden",
  },
  h11: {
    top: 69,
    left: 205,
    width: 65,
    fontSize: FontSize.size_lg,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    letterSpacing: 0,
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 18,
    position: "absolute",
  },
  h2: {
    height: 15,
    width: 72,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: 23,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 0,
    lineHeight: 18,
    position: "absolute",
  },
  h12: {
    top: 19,
    left: 63,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 18,
    position: "absolute",
  },
  frameItem: {
    left: 88,
    top: 0,
  },
  frameInner: {
    top: 1,
    left: 0,
  },
  h1Group: {
    top: 50,
  },
  h1Parent: {
    left: 103,
    width: 270,
    top: 0,
    height: 97,
    position: "absolute",
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Parent: {
    top: 136,
    width: 374,
    height: 97,
    left: 25,
    position: "absolute",
  },
  h13: {
    top: 516,
  },
  h14: {
    top: 677,
  },
  h15: {
    top: 365,
  },
  pngfuel16Icon: {
    width: 87,
    height: 87,
  },
  groupIcon: {
    height: "13.21%",
    top: "8.49%",
    bottom: "78.3%",
  },
  h21: {
    top: 32,
  },
  frameView: {
    top: 59,
  },
  h1Container: {
    left: 115,
    height: 106,
  },
  pngfuel16Parent: {
    top: 284,
    left: 14,
    width: 375,
    height: 106,
    position: "absolute",
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Icon1: {
    top: 21,
    width: 69,
    height: 55,
    left: 0,
    position: "absolute",
  },
  frameChild2: {
    bottom: "85.57%",
    top: "0%",
    height: "14.43%",
    left: "94.54%",
    right: "0%",
    width: "5.46%",
  },
  h22: {
    top: 23,
  },
  h1Parent1: {
    left: 102,
    height: 97,
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Group: {
    top: 450,
    left: 26,
    width: 363,
    height: 97,
    position: "absolute",
  },
  pngfuel3Icon: {
    width: 72,
    top: 14,
    height: 65,
  },
  h23: {
    width: 83,
    height: 18,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: 23,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 0,
    lineHeight: 18,
    position: "absolute",
  },
  h1Parent3: {
    left: 105,
    height: 97,
  },
  pngfuel3Parent: {
    top: 607,
    left: 24,
    height: 97,
  },
  goToCheckout: {
    top: 25,
    left: 104,
    width: 143,
    height: 14,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_100,
    position: "absolute",
  },
  rs400: {
    fontSize: FontSize.size_xs,
  },
  rs400Wrapper: {
    left: 297,
    borderRadius: 4,
    backgroundColor: "#489e67",
    paddingHorizontal: 5,
    paddingVertical: Padding.p_11xs,
    top: 23,
    overflow: "hidden",
  },
  google: {
    top: 712,
    borderRadius: Border.br_lgi,
    backgroundColor: Color.colorSeagreen_100,
    width: 364,
    height: 67,
    left: 25,
    position: "absolute",
  },
  myCart: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default MyCart;

import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ProfileContainer = () => {
  return (
    <View style={styles.bottomBar}>
      <Text style={[styles.home, styles.homePosition]}>Home</Text>
      <Text style={[styles.profile, styles.homePosition]}>Profile</Text>
      <View style={styles.cartParent}>
        <Text style={styles.cart}>Cart</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector15.png")}
        />
      </View>
      <View style={[styles.store1Parent, styles.parentPosition]}>
        <Image
          style={[styles.store1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/store-14.png")}
        />
        <Text style={[styles.shop, styles.shopTypo]}>Shop</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.vectorParent}>
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector16.png")}
          />
          <View style={[styles.frameChild, styles.frameLayout]} />
          <View style={[styles.frameItem, styles.frameLayout]} />
          <View style={[styles.frameInner, styles.frameLayout]} />
        </View>
        <Text style={[styles.explore, styles.shopTypo]}>Explore</Text>
      </View>
      <View style={[styles.bookmark1Parent, styles.parentPosition]}>
        <Image
          style={[styles.bookmark1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/bookmark-14.png")}
        />
        <Text style={[styles.shop, styles.shopTypo]}>Favourite</Text>
      </View>
      <View style={[styles.user1Parent, styles.parentPosition]}>
        <Image
          style={[styles.user1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/user-14.png")}
        />
        <Text style={[styles.shop, styles.shopTypo]}>Account</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    top: "50%",
    marginTop: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  parentPosition: {
    height: 42,
    top: 17,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 0,
    overflow: "hidden",
    position: "absolute",
  },
  shopTypo: {
    color: Color.darkDeep,
    textAlign: "center",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    backgroundColor: Color.darkDeep,
    borderRadius: Border.br_smi,
    left: "0%",
    height: "13.19%",
    position: "absolute",
  },
  home: {
    width: "9.86%",
    left: "8%",
    textAlign: "left",
  },
  profile: {
    width: "10.41%",
    left: "81.59%",
    textAlign: "right",
  },
  cart: {
    top: 25,
    color: Color.colorSeagreen_100,
    textAlign: "center",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "49.37%",
    width: "84.62%",
    right: "7.69%",
    bottom: "50.63%",
    left: "7.69%",
  },
  cartParent: {
    top: 19,
    left: 180,
    width: 26,
    height: 40,
    position: "absolute",
  },
  store1Icon: {
    left: 5,
  },
  shop: {
    top: 27,
  },
  store1Parent: {
    left: 29,
    width: 32,
  },
  vectorIcon1: {
    height: "100%",
    width: "64.31%",
    right: "0%",
    bottom: "0%",
    left: "35.69%",
  },
  frameChild: {
    bottom: "86.81%",
    right: "68.55%",
    width: "31.45%",
    borderRadius: Border.br_smi,
    left: "0%",
    height: "13.19%",
    top: "0%",
  },
  frameItem: {
    width: "22.97%",
    top: "40.66%",
    right: "77.03%",
    bottom: "46.15%",
    borderRadius: Border.br_smi,
    left: "0%",
    height: "13.19%",
  },
  frameInner: {
    top: "81.87%",
    bottom: "4.95%",
    right: "68.55%",
    width: "31.45%",
    borderRadius: Border.br_smi,
    left: "0%",
    height: "13.19%",
  },
  vectorParent: {
    left: 9,
    width: 28,
    height: 18,
    top: 0,
    position: "absolute",
  },
  explore: {
    top: 23,
  },
  frameParent: {
    top: 20,
    left: 96,
    width: 46,
    height: 38,
    position: "absolute",
  },
  bookmark1Icon: {
    left: 16,
  },
  bookmark1Parent: {
    left: 243,
    width: 57,
  },
  user1Icon: {
    left: 13,
  },
  user1Parent: {
    left: 336,
    width: 51,
  },
  bottomBar: {
    height: "10.27%",
    width: "100%",
    top: "89.71%",
    right: "0.14%",
    bottom: "0.02%",
    left: "-0.14%",
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(230, 235, 244, 0.5)",
    shadowOffset: {
      width: 0,
      height: -12,
    },
    shadowRadius: 37,
    elevation: 37,
    shadowOpacity: 1,
    overflow: "hidden",
    position: "absolute",
  },
});

export default ProfileContainer;

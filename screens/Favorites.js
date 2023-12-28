import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import FormContainer from "../components/FormContainer";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Favorites = () => {
  return (
    <View style={[styles.favorites, styles.favoritesLayout1]}>
      <Text style={[styles.favorurite, styles.addAllToTypo]}>Favorurite</Text>
      <View style={[styles.favoritesChild, styles.favoritesChildLayout]} />
      <View style={[styles.favoritesItem, styles.favoritesLayout]} />
      <View style={[styles.favoritesInner, styles.favoritesLayout]} />
      <View style={[styles.lineView, styles.favoritesLayout]} />
      <View style={[styles.favoritesChild1, styles.favoritesLayout]} />
      <View style={[styles.favoritesChild2, styles.favoritesChildLayout]} />
      <FormContainer
        beverageName="Sprite Can"
        beverageSizeAndPrice="325ml, Price"
        beverageCode={require("../assets/back-arrow6.png")}
        propTop={143}
      />
      <FormContainer
        beverageName="Diet Coke"
        beverageSizeAndPrice="355ml, Price"
        beverageCode={require("../assets/back-arrow7.png")}
        propTop={258}
      />
      <View style={[styles.frameParent, styles.frameFlexBox]}>
        <View style={styles.h1Parent}>
          <Text
            style={[styles.h1, styles.h1FlexBox]}
          >{`Apple & Grape Juice`}</Text>
          <Text style={[styles.h2, styles.h2Typo]}>2L, Price</Text>
        </View>
        <View style={[styles.h1Group, styles.h1GroupFlexBox]}>
          <Text style={[styles.h11, styles.h11Typo]}>Rs 100</Text>
          <Image
            style={[styles.backArrowIcon, styles.backIconLayout]}
            resizeMode="cover"
            source={require("../assets/back-arrow8.png")}
          />
        </View>
      </View>
      <View style={[styles.frameGroup, styles.frameFlexBox]}>
        <View style={styles.h1Container}>
          <Text style={[styles.h12, styles.h1FlexBox]}>Coca Cola Can</Text>
          <Text style={[styles.h21, styles.h2Typo]}>325ml, Price</Text>
        </View>
        <View style={[styles.frameView, styles.h1GroupFlexBox]}>
          <Text style={[styles.h13, styles.h11Typo]}>Rs 100</Text>
          <Image
            style={[styles.backArrowIcon1, styles.backIconLayout]}
            resizeMode="cover"
            source={require("../assets/back-arrow9.png")}
          />
        </View>
      </View>
      <View style={[styles.frameContainer, styles.frameFlexBox]}>
        <View style={styles.h1Container}>
          <Text style={[styles.h12, styles.h1FlexBox]}>{`Pepsi Can `}</Text>
          <Text style={[styles.h21, styles.h2Typo]}>330ml, Price</Text>
        </View>
        <View style={[styles.frameView, styles.h1GroupFlexBox]}>
          <Text style={[styles.h13, styles.h11Typo]}>Rs 100</Text>
          <Image
            style={[styles.backArrowIcon1, styles.backIconLayout]}
            resizeMode="cover"
            source={require("../assets/back-arrow10.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.pngfuel12Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/pngfuel-12.png")}
      />
      <Image
        style={[styles.pngfuel11Icon, styles.vectorParentLayout]}
        resizeMode="cover"
        source={require("../assets/pngfuel-11.png")}
      />
      <Image
        style={styles.treeTopJuiceAppleGrape64oIcon}
        resizeMode="cover"
        source={require("../assets/treetopjuiceapplegrape64oz-1.png")}
      />
      <Image
        style={styles.pngfuel13Icon}
        resizeMode="cover"
        source={require("../assets/pngfuel-13.png")}
      />
      <Image
        style={[styles.pngfuel14Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/pngfuel-14.png")}
      />
      <View style={[styles.google, styles.googleFlexBox]}>
        <Text style={[styles.addAllTo, styles.addAllToTypo]}>
          Add All To Cart
        </Text>
      </View>
      <View style={[styles.bottomBar, styles.favoritesLayout1]}>
        <Text style={[styles.home, styles.homePosition]}>Home</Text>
        <Text style={[styles.profile, styles.homePosition]}>Profile</Text>
        <View style={[styles.vectorParent, styles.vectorParentLayout]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector13.png")}
          />
          <Text style={[styles.cart, styles.cartTypo]}>Cart</Text>
        </View>
        <View style={[styles.store1Parent, styles.parentPosition]}>
          <Image
            style={styles.store1Icon}
            resizeMode="cover"
            source={require("../assets/store-13.png")}
          />
          <Text style={[styles.shop, styles.cartTypo]}>Shop</Text>
        </View>
        <View style={[styles.frameParent1, styles.googleFlexBox]}>
          <View style={styles.vectorGroup}>
            <Image
              style={styles.vectorIcon1}
              resizeMode="cover"
              source={require("../assets/vector14.png")}
            />
            <View style={[styles.frameChild, styles.frameLayout]} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameInner, styles.frameLayout]} />
          </View>
          <Text style={[styles.cart, styles.cartTypo]}>Explore</Text>
        </View>
        <View style={[styles.bookmark1Parent, styles.parentPosition]}>
          <Image
            style={styles.store1Icon}
            resizeMode="cover"
            source={require("../assets/bookmark-13.png")}
          />
          <Text style={[styles.favourite, styles.cartTypo]}>Favourite</Text>
        </View>
        <View style={[styles.user1Parent, styles.parentPosition]}>
          <Image
            style={styles.store1Icon}
            resizeMode="cover"
            source={require("../assets/user-13.png")}
          />
          <Text style={[styles.shop, styles.cartTypo]}>Account</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  favoritesLayout1: {
    width: "100%",
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
  },
  addAllToTypo: {
    textAlign: "center",
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 18,
  },
  favoritesChildLayout: {
    height: 1,
    width: 415,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  favoritesLayout: {
    width: 365,
    left: 25,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
  },
  frameFlexBox: {
    flexDirection: "row",
    width: 283,
    left: 106,
    alignItems: "center",
    height: 42,
    position: "absolute",
  },
  h1FlexBox: {
    display: "flex",
    alignItems: "center",
  },
  h2Typo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    lineHeight: 18,
  },
  h1GroupFlexBox: {
    height: 27,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  h11Typo: {
    lineHeight: 27,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
  },
  backIconLayout: {
    width: 8,
    height: 14,
    overflow: "hidden",
  },
  iconPosition: {
    left: 33,
    position: "absolute",
  },
  vectorParentLayout: {
    width: 26,
    position: "absolute",
  },
  googleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  homePosition: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.openSansRegular,
    top: "50%",
    marginTop: 0,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  cartTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.montserratRegular,
  },
  parentPosition: {
    top: 17,
    height: 42,
    position: "absolute",
  },
  frameLayout: {
    backgroundColor: Color.darkDeep,
    borderRadius: Border.br_smi,
    left: "0%",
    height: "13.19%",
    position: "absolute",
  },
  favorurite: {
    top: 56,
    left: 156,
    fontSize: FontSize.size_xl,
    color: Color.darkDeep,
    position: "absolute",
  },
  favoritesChild: {
    top: 106,
  },
  favoritesItem: {
    top: 220,
  },
  favoritesInner: {
    top: 335,
  },
  lineView: {
    top: 450,
  },
  favoritesChild1: {
    top: 555,
  },
  favoritesChild2: {
    top: 660,
  },
  h1: {
    lineHeight: 20,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    display: "flex",
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    width: 196,
  },
  h2: {
    width: 72,
    height: 15,
    marginTop: 6,
    display: "flex",
    alignItems: "center",
  },
  h1Parent: {
    width: 196,
    height: 42,
  },
  h11: {
    textAlign: "right",
  },
  backArrowIcon: {
    marginLeft: 6,
    height: 14,
  },
  h1Group: {
    width: 67,
    marginLeft: 20,
  },
  frameParent: {
    top: 372,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  h12: {
    width: 137,
    textAlign: "left",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    display: "flex",
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 18,
  },
  h21: {
    marginTop: 5,
  },
  h1Container: {
    width: 137,
    height: 42,
  },
  h13: {
    textAlign: "left",
  },
  backArrowIcon1: {
    marginLeft: 2,
    height: 14,
  },
  frameView: {
    width: 63,
    marginLeft: 83,
  },
  frameGroup: {
    top: 488,
    alignItems: "center",
  },
  frameContainer: {
    top: 593,
    alignItems: "center",
  },
  pngfuel12Icon: {
    top: 136,
    width: 31,
    height: 55,
  },
  pngfuel11Icon: {
    top: 253,
    left: 35,
    height: 52,
  },
  treeTopJuiceAppleGrape64oIcon: {
    top: 366,
    left: 20,
    width: 56,
    height: 56,
    position: "absolute",
  },
  pngfuel13Icon: {
    top: 481,
    left: 34,
    width: 29,
    height: 53,
    position: "absolute",
  },
  pngfuel14Icon: {
    top: 584,
    width: 30,
    height: 58,
  },
  addAllTo: {
    fontSize: FontSize.size_lg,
    color: Color.colorGray_100,
    width: 134,
    height: 14,
  },
  google: {
    top: 712,
    borderRadius: Border.br_lgi,
    backgroundColor: Color.colorSeagreen_100,
    width: 364,
    height: 67,
    left: 25,
    justifyContent: "center",
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
  vectorIcon: {
    width: 22,
    height: 20,
  },
  cart: {
    marginTop: 5,
    color: Color.darkDeep,
  },
  vectorParent: {
    top: 19,
    left: 180,
    height: 40,
    justifyContent: "flex-end",
  },
  store1Icon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  shop: {
    marginTop: 3,
    color: Color.darkDeep,
  },
  store1Parent: {
    left: 29,
    width: 32,
    alignItems: "flex-end",
  },
  vectorIcon1: {
    height: "100%",
    width: "64.31%",
    right: "0%",
    bottom: "0%",
    left: "35.69%",
    maxWidth: "100%",
    maxHeight: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
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
  vectorGroup: {
    width: 28,
    height: 18,
  },
  frameParent1: {
    top: 20,
    left: 96,
    width: 46,
    height: 38,
  },
  favourite: {
    color: Color.colorSeagreen_100,
    marginTop: 2,
  },
  bookmark1Parent: {
    left: 243,
    width: 57,
    alignItems: "center",
  },
  user1Parent: {
    left: 336,
    width: 51,
    alignItems: "center",
  },
  bottomBar: {
    height: "10.27%",
    top: "89.71%",
    right: "0.14%",
    bottom: "0.02%",
    left: "-0.14%",
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    shadowColor: "rgba(230, 235, 244, 0.5)",
    shadowOffset: {
      width: 0,
      height: -12,
    },
    shadowRadius: 37,
    elevation: 37,
    shadowOpacity: 1,
    position: "absolute",
    overflow: "hidden",
  },
  favorites: {
    flex: 1,
    height: 896,
    overflow: "hidden",
  },
});

export default Favorites;

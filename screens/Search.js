import * as React from "react";
import { Image, StyleSheet, Text, View, ImageBackground } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Search = () => {
  return (
    <View style={styles.search}>
      <Image
        style={styles.backArrowIcon}
        resizeMode="cover"
        source={require("../assets/back-arrow5.png")}
      />
      <Image
        style={styles.searchChild}
        resizeMode="cover"
        source={require("../assets/group-6839.png")}
      />
      <View style={[styles.search1, styles.search1Layout]}>
        <Image
          style={[styles.searchItem, styles.searchItemLayout]}
          resizeMode="cover"
          source={require("../assets/group-6847.png")}
        />
        <View style={styles.vectorParent}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector10.png")}
          />
          <Text style={styles.egg}>Egg</Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameLayout]}>
        <View style={[styles.h1Parent, styles.parentShadowBox]}>
          <Text style={[styles.h1, styles.h1Typo]}>Mayonnaise</Text>
          <Text style={[styles.h11, styles.h11Layout]}>$4.99</Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/frame-6813.png")}
          />
          <Text style={[styles.h2, styles.h2Typo]}>325ml, Price</Text>
        </View>
        <Image
          style={styles.americanGardenMayonnaiseEggIcon}
          resizeMode="cover"
          source={require("../assets/americangardenmayonnaiseeggless473ml-1.png")}
        />
        <Image
          style={[styles.americanGardenMayonnaiseEggIcon1, styles.h11Layout]}
          resizeMode="cover"
          source={require("../assets/americangardenmayonnaiseeggless473ml-2.png")}
        />
      </View>
      <View style={[styles.frameGroup, styles.frameLayout]}>
        <View style={[styles.h1Group, styles.parentShadowBox]}>
          <Text style={[styles.h12, styles.h1Typo]}>Egg Noodles</Text>
          <Text style={[styles.h11, styles.h11Layout]}>$4.99</Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/frame-68131.png")}
          />
          <Text style={[styles.h21, styles.h2Typo]}>330ml, Price</Text>
        </View>
        <Image
          style={[styles.rp247903920053554627L1Icon, styles.search1Layout]}
          resizeMode="cover"
          source={require("../assets/rp-24790392-0053554627-l-1.png")}
        />
        <Image
          style={styles.rp247903920053554627L2Icon}
          resizeMode="cover"
          source={require("../assets/rp-24790392-0053554627-l-2.png")}
        />
      </View>
      <Text style={[styles.profile, styles.profileFlexBox]}>Profile</Text>
      <View style={[styles.barsHomeIndicatorIphone, styles.searchItemLayout]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.frameContainer, styles.h1Parent3Position]}>
        <View style={[styles.h1Container, styles.parentShadowBox]}>
          <Text style={[styles.h12, styles.h1Typo]}>Eggs Desi</Text>
          <Text style={[styles.h15, styles.h11Typo]}>Rs 100</Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/frame-68132.png")}
          />
          <Text style={[styles.h2, styles.h2Typo]}>6pc, Price</Text>
        </View>
        <Image
          style={[styles.pngfuel15Icon, styles.h111Layout]}
          resizeMode="cover"
          source={require("../assets/pngfuel-15.png")}
        />
        <Image
          style={styles.pngfuel16Icon}
          resizeMode="cover"
          source={require("../assets/pngfuel-16.png")}
        />
      </View>
      <View style={[styles.frameView, styles.framePosition]}>
        <View style={[styles.h1Parent1, styles.parentShadowBox]}>
          <Text style={styles.h16}>{`Egg Pasta `}</Text>
          <Text style={[styles.h17, styles.h11Typo]}>Rs 100</Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/frame-68133.png")}
          />
          <Text style={[styles.h23, styles.h2Typo]}>30gm, Price</Text>
        </View>
        <ImageBackground
          style={[styles.hiclipart1Wrapper, styles.frameParent2Position]}
          resizeMode="cover"
          source={require("../assets/frame6848.png")}
        >
          <Image
            style={styles.hiclipart1Icon}
            resizeMode="cover"
            source={require("../assets/hiclipart-1.png")}
          />
        </ImageBackground>
      </View>
      <View style={[styles.frameParent1, styles.framePosition]}>
        <View style={[styles.h1Parent2, styles.parentShadowBox]}>
          <Text style={styles.h16}>Egg Noodles</Text>
          <Text style={[styles.h17, styles.h11Typo]}>Rs 100</Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/frame-68134.png")}
          />
          <Text style={[styles.h23, styles.h2Typo]}>2L, Price</Text>
        </View>
        <Image
          style={styles.eggNoodle11}
          resizeMode="cover"
          source={require("../assets/eggnoodle-1-1.png")}
        />
        <Image
          style={styles.eggNoodle12}
          resizeMode="cover"
          source={require("../assets/eggnoodle-1-2.png")}
        />
      </View>
      <View style={[styles.h1Parent3, styles.h1Parent3Position]}>
        <Text style={[styles.h110, styles.h1Typo]}>Eggs</Text>
        <Text style={[styles.h111, styles.h111Layout]}>Rs 100</Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/frame-68135.png")}
        />
        <Text style={[styles.h25, styles.h2Typo]}>12g, Price</Text>
        <Image
          style={styles.pngfuel17Icon}
          resizeMode="cover"
          source={require("../assets/pngfuel-17.png")}
        />
        <Image
          style={styles.pngfuel18Icon}
          resizeMode="cover"
          source={require("../assets/pngfuel-18.png")}
        />
      </View>
      <View style={styles.bottomBar}>
        <Text style={[styles.home, styles.homePosition]}>Home</Text>
        <Text style={[styles.profile1, styles.homePosition]}>Profile</Text>
        <View style={styles.vectorGroup}>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector11.png")}
          />
          <Text style={[styles.cart, styles.cartTypo]}>Cart</Text>
        </View>
        <View style={[styles.store1Parent, styles.parentPosition]}>
          <Image
            style={styles.store1Icon}
            resizeMode="cover"
            source={require("../assets/store-12.png")}
          />
          <Text style={[styles.shop, styles.shopTypo]}>Shop</Text>
        </View>
        <View style={[styles.frameParent2, styles.frameParent2Position]}>
          <View style={styles.vectorContainer}>
            <Image
              style={[styles.vectorIcon2, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector12.png")}
            />
            <View style={[styles.rectangleView, styles.frameChildLayout]} />
            <View style={[styles.frameChild3, styles.frameChildLayout]} />
            <View style={[styles.frameChild4, styles.frameChildLayout]} />
          </View>
          <Text style={[styles.explore, styles.cartTypo]}>Explore</Text>
        </View>
        <View style={[styles.bookmark1Parent, styles.parentPosition]}>
          <Image
            style={styles.store1Icon}
            resizeMode="cover"
            source={require("../assets/bookmark-12.png")}
          />
          <Text style={[styles.favourite, styles.shopTypo]}>Favourite</Text>
        </View>
        <View style={[styles.user1Parent, styles.parentPosition]}>
          <Image
            style={styles.store1Icon}
            resizeMode="cover"
            source={require("../assets/user-12.png")}
          />
          <Text style={[styles.shop, styles.shopTypo]}>Account</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search1Layout: {
    height: 52,
    position: "absolute",
  },
  searchItemLayout: {
    height: 16,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    height: 249,
    width: 173,
    top: 658,
    position: "absolute",
  },
  parentShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderRadius: Border.br_lg,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },
  h1Typo: {
    display: "flex",
    lineHeight: 18,
    alignItems: "center",
    color: Color.darkDeep,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    top: 130,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    left: 15,
    position: "absolute",
  },
  h11Layout: {
    width: 52,
    position: "absolute",
  },
  h2Typo: {
    height: 15,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    lineHeight: 18,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 15,
    position: "absolute",
  },
  profileFlexBox: {
    textAlign: "right",
    left: "81.59%",
    width: "10.41%",
  },
  h1Parent3Position: {
    top: 130,
    height: 249,
    width: 173,
    position: "absolute",
  },
  h11Typo: {
    fontSize: FontSize.size_lg,
    alignItems: "center",
    display: "flex",
    color: Color.darkDeep,
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
  },
  h111Layout: {
    width: 65,
    position: "absolute",
  },
  framePosition: {
    top: 394,
    height: 249,
    width: 173,
    position: "absolute",
  },
  frameParent2Position: {
    top: 20,
    position: "absolute",
  },
  homePosition: {
    marginTop: 0,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.openSansRegular,
    top: "50%",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  cartTypo: {
    marginTop: 5,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratRegular,
  },
  parentPosition: {
    height: 42,
    top: 17,
    position: "absolute",
  },
  shopTypo: {
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_300,
    fontFamily: FontFamily.montserratRegular,
  },
  frameChildLayout: {
    backgroundColor: Color.colorSeagreen_100,
    borderRadius: Border.br_smi,
    height: "13.19%",
    left: "0%",
    position: "absolute",
  },
  backArrowIcon: {
    top: 57,
    width: 10,
    height: 18,
    left: 25,
    position: "absolute",
    overflow: "hidden",
  },
  searchChild: {
    top: 66,
    left: 370,
    width: 17,
    height: 18,
    position: "absolute",
  },
  searchItem: {
    left: 296,
    width: 16,
    top: 18,
  },
  vectorIcon: {
    height: "94.79%",
    width: "15.9%",
    right: "84.1%",
    bottom: "5.21%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  egg: {
    top: 2,
    left: 28,
    color: "#181b19",
    width: 86,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  vectorParent: {
    top: 16,
    width: 113,
    height: 19,
    left: 15,
    position: "absolute",
  },
  search1: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 325,
    top: 49,
    left: 25,
  },
  h1: {
    width: 158,
    alignItems: "center",
  },
  h11: {
    fontSize: FontSize.size_lg,
    alignItems: "center",
    display: "flex",
    color: Color.darkDeep,
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    top: 205,
    left: 15,
  },
  frameChild: {
    top: 188,
    left: 114,
    borderRadius: Border.br_mid,
    height: 46,
    width: 46,
    position: "absolute",
  },
  h2: {
    width: 78,
    top: 153,
    height: 15,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  h1Parent: {
    left: 0,
    top: 0,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderRadius: Border.br_lg,
    height: 249,
    width: 173,
    position: "absolute",
  },
  americanGardenMayonnaiseEggIcon: {
    top: 46,
    left: 64,
    height: 64,
    width: 46,
    position: "absolute",
  },
  americanGardenMayonnaiseEggIcon1: {
    left: 61,
    height: 92,
    top: 18,
  },
  frameParent: {
    left: 24,
  },
  h12: {
    width: 137,
    alignItems: "center",
  },
  h21: {
    width: 81,
    top: 153,
    height: 15,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  h1Group: {
    left: 0,
    top: 0,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderRadius: Border.br_lg,
    height: 249,
    width: 173,
    position: "absolute",
  },
  rp247903920053554627L1Icon: {
    top: 44,
    left: 41,
    width: 91,
  },
  rp247903920053554627L2Icon: {
    top: 37,
    left: 36,
    width: 101,
    height: 65,
    position: "absolute",
  },
  frameGroup: {
    left: 212,
  },
  profile: {
    marginTop: 384.8,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.openSansRegular,
    top: "50%",
    textAlign: "right",
    left: "81.59%",
    width: "10.41%",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorBlack,
    width: 134,
    height: 5,
    position: "absolute",
  },
  barsHomeIndicatorIphone: {
    top: 880,
    left: 133,
    width: 148,
    opacity: 0.1,
  },
  h15: {
    left: 17,
    width: 62,
    top: 205,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  h1Container: {
    left: 0,
    top: 0,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderRadius: Border.br_lg,
    height: 249,
    width: 173,
    position: "absolute",
  },
  pngfuel15Icon: {
    top: 67,
    left: 55,
    height: 41,
  },
  pngfuel16Icon: {
    top: 11,
    width: 122,
    height: 122,
    left: 24,
    position: "absolute",
  },
  frameContainer: {
    left: 24,
  },
  h16: {
    top: 140,
    lineHeight: 20,
    color: Color.darkDeep,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    left: 15,
    position: "absolute",
  },
  h17: {
    top: 202,
    width: 59,
    left: 15,
    position: "absolute",
  },
  h23: {
    top: 172,
    width: 89,
  },
  h1Parent1: {
    left: 0,
    top: 0,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderRadius: Border.br_lg,
    height: 249,
    width: 173,
    position: "absolute",
  },
  hiclipart1Icon: {
    top: 35,
    left: 6,
    height: 61,
    width: 61,
    position: "absolute",
  },
  hiclipart1Wrapper: {
    left: 51,
    width: 72,
    height: 97,
  },
  frameView: {
    left: 24,
  },
  h1Parent2: {
    left: 0,
    top: 0,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderRadius: Border.br_lg,
    height: 249,
    width: 173,
    position: "absolute",
  },
  eggNoodle11: {
    top: 42,
    left: 62,
    width: 49,
    height: 67,
    position: "absolute",
  },
  eggNoodle12: {
    left: 56,
    height: 94,
    top: 17,
    width: 61,
    position: "absolute",
  },
  frameParent1: {
    left: 212,
  },
  h110: {
    width: 153,
    alignItems: "center",
  },
  h111: {
    fontSize: FontSize.size_lg,
    alignItems: "center",
    display: "flex",
    color: Color.darkDeep,
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    top: 205,
    left: 15,
  },
  h25: {
    width: 82,
    top: 153,
    height: 15,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  pngfuel17Icon: {
    left: 50,
    width: 76,
    height: 63,
    opacity: 0.7,
    top: 49,
    position: "absolute",
  },
  pngfuel18Icon: {
    top: 25,
    left: 22,
    width: 129,
    height: 86,
    position: "absolute",
  },
  h1Parent3: {
    left: 212,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderRadius: Border.br_lg,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },
  home: {
    width: "9.86%",
    left: "8%",
    textAlign: "left",
  },
  profile1: {
    textAlign: "right",
    left: "81.59%",
    width: "10.41%",
    marginTop: 0,
  },
  vectorIcon1: {
    width: 22,
    height: 20,
  },
  cart: {
    color: Color.colorGray_300,
    marginTop: 5,
  },
  vectorGroup: {
    top: 19,
    left: 180,
    width: 26,
    height: 40,
    justifyContent: "flex-end",
    position: "absolute",
  },
  store1Icon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  shop: {
    marginTop: 3,
  },
  store1Parent: {
    left: 29,
    width: 32,
    justifyContent: "flex-end",
  },
  vectorIcon2: {
    height: "100%",
    width: "64.31%",
    right: "0%",
    bottom: "0%",
    left: "35.69%",
  },
  rectangleView: {
    bottom: "86.81%",
    right: "68.55%",
    width: "31.45%",
    borderRadius: Border.br_smi,
    height: "13.19%",
    top: "0%",
  },
  frameChild3: {
    width: "22.97%",
    top: "40.66%",
    right: "77.03%",
    bottom: "46.15%",
    borderRadius: Border.br_smi,
    height: "13.19%",
  },
  frameChild4: {
    top: "81.87%",
    bottom: "4.95%",
    right: "68.55%",
    width: "31.45%",
    borderRadius: Border.br_smi,
    height: "13.19%",
  },
  vectorContainer: {
    width: 28,
    height: 18,
  },
  explore: {
    color: Color.colorSeagreen_100,
  },
  frameParent2: {
    left: 96,
    height: 38,
    justifyContent: "center",
    width: 46,
    alignItems: "center",
  },
  favourite: {
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
    right: "0.02%",
    bottom: "0.02%",
    left: "-0.02%",
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    shadowColor: "rgba(230, 235, 244, 0.5)",
    shadowRadius: 37,
    elevation: 37,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    position: "absolute",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  search: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Search;

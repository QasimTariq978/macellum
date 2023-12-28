import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import StartButton from "../components/StartButton";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Filters = () => {
  return (
    <View style={styles.filters}>
      <Text style={styles.filters1}>Filters</Text>
      <Image
        style={styles.filtersChild}
        resizeMode="cover"
        source={require("../assets/group-6846.png")}
      />
      <View style={styles.bottomBar}>
        <Text style={[styles.home, styles.homePosition]}>Home</Text>
        <Text style={[styles.profile, styles.homePosition]}>Profile</Text>
        <View style={[styles.rectangleParent, styles.frameViewPosition]}>
          <View style={styles.frameChild} />
          <Image
            style={styles.excludeIcon}
            resizeMode="cover"
            source={require("../assets/exclude.png")}
          />
          <Text style={[styles.eggs, styles.eggsTypo]}>Eggs</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleParentFlexBox]}>
          <View style={[styles.frameItem, styles.frameLayout]} />
          <Text style={styles.individualCallection}>Individual Callection</Text>
        </View>
        <View
          style={[styles.rectangleContainer, styles.rectangleParentFlexBox]}
        >
          <View style={[styles.frameInner, styles.frameLayout]} />
          <Text style={styles.individualCallection}>{`Noodles & Pasta`}</Text>
        </View>
        <View style={[styles.frameView, styles.frameViewPosition]}>
          <View style={styles.frameChild} />
          <Image
            style={styles.excludeIcon}
            resizeMode="cover"
            source={require("../assets/exclude1.png")}
          />
          <Text style={[styles.freshEggs, styles.eggsTypo]}>Fresh Eggs</Text>
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleParentFlexBox]}>
          <View style={[styles.frameInner, styles.frameLayout]} />
          <Text style={styles.individualCallection}>{`Chips & Crisps`}</Text>
        </View>
        <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
          <View style={[styles.frameInner, styles.frameLayout]} />
          <Text style={styles.individualCallection}>Misc</Text>
        </View>
        <View style={[styles.rectangleParent3, styles.rectangleParentFlexBox]}>
          <View style={[styles.frameInner, styles.frameLayout]} />
          <Text style={styles.individualCallection}>Fast Food</Text>
        </View>
        <View style={[styles.rectangleParent4, styles.rectangleParentLayout]}>
          <View style={[styles.frameInner, styles.frameLayout]} />
          <Text style={styles.individualCallection}>Misc</Text>
        </View>
        <Text style={[styles.categories, styles.brandTypo]}>Categories</Text>
        <Text style={[styles.brand, styles.brandTypo]}>Brand</Text>
      </View>
      <StartButton
        buttonText="Apply Filter"
        propHeight={67}
        propWidth={364}
        propTop={791}
        propRight="unset"
        propBottom="unset"
        propLeft={25}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    top: "50%",
    marginTop: 0.5,
    position: "absolute",
  },
  frameViewPosition: {
    height: 24,
    left: 25,
    position: "absolute",
  },
  eggsTypo: {
    color: Color.colorSeagreen_100,
    top: 4,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangleParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    height: 24,
    left: 25,
    position: "absolute",
  },
  frameLayout: {
    borderWidth: 1.5,
    borderStyle: "solid",
    width: 24,
    borderRadius: Border.br_5xs,
    height: 24,
  },
  rectangleParentLayout: {
    width: 73,
    alignItems: "center",
    flexDirection: "row",
    height: 24,
    left: 25,
    position: "absolute",
  },
  brandTypo: {
    fontSize: FontSize.size_5xl,
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  filters1: {
    top: 56,
    left: 176,
    fontSize: FontSize.size_xl,
    lineHeight: 18,
    textAlign: "center",
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    position: "absolute",
  },
  filtersChild: {
    height: "1.73%",
    width: "3.79%",
    top: "6.37%",
    right: "90.17%",
    bottom: "91.9%",
    left: "6.04%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
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
  frameChild: {
    top: 0,
    backgroundColor: Color.colorSeagreen_100,
    width: 24,
    borderRadius: Border.br_5xs,
    height: 24,
    left: 0,
    position: "absolute",
  },
  excludeIcon: {
    width: 14,
    height: 10,
  },
  eggs: {
    left: 34,
    textAlign: "center",
  },
  rectangleParent: {
    top: 84,
    width: 75,
  },
  frameItem: {
    borderColor: "#c2c2c2",
  },
  individualCallection: {
    marginLeft: 11,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.darkDeep,
  },
  rectangleGroup: {
    top: 334,
    width: 202,
  },
  frameInner: {
    borderColor: Color.colorDarkgray_200,
  },
  rectangleContainer: {
    top: 128,
    width: 168,
  },
  freshEggs: {
    left: 36,
    textAlign: "left",
  },
  frameView: {
    top: 378,
    width: 127,
  },
  rectangleParent1: {
    top: 172,
    width: 151,
  },
  rectangleParent2: {
    top: 422,
  },
  rectangleParent3: {
    top: 216,
    width: 116,
  },
  rectangleParent4: {
    top: 467,
  },
  categories: {
    top: 30,
    left: 22,
    textAlign: "center",
  },
  brand: {
    top: 280,
    left: 25,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  bottomBar: {
    top: 105,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 414,
    height: 791,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  filters: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Filters;

import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SignIn = () => {
  return (
    <View style={styles.signIn}>
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupPosition]}
        resizeMode="cover"
        source={require("../assets/mask-group1.png")}
      />
      <Image
        style={[styles.maskGroupIcon1, styles.maskGroupPosition]}
        resizeMode="cover"
        source={require("../assets/mask-group2.png")}
      />
      <View style={[styles.facebook, styles.googleLayout]}>
        <View style={[styles.vectorParent, styles.parentFlexBox]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector26.png")}
          />
          <Text style={[styles.continueWithFacebook, styles.continueTypo]}>
            Continue with Facebook
          </Text>
        </View>
      </View>
      <View style={[styles.google, styles.googleLayout]}>
        <View style={[styles.groupParent, styles.parentFlexBox]}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-6795.png")}
          />
          <Text style={[styles.continueWithGoogle, styles.continueTypo]}>
            Continue with Google
          </Text>
        </View>
      </View>
      <View style={[styles.parent, styles.parentLayout]}>
        <Text style={[styles.text, styles.textFlexBox]}>+92</Text>
        <Image
          style={styles.pakistanFlagIcon}
          resizeMode="cover"
          source={require("../assets/pakistan-flag1.png")}
        />
        <Image
          style={[styles.frameItem, styles.parentLayout]}
          resizeMode="cover"
          source={require("../assets/vector-29.png")}
        />
      </View>
      <Text
        style={[styles.groceriesHomeDeliveredWithContainer, styles.textClr]}
      >
        <Text style={styles.groceriesHomeDelivered}>
          <Text style={styles.groceriesHomeDelivered1}>
            Groceries Home Delivered
          </Text>
        </Text>
        <Text>
          <Text style={styles.groceriesHomeDelivered1}>{`with `}</Text>
          <Text style={styles.macellum}>Macellum</Text>
        </Text>
      </Text>
      <Text style={[styles.orLoginWith, styles.textFlexBox]}>
        Or login with email
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  googleLayout: {
    paddingVertical: Padding.p_0,
    paddingHorizontal: 36,
    justifyContent: "center",
    height: 67,
    borderRadius: Border.br_lgi,
    width: 364,
    left: 25,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    height: 24,
  },
  continueTypo: {
    height: 14,
    color: Color.colorGray_100,
    lineHeight: 18,
    textAlign: "left",
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_lg,
  },
  parentLayout: {
    width: 364,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  textClr: {
    color: Color.colorGray_300,
    lineHeight: 29,
  },
  maskGroupIcon: {
    width: 414,
    left: 0,
    height: 896,
  },
  maskGroupIcon1: {
    width: 413,
    height: 374,
    left: 0,
  },
  vectorIcon: {
    width: 12,
    height: 24,
  },
  continueWithFacebook: {
    width: 234,
    marginLeft: 41,
  },
  vectorParent: {
    width: 288,
  },
  facebook: {
    top: 739,
    backgroundColor: "#4a66ac",
  },
  frameChild: {
    width: 25,
    height: 24,
  },
  continueWithGoogle: {
    width: 202,
    marginLeft: 44,
  },
  groupParent: {
    width: 271,
  },
  google: {
    top: 652,
    backgroundColor: "#5383ec",
  },
  text: {
    left: 51,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorGray_300,
    lineHeight: 29,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    top: 0,
  },
  pakistanFlagIcon: {
    top: 1,
    borderRadius: Border.br_10xs,
    width: 34,
    height: 24,
    left: 0,
    position: "absolute",
  },
  frameItem: {
    top: 40,
    maxHeight: "100%",
    left: 0,
  },
  parent: {
    top: 517,
    height: 40,
    left: 25,
    width: 364,
  },
  groceriesHomeDelivered1: {
    fontFamily: FontFamily.montserratRegular,
  },
  groceriesHomeDelivered: {
    marginBottom: 5,
  },
  macellum: {
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
  },
  groceriesHomeDeliveredWithContainer: {
    top: 424,
    fontSize: FontSize.size_7xl,
    width: 351,
    textAlign: "left",
    color: Color.colorGray_300,
    lineHeight: 29,
    left: 25,
    position: "absolute",
  },
  orLoginWith: {
    top: 597,
    left: 140,
    fontSize: FontSize.size_sm,
    color: "#828282",
    fontFamily: FontFamily.montserratRegular,
  },
  signIn: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 896,
  },
});

export default SignIn;

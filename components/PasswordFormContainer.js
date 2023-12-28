import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const PasswordFormContainer = () => {
  return (
    <View style={[styles.frame, styles.frameLayout]}>
      <View style={styles.password}>
        <Text style={styles.password1}>Password</Text>
        <View style={[styles.frame1, styles.frameLayout]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
          <View style={styles.groupParent}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/group-6804.png")}
            />
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/vector-2.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    overflow: "hidden",
    width: 364,
  },
  password1: {
    fontSize: FontSize.size_base,
    lineHeight: 29,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  vectorIcon: {
    width: 20,
    height: 19,
  },
  frameChild: {
    width: 131,
    height: 8,
  },
  frameItem: {
    maxHeight: "100%",
    marginTop: 21,
    width: 364,
  },
  groupParent: {
    height: 29,
    paddingLeft: 4,
    marginTop: -13,
    width: 364,
  },
  frame1: {
    height: 35,
    alignItems: "flex-end",
    paddingRight: 0,
    paddingBottom: 0,
    marginTop: 15,
  },
  password: {
    height: 79,
    width: 364,
  },
  frame: {
    position: "absolute",
    top: 549,
    left: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PasswordFormContainer;

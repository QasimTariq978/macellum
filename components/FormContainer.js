import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer = ({
  beverageName,
  beverageSizeAndPrice,
  beverageCode,
  propTop,
}) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.frameParent, frameView1Style]}>
      <View style={styles.h1Parent}>
        <Text style={[styles.h1, styles.h1Typo]}>{beverageName}</Text>
        <Text style={styles.h2}>{beverageSizeAndPrice}</Text>
      </View>
      <View style={styles.h1Group}>
        <Text style={[styles.h11, styles.h1Typo]}>Rs 100</Text>
        <Image
          style={styles.backArrowIcon}
          resizeMode="cover"
          source={beverageCode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  h1Typo: {
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  h1: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    lineHeight: 18,
    width: 137,
  },
  h2: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorGray_200,
    marginTop: 5,
    textAlign: "left",
    lineHeight: 18,
  },
  h1Parent: {
    width: 137,
    height: 42,
  },
  h11: {
    lineHeight: 27,
    textAlign: "left",
  },
  backArrowIcon: {
    width: 8,
    height: 14,
    overflow: "hidden",
    marginLeft: 6,
  },
  h1Group: {
    width: 67,
    height: 27,
    justifyContent: "flex-end",
    marginLeft: 79,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    position: "absolute",
    top: 143,
    left: 106,
    width: 283,
    flexDirection: "row",
    height: 42,
  },
});

export default FormContainer;

import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CityContainer = ({
  locationLabel,
  areaLabel,
  imageLabel,
  cityCode,
  propTop,
  propPaddingLeft,
  propColor,
}) => {
  const frame1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("paddingLeft", propPaddingLeft),
    };
  }, [propPaddingLeft]);

  const islamabadStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View style={[styles.frame, frame1Style]}>
      <View style={styles.yourZone}>
        <Text style={[styles.yourCity, styles.yourCityFlexBox]}>
          {locationLabel}
        </Text>
        <View style={[styles.frame1, styles.frameSpaceBlock]}>
          <View style={[styles.islamabadParent, frameViewStyle]}>
            <Text
              style={[styles.islamabad, styles.yourCityFlexBox, islamabadStyle]}
            >
              {areaLabel}
            </Text>
            <Image
              style={[styles.frameChild, styles.frameSpaceBlock]}
              resizeMode="cover"
              source={imageLabel}
            />
          </View>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={cityCode}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yourCityFlexBox: {
    textAlign: "left",
    lineHeight: 29,
  },
  frameSpaceBlock: {
    marginTop: 10,
    width: 364,
  },
  yourCity: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorGray_200,
  },
  islamabad: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.darkDeep,
  },
  frameChild: {
    maxHeight: "100%",
  },
  islamabadParent: {
    height: 40,
    width: 364,
  },
  vectorIcon: {
    width: 13,
    height: 7,
    marginTop: -13,
  },
  frame1: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingTop: Padding.p_lg,
    height: 40,
    overflow: "hidden",
  },
  yourZone: {
    height: 79,
    width: 364,
  },
  frame: {
    position: "absolute",
    top: 401,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    width: 364,
  },
});

export default CityContainer;

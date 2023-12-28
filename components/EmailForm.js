import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EmailForm = ({
  userEmail,
  groceryEmail,
  imageDimensions,
  propTop,
  propColor,
}) => {
  const frameStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const grocerymacellumcomStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View style={[styles.frame, frameStyle]}>
      <View style={styles.email}>
        <Text style={[styles.email1, styles.email1FlexBox]}>{userEmail}</Text>
        <View
          style={[styles.grocerymacellumcomParent, styles.frameChildSpaceBlock]}
        >
          <Text
            style={[
              styles.grocerymacellumcom,
              styles.email1FlexBox,
              grocerymacellumcomStyle,
            ]}
          >
            {groceryEmail}
          </Text>
          <Image
            style={[styles.frameChild, styles.frameChildSpaceBlock]}
            resizeMode="cover"
            source={imageDimensions}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  email1FlexBox: {
    textAlign: "left",
    lineHeight: 29,
  },
  frameChildSpaceBlock: {
    marginTop: 10,
    width: 364,
  },
  email1: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorGray_200,
  },
  grocerymacellumcom: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.darkDeep,
  },
  frameChild: {
    maxHeight: "100%",
  },
  grocerymacellumcomParent: {
    height: 40,
  },
  email: {
    height: 79,
    width: 364,
  },
  frame: {
    position: "absolute",
    top: 441,
    left: 25,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    width: 364,
  },
});

export default EmailForm;

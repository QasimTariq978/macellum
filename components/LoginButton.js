import React, {useMemo} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {FontSize, FontFamily, Color, Border} from '../GlobalStyles';

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return {[key]: value === 'unset' ? undefined : value};
};
const LoginButton = ({
  navigation,
  buttonText,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft,
  onPress
}) => {
  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue('height', propHeight),
      ...getStyleValue('width', propWidth),
      ...getStyleValue('top', propTop),
      ...getStyleValue('right', propRight),
      ...getStyleValue('bottom', propBottom),
      ...getStyleValue('left', propLeft),
    };
  }, [propHeight, propWidth, propTop, propRight, propBottom, propLeft]);

  return (
    <TouchableOpacity
      // onPress={// navigation.navigate('Explore');}
      onPress={onPress}
      style={[styles.button, buttonStyle]}>
      <Text style={styles.getStarted}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  getStarted: {
    fontSize: FontSize.size_lg,
    lineHeight: 18,
    fontFamily: FontFamily.montserratAlternatesRegular,
    color: Color.colorGhostwhite,
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    height: '15.16%',
    width: '85.27%',
    top: '64.28%',
    right: '7.37%',
    bottom: '20.57%',
    left: '7.37%',
    borderRadius: Border.br_lgi,
    backgroundColor: Color.colorSeagreen_100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginButton;

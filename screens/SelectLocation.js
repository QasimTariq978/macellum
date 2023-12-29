import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CityContainer from '../components/CityContainer';
import StartButton from '../components/StartButton';
import {FontSize, FontFamily, Color} from '../GlobalStyles';
import SubmitButton from '../components/SubmitButton';

const SelectLocation = ({navigation}) => {
  return (
    <View style={styles.selectLocation}>
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require('../assets/frame2.png')}
      />
      <View style={styles.frame}>
        <Image
          style={[styles.frameIcon1, styles.framePosition]}
          resizeMode="cover"
          source={require('../assets/frame3.png')}
        />
        <View style={[styles.frame1, styles.textFlexBox]}>
          <View style={[styles.text, styles.textFlexBox]}>
            <Text style={styles.selectYourLocation}>Select Your Location</Text>
            <Text
              style={
                styles.swithchOnYour
              }>{`Swithch on your location to stay in tune with
what’s happening in your area
`}</Text>
          </View>
        </View>
        <CityContainer
          locationLabel="Your City"
          areaLabel="Islamabad"
          imageLabel={require('../assets/vector-23.png')}
          cityCode={require('../assets/vector4.png')}
          propTop={401}
          propColor="#181725"
        />
        <CityContainer
          locationLabel="Your Area"
          areaLabel="Enter your Area"
          imageLabel={require('../assets/vector-24.png')}
          cityCode={require('../assets/vector5.png')}
          propTop={510}
          propPaddingLeft={4}
          propColor="#b1b1b1"
        />
        <SubmitButton
          buttonText="Submit"
          propHeight={67}
          propWidth={364}
          propTop={629}
          propRight="unset"
          propBottom="unset"
          propLeft={0}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    position: 'absolute',
    overflow: 'hidden',
  },
  textFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameIcon: {
    width: 415,
    overflow: 'hidden',
    height: 896,
  },
  frameIcon1: {
    top: 0,
    left: 70,
    width: 225,
    height: 171,
  },
  selectYourLocation: {
    fontSize: FontSize.size_7xl,
    lineHeight: 29,
    fontFamily: FontFamily.montserratRegular,
    color: Color.darkDeep,
    textAlign: 'center',
  },
  swithchOnYour: {
    fontSize: FontSize.size_base,
    lineHeight: 15,
    fontWeight: '500',
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorGray_200,
    marginTop: 15,
    textAlign: 'center',
  },
  text: {
    width: 363,
    height: 101,
  },
  frame1: {
    top: 211,
    left: 0,
    position: 'absolute',
    overflow: 'hidden',
    width: 364,
  },
  frame: {
    height: 776,
    marginTop: -776,
    width: 364,
    overflow: 'hidden',
  },
  selectLocation: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    height: 896,
  },
});

export default SelectLocation;

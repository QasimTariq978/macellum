import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import WelcomeContainer from '../components/WelcomeContainer';
import {Color} from '../GlobalStyles';

const Start = ({navigation}) => {
  return (
    <View style={styles.start}>
      <View style={styles.frame}>
        <Image
          style={styles.dalle2023121321431}
          resizeMode="cover"
          source={require('../assets/dalle-20231213-2143-1.png')}
        />
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require('../assets/8140-1.png')}
        />
      </View>
      <View style={styles.frame1}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require('../assets/frame11.png')}
        />
        <WelcomeContainer navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dalle2023121321431: {
    width: 1024,
    height: 1024,
    marginRight: 10,
  },
  icon: {
    position: 'relative',
    width: 414,
    height: 896,
    marginTop: -966,
  },
  frame: {
    position: 'absolute',
    top: -58,
    left: -310,
    width: 1034,
    height: 1000,
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  frameIcon: {
    position: 'relative',
    width: 96,
    height: 59,
    marginBottom: 10,
    overflow: 'hidden',
  },
  frame1: {
    position: 'absolute',
    top: 369,
    left: 0,
    width: 424,
    height: 527,
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
  },
  start: {
    position: 'relative',
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: '100%',
    height: 896,
    overflow: 'hidden',
  },
});

export default Start;

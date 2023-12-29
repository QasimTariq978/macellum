import * as React from 'react';
import {useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PasswordFormContainer from '../components/PasswordFormContainer';
import EmailForm from '../components/EmailForm';
import {FontFamily, FontSize, Color} from '../GlobalStyles';
import auth from '@react-native-firebase/auth';
import SignUpButton from '../components/SignUpButton';

const SignUp = ({navigation}) => {
  const [emailData, setEmailData] = useState('');
  const [password, setPassword] = useState('');
  const signUp = () => {
    console.log('User Email:', emailData);
    console.log('Password:', password);
    auth()
      .createUserWithEmailAndPassword(emailData, password)
      .then(() => {
        Alert.alert('User Created');
        navigation.navigate('LogIn');
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View style={styles.signUp}>
      <Image
        style={[styles.frameIcon, styles.frameIconPosition]}
        resizeMode="cover"
        source={require('../assets/frame.png')}
      />
      <PasswordFormContainer setPasswordData={setPassword} />
      <SignUpButton
        buttonText="Sign Up"
        propHeight={67}
        propWidth={364}
        propTop={670}
        propRight="unset"
        propBottom="unset"
        propLeft={25}
        onPress={signUp}
      />
      <EmailForm setEmailData={setEmailData} />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={styles.text}>
          <Text style={styles.signUp1}>Sign Up</Text>
          <Text
            style={[
              styles.enterYourCredentials,
              styles.enterYourCredentialsTypo,
            ]}>
            Enter your Credentials to continue
          </Text>
        </View>
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}></View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LogIn');
        }}>
        <View style={[styles.frame2, styles.frameFlexBox]}>
          <Text style={[styles.alreadyHaveAnContainer, styles.containerTypo]}>
            <Text style={styles.text1}>{`Already have an account? `}</Text>
            <Text style={styles.termsOfService}>Sign In</Text>
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  frameIconPosition: {
    position: 'absolute',
    overflow: 'hidden',
  },
  frameLayout: {
    width: 364,
    left: 25,
  },
  frameFlexBox: {
    justifyContent: 'center',
    position: 'absolute',
    overflow: 'hidden',
  },
  enterYourCredentialsTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: '500',
  },
  containerTypo: {
    height: 10,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    textAlign: 'left',
  },
  frameIcon: {
    top: 0,
    left: 0,
    width: 414,
    height: 896,
    position: 'absolute',
  },
  frameIcon1: {
    top: 487,
    height: 15,
    position: 'absolute',
    overflow: 'hidden',
  },
  signUp1: {
    fontSize: FontSize.size_7xl,
    lineHeight: 29,
    textAlign: 'left',
    color: Color.colorGray_300,
    fontFamily: FontFamily.montserratRegular,
  },
  enterYourCredentials: {
    fontSize: FontSize.size_base,
    lineHeight: 15,
    marginTop: 15,
    color: Color.colorGray_200,
    textAlign: 'left',
  },
  text: {
    width: 280,
    height: 59,
  },
  frame: {
    top: 233,
    width: 364,
    left: 25,
  },
  byContinuingYou: {
    color: Color.colorGray_200,
  },
  text1: {
    color: Color.colorGray_300,
  },
  termsOfService: {
    color: Color.colorMediumseagreen_100,
  },
  byContinuingYouContainer: {
    width: 359,
    height: 39,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: '500',
  },
  frame1: {
    top: 648,
    width: 364,
    left: 25,
  },
  alreadyHaveAnContainer: {
    height: 14,
    width: 241,
    fontFamily: FontFamily.montserratRegular,
  },
  frame2: {
    top: 770,
    left: 87,
    alignItems: 'center',
    width: 241,
  },
  signUp: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    height: 896,
  },
});

export default SignUp;

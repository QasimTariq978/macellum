import * as React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import LoginButton from '../components/LoginButton';
import {FontFamily, FontSize, Color} from '../GlobalStyles';
import { TextInput } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth'; // Assuming Firebase authentication is set up properly


const LogIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email)
    console.log(password)
    if (!email || !password) {
      Alert.alert('Missing Information', 'Please enter your email and password.');
      return;
    }

    auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
        // User successfully logged in
        const user = userCredential.user;
        console.log('User logged in:', user);
        // Perform any actions after successful login
        // For example, navigate to another screen:
        // navigation.navigate('Home');
      }).catch((error) => {
        // Handle login errors
        console.error('Login error:', error);
        Alert.alert('Login Failed', 'Invalid email or password.');
        // Display error messages or handle errors as needed
      });
  };

  return (
    <View style={styles.logIn}>
      <Image
        style={[styles.maskGroupIcon, styles.logInChildPosition]}
        resizeMode="cover"
        source={require('../assets/mask-group.png')}
      />
      <Image
        style={[styles.maskGroupIcon, styles.logInChildPosition]}
        resizeMode="cover"
        source={require('../assets/mask-group.png')}
      />
      <View style={[styles.email, styles.emailLayout, styles.inputContainer]}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={[styles.password, styles.emailLayout, styles.inputContainer]}>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <LoginButton
        navigation={navigation}
        buttonText="Log In"
        propHeight={67}
        propWidth={364}
        propTop={583}
        propRight="unset"
        propBottom="unset"
        propLeft={25}
        onPress={handleLogin}
      />
      <View style={[styles.email, styles.emailLayout]}>
        <View
          style={[styles.grocerymacellumcomParent, styles.groupParentLayout]}>
                <View style={[styles.email, styles.inputContainer]}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

          <Image
            style={[styles.groupInner, styles.groupIconLayout]}
            resizeMode="cover"
            source={require('../assets/vector-28.png')}
          />
        </View>
        <Text style={[styles.password1, styles.password1Position]}>Email</Text>
      </View>
      <View style={styles.text}>
        <Text style={[styles.logIn1, styles.logIn1Layout]}>Log In</Text>
        <Text style={[styles.enterYourEmail, styles.enterYourEmailTypo]}>
          Enter your Email and Password
        </Text>
      </View>
      <Text style={[styles.forgotPassword, styles.forgotPasswordLayout]}>
        Forgot Password?
      </Text>
      <Text style={[styles.dontHaveAnContainer, styles.forgotPasswordLayout]}>
        <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
        <Text style={styles.signUp}>Sign Up</Text>
      </Text>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        resizeMode="cover"
        source={require('../assets/group.png')}
      />
      <View style={[styles.logInChild, styles.logInChildPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  logInChildPosition: {
    width: 414,
    left: 0,
    position: 'absolute',
  },
  emailLayout: {
    height: 79,
    width: 364,
    left: 25,
    position: 'absolute',
  },
  groupParentLayout: {
    width: 364,
    left: 0,
  },
  groupIconLayout: {
    maxHeight: '100%',
    position: 'absolute',
  },
  password1Position: {
    textAlign: 'left',
    left: 0,
    position: 'absolute',
  },
  enterYourEmailTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: '500',
  },
  logIn1Layout: {
    lineHeight: 29,
    top: 0,
  },
  forgotPasswordLayout: {
    height: 14,
    lineHeight: 15,
    letterSpacing: 0.7,
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    position: 'absolute',
  },
  maskGroupIcon: {
    top: 0,
    height: 896,
  },
  groupChild: {
    left: 4,
    width: 115,
    height: 7,
    top: 0,
    position: 'absolute',
  },
  groupItem: {
    top: 29,
    width: 364,
    left: 0,
  },
  groupParent: {
    top: 50,
    height: 29,
    position: 'absolute',
  },
  password1: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_base,
    textAlign: 'left',
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 29,
    top: 0,
  },
  vectorIcon: {
    height: '24.05%',
    width: '5.47%',
    top: '55.98%',
    right: '0%',
    bottom: '19.97%',
    left: '94.53%',
    maxWidth: '100%',
    overflow: 'hidden',
  },
  password: {
    top: 441,
  },
  grocerymacellumcom: {
    fontSize: FontSize.size_lg,
    color: Color.darkDeep,
    textAlign: 'left',
    left: 0,
    position: 'absolute',
    lineHeight: 29,
    top: 0,
  },
  groupInner: {
    top: 40,
    width: 364,
    left: 0,
  },
  grocerymacellumcomParent: {
    top: 39,
    height: 40,
    position: 'absolute',
  },
  email: {
    top: 332,
  },
  logIn1: {
    fontSize: FontSize.size_7xl,
    textAlign: 'center',
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    left: 0,
    lineHeight: 29,
    position: 'absolute',
  },
  enterYourEmail: {
    top: 44,
    lineHeight: 15,
    textAlign: 'left',
    left: 0,
    position: 'absolute',
    color: Color.colorGray_200,
    fontSize: FontSize.size_base,
  },
  text: {
    top: 233,
    width: 254,
    height: 59,
    left: 25,
    position: 'absolute',
  },
  forgotPassword: {
    top: 539,
    left: 245,
    width: 144,
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: '500',
  },
  dontHaveAn: {
    color: Color.darkDeep,
  },
  signUp: {
    color: Color.colorMediumseagreen_100,
  },
  dontHaveAnContainer: {
    top: 675,
    left: 93,
    width: 228,
    fontFamily: FontFamily.montserratRegular,
  },
  groupIcon: {
    height: '6.62%',
    marginLeft: -41.1,
    top: '11.25%',
    bottom: '82.13%',
    left: '50%',
    width: 79,
  },
  logInChild: {
    top: 749,
    height: 147,
  },
  logIn: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    height: 896,
  },
});

export default LogIn;

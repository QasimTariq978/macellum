import * as React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {FontSize, FontFamily, Color, Border} from '../GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login with AsyncStorage credentials
  const handleLoginWithAsyncStorage = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('userEmail');
      const storedPassword = await AsyncStorage.getItem('userPassword');

      if (storedEmail === email && storedPassword === password) {
        navigation.navigate('Explore');
      } else {
        Alert.alert('Login Failed', 'Invalid email or password.');
      }
    } catch (error) {
      console.error('AsyncStorage Error:', error);
      Alert.alert('Login Failed', 'Error while retrieving credentials.');
    }
  };

  // Function to handle login with Firebase credentials
  const handleLoginWithFirebase = () => {
    if (!email || !password) {
      Alert.alert('Missing Information', 'Please enter your email and password.');
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('User logged in:', user);
        navigation.navigate('Explore');
      })
      .catch(error => {
        console.error('Login error:', error);
        Alert.alert('Login Failed', 'Invalid email or password.');
      });
  };

  // Determine which login method to use based on comments
  const useFirebaseAuth = true; // Set this to true to use Firebase authentication

  const handleLogin = useFirebaseAuth ? handleLoginWithFirebase : handleLoginWithAsyncStorage;


  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        keyboardShouldPersistTaps="handled">
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
          <View
            style={[styles.email, styles.emailLayout, styles.inputContainer]}>
            <Text style={styles.password1}>Email</Text>
            <TextInput
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor={'gray'}
              color="black"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View
            style={[
              styles.password,
              styles.emailLayout,
              styles.inputContainer,
            ]}>
            <Text style={styles.password1}>Password</Text>
            <TextInput
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
              color="black"
              placeholder="Enter your password"
              placeholderTextColor={'gray'}
              secureTextEntry={true}
            />
          </View>

          <View style={[styles.email, styles.emailLayout]}>
            <View
              style={[
                styles.grocerymacellumcomParent,
                styles.groupParentLayout,
              ]}>
              <View style={[styles.email, styles.inputContainer]}>
                <TextInput
                  value={email}
                  onChangeText={text => setEmail(text)}
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
            <Text style={[styles.password1, styles.password1Position]}>
              Email
            </Text>
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
          <Text
            style={[styles.dontHaveAnContainer, styles.forgotPasswordLayout]}>
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
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Add padding at the bottom to avoid button overlap
  },
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
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
  },
  logIn1Layout: {
    top: -30,
    left: -3,
  },
  forgotPasswordLayout: {
    height: 14,
    lineHeight: 15,
    letterSpacing: 0.7,
    fontSize: 16,
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
    color: 'black',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
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
    borderColor: 'black',
  },
  grocerymacellumcom: {
    fontSize: 24,
    color: 'black',
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
    fontSize: 48,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Montserrat-Regular',
    left: 0,
    position: 'absolute',
  },
  enterYourEmail: {
    top: 44,
    lineHeight: 15,
    textAlign: 'left',
    left: 0,
    position: 'absolute',
    color: 'gray',
    fontSize: 16,
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
    color: 'black',
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
  },
  dontHaveAn: {
    color: 'black',
  },
  signUp: {
    color: 'green',
  },
  dontHaveAnContainer: {
    top: 675,
    left: 93,
    width: 228,
    fontFamily: 'Montserrat-Regular',
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
    position: 'relative',
  },
  logIn: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    paddingBottom: 20, // Adjusted paddingBottom
    height: 896,
  },
  loginButton: {
    position: 'absolute',
    height: '10%',
    width: '88%',
    top: '78%',
    right: '7.37%',
    bottom: '20.57%',
    left: '4%',
    borderRadius: Border.br_lgi,
    backgroundColor: Color.colorSeagreen_100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
});

export default LogIn;

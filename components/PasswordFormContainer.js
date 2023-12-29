import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import {FontSize, FontFamily, Color} from '../GlobalStyles';

const PasswordFormContainer = ({setPasswordData}) => {
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Automatically trigger sign-up action when password input changes
    if (password.length > 0) {
      console.log(password);
      setPasswordData(password);
      // Perform the sign-up action here using setPasswordData or any other necessary logic
    }
  }, [password, setPasswordData]);

  return (
    <View style={[styles.frame, styles.frameLayout]}>
      <View style={styles.password}>
        <Text style={styles.password1}>Password</Text>
        <TextInput
          style={styles.passwordInput}
          value={password}
          color="black"
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          placeholder="Enter Password"
        />
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   frameLayout: {
//     overflow: 'hidden',
//     width: 364,
//   },
//   password1: {
//     fontSize: FontSize.size_base,
//     lineHeight: 29,
//     fontFamily: FontFamily.montserratRegular,
//     color: Color.colorGray_200,
//     textAlign: 'left',
//   },
//   password: {
//     height: 79,
//     width: 364,
//   },
//   frame: {
//     position: 'absolute',
//     top: 549,
//     left: 25,
//     alignItems: 'center',
//     justifyContent: 'center',
//     bottom: 230,
//   },
//   passwordInput: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     padding: 8,
//     marginTop: 10,
//     borderRadius: 5,
//   },
// });

const styles = StyleSheet.create({
  frameLayout: {
    width: 364,
    left: 25,
    marginTop: 10, // Add marginTop to create some space
  },
  password1: {
    fontSize: FontSize.size_base,
    lineHeight: 29,
    fontFamily: FontFamily.montserratRegular,
    color: 'black',
    textAlign: 'left',
    marginBottom: 10, // Add marginBottom for separation
  },
  password: {
    height: 79,
    width: 364,
    marginTop: 10, // Add marginTop to create some space
  },
  frame: {
    position: 'absolute',
    top: 450,
    left: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1, // Add zIndex to ensure it appears above other components
  },
  passwordInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginTop: 10,
    borderRadius: 5,
  },
});

export default PasswordFormContainer;

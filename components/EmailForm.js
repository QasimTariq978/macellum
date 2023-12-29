import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import {FontSize, FontFamily, Color} from '../GlobalStyles';

const EmailForm = ({setEmailData}) => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Trigger sign-up action when userEmail input changes
    if (userEmail.length > 0) {
      setEmailData(userEmail);
      // Perform the sign-up action here using setEmailData or any other necessary logic
    }
  }, [userEmail, setEmailData]);

  return (
    <View style={styles.frame}>
      <Text
        style={{
          color: 'black',
          textAlign: 'left',
          alignSelf: 'flex-start',
          fontSize: FontSize.size_base,
          fontFamily: FontFamily.montserratRegular,
          marginBottom: 13,
        }}>
        Email
      </Text>
      <View style={styles.email}>
        <TextInput
          style={[styles.email1, styles.email1FlexBox]}
          value={userEmail}
          onChangeText={text => setUserEmail(text)}
          placeholder="Enter Email Here"
          placeholderTextColor={'gray'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  email1FlexBox: {
    textAlign: 'left',
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
    borderBottomWidth: 1,
    borderBottomColor: Color.colorDarkslategray,
    marginBottom: 10,
  },
  grocerymacellumcom: {
    fontSize: FontSize.size_lg,
    fontWeight: '500',
    fontFamily: FontFamily.montserratMedium,
    color: Color.darkDeep,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorDarkslategray,
  },
  frameChild: {
    maxHeight: '100%',
  },
  grocerymacellumcomParent: {
    height: 40,
  },
  email: {
    height: 79,
    width: 364,
  },
  frame: {
    position: 'absolute',
    top: 350,
    left: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: 364,
  },
  inputGroceryEmail: {
    marginTop: 10,
  },

  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signUpButton: {
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 5,
  },
});

export default EmailForm;

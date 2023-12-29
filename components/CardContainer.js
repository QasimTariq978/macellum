import React, {useMemo} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {FontSize, Color, FontFamily, Border} from '../GlobalStyles';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return {[key]: value === 'unset' ? undefined : value};
};
const CardContainer = ({
  juiceName,
  productDimensions,
  juiceImageUrl,
  propLeft,
  propTop,
  propLeft1,
}) => {
  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue('left', propLeft),
    };
  }, [propLeft]);

  const h1Style = useMemo(() => {
    return {
      ...getStyleValue('top', propTop),
    };
  }, [propTop]);

  const h11Style = useMemo(() => {
    return {
      ...getStyleValue('left', propLeft1),
    };
  }, [propLeft1]);

  const addProductToFirestore = async (productName, productPrice) => {
    try {
      const userId = auth().currentUser.uid; // Get the current user's UID

      // Reference to the user's document in Firestore
      const userDocRef = firestore().collection('users').doc(userId);

      // Reference to the 'products' collection within the user's document
      const productsCollectionRef = userDocRef.collection('products');

      // Add the new product document to the 'products' collection
      await productsCollectionRef.add({
        name: productName,
        price: productPrice,
      });

      console.log('Product added to Firestore successfully!');
    } catch (error) {
      console.error('Error adding product to Firestore:', error);
    }
  };

  return (
    <View style={[styles.frameParent, styles.parentLayout, frameView2Style]}>
      <View style={[styles.h1Parent, styles.parentLayout]}>
        <Text style={[styles.h1, h1Style]}>{juiceName}</Text>
        <Text style={[styles.h11, styles.h2FlexBox, h11Style]}>Rs 100</Text>
        <TouchableOpacity
          onPress={() => {
            addProductToFirestore(juiceName, 100); // Adjust product name and price accordingly
          }}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={productDimensions}
          />
        </TouchableOpacity>
        <Text style={[styles.h2, styles.h2FlexBox]}>1L, Price</Text>
      </View>
      <Image
        style={styles.treeTopJuiceAppleGrape64oIcon}
        resizeMode="cover"
        source={juiceImageUrl}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 249,
    width: 173,
    position: 'absolute',
  },
  h2FlexBox: {
    alignItems: 'center',
    display: 'flex',
    lineHeight: 18,
    textAlign: 'left',
    position: 'absolute',
  },
  h1: {
    top: 130,
    fontSize: FontSize.size_base,
    lineHeight: 20,
    textAlign: 'left',
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    letterSpacing: 0,
    left: 15,
    position: 'absolute',
  },
  h11: {
    height: '7.24%',
    width: '38.43%',
    top: '82.29%',
    left: '8.71%',
    fontSize: FontSize.size_lg,
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    letterSpacing: 0,
    display: 'flex',
    lineHeight: 18,
  },
  frameChild: {
    top: 188,
    left: 114,
    borderRadius: Border.br_mid,
    width: 46,
    height: 46,
    position: 'absolute',
  },
  h2: {
    top: 172,
    fontSize: FontSize.size_sm,
    fontWeight: '500',
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorGray_200,
    width: 89,
    height: 15,
    display: 'flex',
    lineHeight: 18,
    left: 15,
  },
  h1Parent: {
    top: 0,
    left: 0,
    borderRadius: Border.br_lg,
    shadowColor: 'rgba(0, 0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
  },
  treeTopJuiceAppleGrape64oIcon: {
    top: 18,
    left: 40,
    width: 93,
    height: 93,
    position: 'absolute',
  },
  frameParent: {
    top: 369,
    left: 25,
  },
});

export default CardContainer;

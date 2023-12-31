import * as React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import StartButton from '../components/StartButton';
import {Color, FontSize, FontFamily, Border} from '../GlobalStyles';
import AddToCart from '../components/AddToCart';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ProductDetail = ({navigation}) => {
  const addProductToFirestore = async (productName, productPrice) => {
    try {
      const userId = auth().currentUser.uid; // Get the current user's UID

      // Reference to the user's document in Firestore
      const userDocRef = firestore().collection('users').doc(userId);

      // Reference to the 'products' collection within the user's document
      const productsCollectionRef = userDocRef.collection('products');

      // Add the new product document to the 'products' collection
      await productsCollectionRef.add({
        name: 'Red Apples',
        price: "100",
      });

      console.log('Product added to Firestore successfully!');
    } catch (error) {
      console.error('Error adding product to Firestore:', error);
    }
  };
  return (
    <View style={styles.productDetail}>
      <View style={styles.productDetailChild} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Explore');
        }}>
        <Image
          style={[styles.backArrowIcon, styles.frame115sLayout]}
          resizeMode="cover"
          source={require('../assets/back-arrow12.png')}
        />
      </TouchableOpacity>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1]}
        resizeMode="cover"
        source={require('../assets/vector17.png')}
      />
      <Text style={[styles.h1, styles.h1FlexBox]}>Red Apples</Text>
      <Image
        style={styles.bookmark1Icon}
        resizeMode="cover"
        source={require('../assets/bookmark-15.png')}
      />
      <Text style={[styles.h2, styles.h2FlexBox]}>1kg, Price</Text>
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require('../assets/vector18.png')}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require('../assets/vector19.png')}
        />
        <Text style={styles.text}>1</Text>
      </View>
      <Text style={[styles.rs100, styles.h1FlexBox]}>Rs 100</Text>
      <Image
        style={[styles.productDetailItem, styles.productLayout]}
        resizeMode="cover"
        source={require('../assets/vector-3.png')}
        a
      />
      <Image
        style={[styles.productDetailInner, styles.productLayout]}
        resizeMode="cover"
        source={require('../assets/vector-4.png')}
      />
      <Image
        style={[styles.productDetailChild1, styles.productLayout]}
        resizeMode="cover"
        source={require('../assets/vector-4.png')}
      />
      <View style={styles.h2Parent}>
        <Text style={[styles.h21, styles.h2Typo]}>Product Detail</Text>
        <Text style={[styles.h22, styles.h2FlexBox]}>
          <Text style={styles.h2Txt}>
            Fresh Apples from the Farm,{`Organic, Without pesticides `}
          </Text>
        </Text>
      </View>
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout1]}
        resizeMode="cover"
        source={require('../assets/vector20.png')}
      />
      <Text style={[styles.h23, styles.h23Typo]}>Nutrition</Text>
      <View style={[styles.frame115s, styles.frame115sLayout]}>
        <Text style={[styles.h11, styles.h2FlexBox]}>100 g</Text>
      </View>
      <Text style={[styles.h24, styles.h23Typo]}>Review</Text>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require('../assets/group-6834.png')}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require('../assets/vector21.png')}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require('../assets/vector22.png')}
      />
      <View style={[styles.vectorParent, styles.pngfuel11Position]}>
        <Image
          style={[styles.vectorIcon6, styles.vectorIconPosition]}
          resizeMode="cover"
          source={require('../assets/vector23.png')}
        />
        <View style={styles.frameItem} />
        <View style={[styles.frameInner, styles.frameInnerLayout]} />
        <View style={[styles.rectangleView, styles.frameInnerLayout]} />
      </View>
      <Image
        style={[styles.pngfuel11, styles.pngfuel11Position]}
        resizeMode="cover"
        source={require('../assets/pngfuel-1-1.png')}
      />
      <AddToCart
        buttonText="Add To Cart"
        propHeight={67}
        propWidth={364}
        propTop={730}
        propRight="unset"
        propBottom="unset"
        propLeft={25}
        onPress={() => {
          addProductToFirestore('Diet Coke', 100); // Adjust product name and price accordingly
        }}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconLayout1]}
        resizeMode="cover"
        source={require('../assets/vector24.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frame115sLayout: {
    height: 18,
    position: 'absolute',
  },
  vectorIconLayout1: {
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  h1FlexBox: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    color: Color.darkDeep,
  },
  h2FlexBox: {
    color: Color.colorGray_200,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
  },
  frameChildLayout: {
    height: 46,
    position: 'absolute',
  },
  vectorIconPosition: {
    left: '0%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  productLayout: {
    width: 364,
    maxHeight: '100%',
    left: 25,
    position: 'absolute',
  },
  h2Typo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 18,
  },
  h23Typo: {
    left: '7.25%',
    width: '26.21%',
    fontSize: FontSize.size_base,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 18,
    position: 'absolute',
  },
  vectorIconLayout: {
    width: '2.03%',
    height: '1.56%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  pngfuel11Position: {
    left: 70,
    position: 'absolute',
  },
  frameInnerLayout: {
    width: 3,
    backgroundColor: Color.colorDarkgray_100,
    height: 3,
    borderRadius: Border.br_smi,
    top: 203,
    position: 'absolute',
  },
  productDetailChild: {
    left: 0,
    borderBottomRightRadius: Border.br_6xl,
    borderBottomLeftRadius: Border.br_6xl,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 414,
    height: 350,
    top: 0,
    position: 'absolute',
  },
  backArrowIcon: {
    top: 57,
    width: 10,
    left: 25,
    overflow: 'hidden',
  },
  vectorIcon: {
    height: '2.06%',
    width: '4.47%',
    top: '6.33%',
    right: '6.21%',
    bottom: '91.61%',
    left: '89.32%',
  },
  h1: {
    width: '50.58%',
    top: '43%',
    alignItems: 'center',
    fontFamily: FontFamily.montserratRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    display: 'flex',
    position: 'absolute',
    left: '6.04%',
  },
  bookmark1Icon: {
    top: 398,
    left: 365,
    height: 24,
    width: 24,
    position: 'absolute',
    overflow: 'hidden',
  },
  h2: {
    height: '4%',
    width: '19.95%',
    top: '47%',
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratRegular,
    left: '6.04%',
    position: 'absolute',
  },
  frameChild: {
    left: 37,
    borderRadius: Border.br_mid,
    borderStyle: 'solid',
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: 46,
    top: 0,
  },
  vectorIcon1: {
    height: '37.2%',
    top: '31.29%',
    bottom: '31.51%',
    left: '85.8%',
    right: '0%',
    width: '14.2%',
  },
  vectorIcon2: {
    height: '6.13%',
    top: '46.83%',
    right: '85.8%',
    bottom: '47.05%',
    width: '14.2%',
  },
  text: {
    top: 14,
    left: 56,
    fontSize: FontSize.size_lg,
    textAlign: 'left',
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 18,
    position: 'absolute',
  },
  rectangleParent: {
    top: 476,
    width: 120,
    left: 25,
  },
  rs100: {
    top: 486,
    left: 302,
    width: 95,
    height: 40,
    alignItems: 'center',
    fontFamily: FontFamily.montserratRegular,
    letterSpacing: 0,
    fontSize: FontSize.size_5xl,
    display: 'flex',
    position: 'absolute',
  },
  productDetailItem: {
    top: 552,
  },
  productDetailInner: {
    top: 679,
  },
  productDetailChild1: {
    top: 734,
  },
  h21: {
    width: 109,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    color: Color.darkDeep,
  },
  h2Txt: {
    width: '100%',
  },
  h22: {
    fontSize: 13,
    lineHeight: 21,
    textTransform: 'capitalize',
    fontWeight: '500',
    fontFamily: FontFamily.montserratMedium,
    marginTop: 10,
    width: 359,
  },
  h2Parent: {
    top: 561,
    left: 30,
    height: 88,
    width: 359,
    position: 'absolute',
  },
  vectorIcon3: {
    height: '0.94%',
    width: '3.38%',
    top: '63.97%',
    bottom: '35.09%',
    left: '90.58%',
    right: '6.04%',
  },
  h23: {
    top: '78.04%',
  },
  h11: {
    fontSize: 9,
    lineHeight: 14,
    width: 24,
    fontFamily: FontFamily.montserratRegular,
  },
  frame115s: {
    top: 697,
    left: 326,
    borderRadius: 5,
    backgroundColor: '#ebebeb',
    width: 34,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  h24: {
    top: '83.95%',
  },
  groupIcon: {
    width: '22.34%',
    top: '84.06%',
    right: '12.95%',
    bottom: '14.37%',
    left: '64.71%',
    height: '1.56%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  vectorIcon4: {
    top: '84.17%',
    right: '6.09%',
    bottom: '14.26%',
    left: '91.88%',
  },
  vectorIcon5: {
    bottom: '20.4%',
    left: '91.93%',
    top: '78.04%',
    right: '6.04%',
  },
  vectorIcon6: {
    height: '81.6%',
    top: '0%',
    bottom: '18.4%',
    right: '0%',
    width: '100%',
  },
  frameItem: {
    left: 123,
    backgroundColor: Color.colorSeagreen_100,
    width: 16,
    height: 3,
    borderRadius: Border.br_smi,
    top: 203,
    position: 'absolute',
  },
  frameInner: {
    left: 142,
  },
  rectangleView: {
    left: 149,
  },
  vectorParent: {
    top: 134,
    width: 278,
    height: 206,
  },
  pngfuel11: {
    top: 142,
    width: 296,
    height: 172,
    opacity: 0.5,
  },
  vectorIcon7: {
    height: '22.23%',
    width: '79.54%',
    top: '11.47%',
    right: '10.24%',
    bottom: '66.29%',
    left: '10.22%',
  },
  productDetail: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 896,
    overflow: 'hidden',
    width: '100%',
  },
});

export default ProductDetail;

import * as React from 'react';
import {Text, StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import CardContainer from '../components/CardContainer';
import {Color, FontFamily, FontSize, Border} from '../GlobalStyles';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Beverages = ({navigation}) => {
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
    <View style={styles.beverages}>
      <Text style={styles.beverages1}>Beverages</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Explore');
        }}>
        <Image
          style={[styles.backArrowIcon, styles.backArrowIconPosition]}
          resizeMode="cover"
          source={require('../assets/back-arrow11.png')}
        />
      </TouchableOpacity>
      <Image
        style={[styles.beveragesChild, styles.backArrowIconPosition]}
        resizeMode="cover"
        source={require('../assets/group-68391.png')}
      />
      <Image
        style={styles.pngfuel11Icon}
        resizeMode="cover"
        source={require('../assets/pngfuel-111.png')}
      />
      <Image
        style={styles.pngfuel12Icon}
        resizeMode="cover"
        source={require('../assets/pngfuel-121.png')}
      />
      <Text style={[styles.h2, styles.h2Typo]}>500ml, Price</Text>
      <Text style={[styles.h1, styles.h1Clr, {marginTop: 25}]}>Rs 100</Text>
      {/* <View style={[styles.frameParent, styles.frameLayout]}>
        <View style={[styles.h1Parent, styles.h1GroupShadowBox]}>
          <Text style={[styles.h11, styles.h11Position]}>Coca Cola Can</Text>
          <Text style={[styles.h12, styles.h12Layout]}>Rs 100</Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require('../assets/frame-68136.png')}
          />
          <Text style={[styles.h21, styles.h21Typo]}>500ml, Price</Text>
        </View>
        <Image
          style={styles.pngfuel12Icon1}
          resizeMode="cover"
          source={require('../assets/pngfuel-122.png')}
        />
        <Image
          style={[styles.pngfuel13Icon, styles.iconPosition1]}
          resizeMode="cover"
          source={require('../assets/pngfuel-131.png')}
        />
      </View> */}
      {/* <View style={[styles.frameGroup, styles.frameLayout]}>
        <View style={[styles.h1Group, styles.h1GroupShadowBox]}>
          <Text style={[styles.h11, styles.h11Position]}>{`Pepsi Can `}</Text>
          <Text style={[styles.h14, styles.h12Layout]}>Rs 100</Text>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require('../assets/frame-68137.png')}
          />
          <Text style={[styles.h22, styles.h11Position]}>{`500ml, Price
`}</Text>
        </View>
        <Image
          style={[styles.pngfuel13Icon1, styles.iconPosition]}
          resizeMode="cover"
          source={require('../assets/pngfuel-132.png')}
        />
        <Image
          style={[styles.pngfuel14Icon, styles.iconPosition1]}
          resizeMode="cover"
          source={require('../assets/pngfuel-141.png')}
        />
      </View> */}
      <View style={[styles.frameContainer, styles.framePosition]}>
        <View style={[styles.h1Container, styles.h1GroupShadowBox]}>
          <Text style={[styles.h11, styles.h11Position]}>Diet Coke</Text>
          <Text style={styles.h16}>Rs 100</Text>
          <TouchableOpacity
            onPress={() => {
              addProductToFirestore('Diet Coke', 100); // Adjust product name and price accordingly
            }}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require('../assets/frame-68138.png')}
            />
          </TouchableOpacity>
          <Text style={[styles.h23, styles.h21Typo]}>500ml, Price</Text>
        </View>
        <Image
          style={[styles.pngfuel10Icon, styles.iconPosition]}
          resizeMode="cover"
          source={require('../assets/pngfuel-10.png')}
        />
        <Image
          style={styles.pngfuel11Icon1}
          resizeMode="cover"
          source={require('../assets/pngfuel-112.png')}
        />
      </View>

      <CardContainer
        juiceName={`Apple & Grape 
Juice`}
        productDimensions={require('../assets/frame-68139.png')}
        juiceImageUrl={require('../assets/treetopjuiceapplegrape64oz-11.png')}
        propLeft={25}
        propTop={130}
        propLeft1="8.71%"
      />
      <CardContainer
        
        juiceName="Orange Juice"
        productDimensions={require('../assets/frame-681310.png')}
        juiceImageUrl={require('../assets/treetopjuiceapplegrape64oz-12.png')}
        propLeft={213}
        propTop={140}
        propLeft1="8.66%"
      />
      <View style={[styles.frameView, styles.framePosition]}>
        <Text style={[styles.h11, styles.h11Position]}>Sprite Can</Text>
        <TouchableOpacity
          onPress={() => {
            addProductToFirestore('Sprite Can', 100); // Adjust product name and price accordingly
          }}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require('../assets/frame-681311.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backArrowIconPosition: {
    height: 18,
    top: 57,
    position: 'absolute',
  },
  h2Typo: {
    height: 15,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: '500',
    fontSize: FontSize.size_sm,
  },
  h1Clr: {
    letterSpacing: 0,
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
  },
  frameLayout: {
    height: 249,
    width: 173,
    top: 632,
    position: 'absolute',
  },
  h1GroupShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowColor: 'rgba(0, 0, 0, 0)',
    borderRadius: Border.br_lg,
  },
  h11Position: {
    left: 15,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    lineHeight: 18,
    position: 'absolute',
  },
  h12Layout: {
    top: '81.29%',
    width: '38.43%',
    height: '7.24%',
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 18,
    position: 'absolute',
  },
  h21Typo: {
    top: 153,
    left: 15,
    height: 15,
    alignItems: 'center',
    display: 'flex',
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: '500',
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    lineHeight: 18,
    position: 'absolute',
  },
  iconPosition1: {
    left: 62,
    position: 'absolute',
  },
  iconPosition: {
    left: 68,
    position: 'absolute',
  },
  framePosition: {
    top: 105,
    height: 249,
    width: 173,
    position: 'absolute',
  },
  beverages1: {
    left: 158,
    fontSize: FontSize.size_xl,
    textAlign: 'left',
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    top: 50,
    position: 'absolute',
  },
  backArrowIcon: {
    width: 10,
    left: 25,
    overflow: 'hidden',
  },
  beveragesChild: {
    left: 372,
    width: 17,
  },
  pngfuel11Icon: {
    top: 136,
    left: 278,
    width: 44,
    height: 81,
    position: 'absolute',
  },
  pngfuel12Icon: {
    top: 124,
    left: 274,
    width: 52,
    height: 92,
    position: 'absolute',
  },
  h2: {
    top: 258,
    left: 228,
    width: 99,
    alignItems: 'center',
    display: 'flex',
    height: 15,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: '500',
    textAlign: 'left',
    lineHeight: 18,
    position: 'absolute',
  },
  h1: {
    height: '2.01%',
    width: '16.09%',
    top: '34.6%',
    left: '55.12%',
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    lineHeight: 18,
    position: 'absolute',
  },
  h11: {
    top: 130,
    fontSize: FontSize.size_base,
    width: 137,
    letterSpacing: 0,
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
  },
  h12: {
    left: '8.71%',
  },
  frameChild: {
    top: 188,
    left: 114,
    borderRadius: Border.br_mid,
    width: 46,
    height: 46,
    position: 'absolute',
  },
  h21: {
    width: 96,
  },
  h1Parent: {
    left: 0,
    top: 0,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowColor: 'rgba(0, 0, 0, 0)',
    borderRadius: Border.br_lg,
    height: 249,
    width: 173,
    position: 'absolute',
  },
  pngfuel12Icon1: {
    top: 32,
    left: 66,
    width: 41,
    height: 79,
    position: 'absolute',
  },
  pngfuel13Icon: {
    width: 49,
    height: 90,
    top: 20,
  },
  frameParent: {
    left: 25,
  },
  h14: {
    left: '7.5%',
  },
  h22: {
    top: 164,
    width: 89,
    height: 15,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: '500',
    fontSize: FontSize.size_sm,
    left: 15,
  },
  h1Group: {
    left: 0,
    top: 0,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowColor: 'rgba(0, 0, 0, 0)',
    borderRadius: Border.br_lg,
    height: 249,
    width: 173,
    position: 'absolute',
  },
  pngfuel13Icon1: {
    top: 26,
    width: 36,
    height: 88,
  },
  pngfuel14Icon: {
    top: 18,
    width: 50,
    height: 95,
  },
  frameGroup: {
    left: 213,
  },
  profile: {
    marginTop: 384.8,
    width: '10.41%',
    top: '50%',
    left: '81.59%',
    fontFamily: FontFamily.openSansRegular,
    color: Color.colorDarkslategray,
    textAlign: 'right',
    fontSize: FontSize.size_sm,
    position: 'absolute',
  },
  barsHomeIndicatorIphone: {
    top: 880,
    left: 133,
    width: 148,
    height: 16,
    opacity: 0.1,
    position: 'absolute',
  },
  h16: {
    top: '82.54%',
    left: '9.29%',
    width: '38.43%',
    height: '7.24%',
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
    alignItems: 'center',
    display: 'flex',
    textAlign: 'left',
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 18,
    position: 'absolute',
  },
  h23: {
    width: 99,
  },
  h1Container: {
    left: 0,
    top: 0,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowColor: 'rgba(0, 0, 0, 0)',
    borderRadius: Border.br_lg,
    height: 249,
    width: 173,
    position: 'absolute',
  },
  pngfuel10Icon: {
    top: 40,
    width: 38,
    height: 70,
  },
  pngfuel11Icon1: {
    left: 64,
    width: 45,
    height: 89,
    top: 20,
    position: 'absolute',
  },
  frameContainer: {
    left: 25,
  },
  frameView: {
    left: 213,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: 'solid',
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowColor: 'rgba(0, 0, 0, 0)',
    borderRadius: Border.br_lg,
  },
  beverages: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: '100%',
    height: 896,
    overflow: 'hidden',
  },
});

export default Beverages;

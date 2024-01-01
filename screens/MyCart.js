import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image, FlatList, TouchableOpacity} from 'react-native';
import {Color, FontSize, FontFamily, Padding} from '../GlobalStyles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyCart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  const handleDeleteItem = async itemName => {
    try {
      const userId = auth().currentUser.uid;
      const userDocRef = firestore().collection('users').doc(userId);
      const cartCollectionRef = userDocRef.collection('products');

      const itemQuery = await cartCollectionRef.where('name', '==', itemName).get();

      if (!itemQuery.empty) {
        const itemDocRef = itemQuery.docs[0].ref;
        await itemDocRef.delete();

        const updatedCart = cartItems.filter(item => item.name !== itemName);
        setCartItems(updatedCart);

        const total = updatedCart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        );
        setTotalPrice(total);

        await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCart));
      } else {
        console.warn('Item not found in Firestore:', itemName);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let aggregatedItems = [];
        const userId = auth().currentUser.uid;
        const userDocRef = firestore().collection('users').doc(userId);
        const cartCollectionRef = userDocRef.collection('products');

        const cartSnapshot = await cartCollectionRef.get();
        const items = cartSnapshot.docs.map(doc => doc.data());

        const itemMap = new Map();
        items.forEach(item => {
          const itemName = item.name;
          if (itemMap.has(itemName)) {
            itemMap.get(itemName).quantity += 1;
          } else {
            itemMap.set(itemName, { ...item, quantity: 1 });
          }
        });

        aggregatedItems = Array.from(itemMap.values());

        const total = aggregatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        );
        setTotalPrice(total);

        await AsyncStorage.setItem('cartItems', JSON.stringify(aggregatedItems));

        setCartItems(aggregatedItems);
      } catch (error) {
        console.error('Error fetching and storing cart items:', error);
        // If fetching from Firestore fails, attempt to get data from AsyncStorage
        try {
          const storedCartItems = await AsyncStorage.getItem('cartItems');
          if (storedCartItems !== null) {
            const parsedCartItems = JSON.parse(storedCartItems);
            setCartItems(parsedCartItems);

            const total = parsedCartItems.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0,
            );
            setTotalPrice(total);
          }
        } catch (asyncError) {
          console.error('Error fetching cart items from AsyncStorage:', asyncError);
        }
      }
    };

    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.myCart1}>My Cart</Text>
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

      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.cartItem}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text
                style={
                  styles.itemDetails
                }>{`Price: Rs ${item.price} | Quantity: ${item.quantity}`}</Text>
            </View>
            <TouchableOpacity onPress={() => handleDeleteItem(item.name)}>
              <Text style={styles.deleteButton}>✕</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.goToCheckoutContainer}>
        <Text style={[styles.goToCheckout, styles.rs400Typo]}>
          Go to Checkout
        </Text>
        <View style={[styles.rs400Wrapper, styles.h1FlexBox]}>
          <Text
            style={[styles.rs400, styles.rs400Typo]}>{`Rs ${totalPrice}`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: 16,
  },
  myCart1: {
    fontSize: FontSize.size_xl,
    textAlign: 'center',
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    marginVertical: 16,
  },
  cartItem: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    flex: 1,
    fontSize: FontSize.size_base,
    color: Color.darkDeep,
    fontFamily: FontFamily.montserratRegular,
    marginBottom: 8,
  },
  itemDetails: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
  },
  goToCheckoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  goToCheckout: {
    fontSize: FontSize.size_lg,
    color: Color.colorGray_100,
  },
  rs400Typo: {
    color: Color.colorGray_100,
    textAlign: 'center',
    alignItems: 'center',
  },
  backArrowIconPosition: {
    height: 18,
    top: -35,
    position: 'absolute',
  },
  backArrowIcon: {
    width: 10,
    left: 25,
    overflow: 'hidden',
  },
  rs400: {
    fontSize: 30,
  },
  rs400Wrapper: {
    height: 100,
    width: 100,
    marginLeft: 'auto',
    borderRadius: 4,
    backgroundColor: '#489e67',
    paddingHorizontal: 8,
    paddingVertical: Padding.p_11xs,
    overflow: 'hidden',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  deleteButton: {
    backgroundColor: '#ff6347',
    borderRadius: 5,
    padding: 5,
  },
  deleteButtonText: {
    color: 'white',
  },
});

export default MyCart;
